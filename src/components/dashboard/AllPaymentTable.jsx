import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";

const AllPaymentTable = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const limit = 5;

  // Fetch payment history
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

  // Ensure paymentHistory is defined before accessing its properties
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

  // Extract current page and total documents
  const currentPage = paymentHistory.currentPage || 1;
  const totalDocuments = paymentHistory.totalDocuments || 0;
  const totalPages = Math.ceil(totalDocuments / limit) || 1;

  // Navigate to the next or previous page
  const handlePageChange = (direction) => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/dashboard/all-payment-history/${newPage}`);
    }
  };

  // Update payment status
  const handleUpdateStatus = async (status, id) => {
    try {
      const res = await axiosInstance.patch(`/payment-history/status/${id}`, {
        status,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Approved",
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
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
      <h5>Manage Payments</h5>
      <hr className="my-6 text-lightGray" />
      {isLoading && <div>Loading...</div>}
      {/* Table */}
      <div className="overflow-x-auto flex flex-col justify-between lg:h-[500px]">
        <table className="table text-sm">
          {/* Head */}
          <thead>
            <tr className="text-base dark:text-white">
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.payments.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.name}</td>
                <td>{payment.email}</td>
                <td>{payment.category}</td>
                <td>
                  <span className="text-blue">${payment.price}</span>
                </td>
                <td>{payment.date}</td>
                <td>{payment.paymentType}</td>
                <td>{payment.transactionId}</td>
                <td>
                  <select
                    defaultValue={payment.status}
                    onChange={(e) =>
                      handleUpdateStatus(e.target.value, payment._id)
                    }
                    className="select select-bordered w-full"
                  >
                    <option value="select">Select</option>
                    <option value="approve">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="join mx-auto">
          <button
            className="join-item btn"
            onClick={() => handlePageChange("previous")}
            disabled={currentPage <= 1}
            aria-label="Previous Page"
          >
            «
          </button>
          <button className="join-item btn disabled">{`${currentPage} of ${totalPages}`}</button>
          <button
            className="join-item btn"
            onClick={() => handlePageChange("next")}
            disabled={currentPage >= totalPages}
            aria-label="Next Page"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPaymentTable;
