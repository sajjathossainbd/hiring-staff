import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { CardPagination } from "../shared/CardPagination";

const RecruiterManagementTable = () => {
  const navigate = useNavigate();
  const { page = 1 } = useParams();
  const limit = 50;

  // Fetch users with pagination
  const fetchUsers = async (currentPage, limit) => {
    const response = await axiosInstance.get(
      `/recruiters?page=${currentPage}&limit=${limit}`
    );
    return response.data;
  };

  const {
    data: usersData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page, limit),
    enabled: !!page,
  });

  if (isError) return <div>Error loading users.</div>;
  if (isLoading) return <Loading />;

  // Use optional chaining to avoid errors
  const currentPage = usersData?.currentPage || 1;
  const totalDocuments = usersData?.totalDocuments || 0;
  const totalPages = Math.ceil(totalDocuments / limit) || 1;

  const handleDelete = (id) => {
    Swal.fire({
      title: "<span style='color: red;'>Are you sure?</span>",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/recruiters/deleteRecruiter/${id}`)
          .then((res) => {
            console.log("Delete Response:", res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
      <h5>Manage Recruiters</h5>
      <hr className="my-6 text-lightGray" />
      <div className="overflow-x-auto flex flex-col justify-between lg:h-[550px]">
        <table className="table text-sm">
          <thead>
            <tr className="text-base dark:text-white">
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.recruiters?.length > 0 ? (
              usersData?.recruiters.map((user) => (
                <tr key={user._id}>
                  <td>{user?.name}</td>
                  <td>
                    <span className="text-blue">{user.email}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn rounded-full text-red-600 hover:text-white hover:bg-blue"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No recruiters found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <CardPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) =>
            navigate(`/dashboard/manage-recruiters/${newPage}`)
          }
        />
      </div>
    </div>
  );
};

export default RecruiterManagementTable;
