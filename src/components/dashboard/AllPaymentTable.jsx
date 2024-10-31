import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardPagination } from "../shared/CardPagination";

const AllPaymentTable = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const limit = 5;

  const fetchPaymentHistory = async (currentPage, limit) => {
    const response = await axiosInstance.get(
      `/payment-history?page=${currentPage}&limit=${limit}`
    );
    return response.data;
  };

  const {
    data: paymentHistory,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["payment-history", page],
    queryFn: () => fetchPaymentHistory(page || 1, limit),
  });

  if (isError) return <div>Error loading payment history.</div>;

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!paymentHistory) {
    return <div>No payment history available.</div>;
  }

  const currentPage = paymentHistory.currentPage || 1;
  const totalDocuments = paymentHistory.totalDocuments || 0;
  const totalPages = Math.ceil(totalDocuments / limit) || 1;

  const handleDelete = (id) => {
    Swal.fire({
      title: "<span style='color: red;'>Are you sure?</span>",
      html: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/payment-history/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Payment has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  const handleUpdateStatus = async (status, id) => {
    try {
      const res = await axiosInstance.patch(`/payment-history/status/${id}`, {
        status,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Status Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error updating status",
        text: error.response?.data?.message || "An unexpected error occurred.",
      });
    }
  };

  return (
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 px-4 lg:px-8 xl:px-12 rounded-md w-full overflow-x-auto">
      <h5 className="text-lg font-semibold">Manage Payments</h5>
      <hr className="my-6 text-lightGray" />
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto text-xs lg:text-sm min-w-full mb-5">
          {/* Head */}
          <thead>
            <tr className="text-xs lg:text-base dark:text-white">
              <th className="p-2 lg:p-4 text-left">Name</th>
              <th className="p-2 lg:p-4 hidden sm:table-cell text-left">
                Email
              </th>
              <th className="p-2 lg:p-4 text-left">Category</th>
              <th className="p-2 lg:p-4 text-left">Price</th>
              <th className="p-2 lg:p-4 hidden sm:table-cell text-left">
                Date
              </th>
              <th className="p-2 lg:p-4 text-left">Method</th>
              <th className="p-2 lg:p-4 hidden md:table-cell text-left">
                Transaction
              </th>
              <th className="p-2 lg:p-4 text-left">Status</th>
              <th className="p-2 lg:p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.payments?.map((payment) => (
              <tr key={payment._id} className="border-b ">
                <td className="p-2 lg:p-4">{payment?.name}</td>
                <td className="p-2 lg:p-4 hidden sm:table-cell">
                  {payment?.email}
                </td>
                <td className="p-2 lg:p-4">{payment?.category}</td>
                <td className="p-2 lg:p-4 text-blue">${payment.price}</td>
                <td className="p-2 lg:p-4 hidden sm:table-cell">
                  {payment?.date}
                </td>
                <td className="p-2 lg:p-4">{payment?.paymentType}</td>
                <td className="p-2 lg:p-4 hidden md:table-cell">
                  {payment?.transactionId}
                </td>
                <td className="p-2 lg:p-4">
                  <select
                    defaultValue={payment?.status}
                    onChange={(e) =>
                      handleUpdateStatus(e.target.value, payment?._id)
                    }
                    className="select dark:bg-darkBlue select-bordered w-full text-xs lg:text-sm"
                  >
                    <option value="select">Select</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td className="p-2 lg:p-4">
                  <button
                    onClick={() => handleDelete(payment?._id)}
                    className="btn rounded-full text-red-600 hover:text-white hover:bg-blue text-xs lg:text-sm"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <CardPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) =>
            navigate(`/dashboard/all-payment-history/${newPage}`)
          }
        />
      </div>
    </div>
  );
};

export default AllPaymentTable;
