import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";

const UsersManagementTable = () => {

    const { refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    });

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    const handleUpdateRole = (name, role, id) => {
        axiosInstance.patch(`/users/profile/role/${id}`, { role })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} is now a ${role}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            });
    };


    return (
        <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
            <h5>Manage Jobs</h5>
            <hr className="my-6 text-lightGray" />
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table text-sm">
                    {/* head */}
                    <thead>
                        <tr className="text-base dark:text-white">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Linkedin</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold mb-2 lg:text-base text-sm">
                                                {user?.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-blue">{user?.email}</span>
                                </td>
                                <td>
                                    <a
                                        className="hover:text-blue hover:underline"
                                        target="_blank"
                                        href={user?.linkedin}>Linkedin</a>
                                </td>

                                <td>
                                    <td>
                                        <select
                                            defaultValue={user?.role}
                                            onChange={(e) => handleUpdateRole(user?.name, e.target.value, user?._id)}
                                            className="select select-bordered w-full"
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="recruiter">Recruiter</option>
                                            <option value="candidate">Candidate</option>
                                        </select>
                                    </td>

                                </td>

                                <td className="flex gap-2">
                                    <div className="tooltip" data-tip="Delete">
                                        <button
                                            onClick={() => handleDelete(user?._id)}
                                            className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagementTable;