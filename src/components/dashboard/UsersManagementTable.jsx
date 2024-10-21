import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { CardPagination } from "../shared/CardPagination";
import { GoArrowRight } from "react-icons/go";

const UsersManagementTable = () => {
  const navigate = useNavigate();
  const { page = 1 } = useParams();
  const limit = 6;
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleDetailsClick = (user) => {
    setSelectedUser(user);
    document.getElementById('my_modal_3').showModal();
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
              <th>Details</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.users?.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <span className="text-blue">{user.email}</span>
                </td>
                <td>
                  <button className="bg-[#E0E6F7] hover:bg-blue hover:text-[white] p-3 rounded-md text-blue font-medium  transition-all duration-500 text-14 flex gap-1 items-center" onClick={() => handleDetailsClick(user)}>View <GoArrowRight className="text-lg" /></button>
                </td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) =>
                      handleUpdateRole(user.name, e.target.value, user._id)
                    }
                    className="select dark:bg-darkBlue select-bordered lg:w-full w-[100px]"
                  >
                    <option value="admin">Admin</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="candidate">Candidate</option>
                  </select>
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
            ))}
          </tbody>
        </table>
        <CardPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => navigate(`/dashboard/manage-users/${newPage}`)}
        />
      </div>

      {/* DaisyUI Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-gray-200 transition-colors">✕</button>
          </form>
          <h2 className="font-bold text-2xl mb-4 text-gray-800 text-center">
            User Details - <span className="text-blue">{selectedUser?.first_name} {selectedUser?.last_name}</span>
          </h2>
          {selectedUser && (
            <div className="mt-4">
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Plan:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.plan}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Role:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.role}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Email:</span>
                <strong className="ml-2 text-blue">{selectedUser?.email}</strong>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Special Profession:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.special_profession}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Experience:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.experience_year} years</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Phone:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.phone_number}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Location:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.location?.city}, {selectedUser?.location?.state}, {selectedUser?.location?.country}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Resume:</span>
                <span className="ml-2">
                  <Link target="_blank" rel="noopener noreferrer" className="text-blue hover:underline" href={selectedUser?.resume}>view</Link>
                </span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Cover Letter:</span>
                <span className="ml-2">
                  <Link target="_blank" rel="noopener noreferrer" className="text-blue hover:underline" href={selectedUser?.cover_letter}>view</Link>
                </span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Skills:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.skills?.join(", ")}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Date Applied:</span>
                <span className="ml-2 text-gray-600">{new Date(selectedUser?.date_applied).toLocaleDateString()}</span>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-gray-700">Job Type:</span>
                <span className="ml-2 text-gray-600">{selectedUser?.job_type}</span>
              </div>
            </div>
          )}
        </div>
      </dialog>

    </div>
  );
};

export default UsersManagementTable;
