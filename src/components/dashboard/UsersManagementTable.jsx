import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";

const UsersManagementTable = () => {
  const navigate = useNavigate();
  const { page = 1 } = useParams();
  const limit = 5;

  // Fetch users with pagination
  const fetchUsers = async (currentPage, limit) => {
    const response = await axiosInstance.get(
      `/users?page=${currentPage}&limit=${limit}`
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
  });

  if (isError) return <div>Error loading users.</div>;
  if (isLoading) return <Loading />;

  const currentPage = usersData.currentPage || 1;
  const totalDocuments = usersData.totalDocuments || 0;
  const totalPages = Math.ceil(totalDocuments / limit) || 1;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  const handleUpdateRole = (name, role, id) => {
    axiosInstance.patch(`/users/profile/role/${id}`, { role }).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} is now a ${role}`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handlePageChange = (direction) => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/dashboard/manage-users/${newPage}`);
    }
  };

  return (
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
      <h5>Manage Users</h5>
      <hr className="my-6 text-lightGray" />
      <div className="overflow-x-auto flex flex-col justify-between lg:h-[550px]">
        <table className="table text-sm">
          <thead>
            <tr className="text-base dark:text-white">
              <th>Name</th>
              <th>Email</th>
              <th>Linkedin</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData.users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <span className="text-blue">{user.email}</span>
                </td>
                <td>
                  <a
                    className="hover:text-blue hover:underline"
                    target="_blank"
                    href={user.linkedin}
                  >
                    Linkedin
                  </a>
                </td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) =>
                      handleUpdateRole(user.name, e.target.value, user._id)
                    }
                    className="select select-bordered lg:w-full w-[100px]"
                  >
                    <option value="admin">Admin</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="candidate">Candidate</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="join mx-auto block">
          <button
            className="join-item btn"
            onClick={() => handlePageChange("previous")}
            disabled={currentPage <= 1}
          >
            «
          </button>
          <button className="join-item btn disabled">{`${currentPage} of ${totalPages}`}</button>
          <button
            className="join-item btn"
            onClick={() => handlePageChange("next")}
            disabled={currentPage >= totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersManagementTable;
