import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axios";
import { Link } from "react-router-dom";
import SecondaryButton from "../shared/SecondaryButton";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";


const JobsManagementTable = () => {

    const { data: jobs, refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await axiosInstance.get("/jobs");
            return res.data;
        },
    });

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
                axiosInstance.delete(`/delete/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Job has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };


    return (
        <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
            <h5>Manage jobs</h5>
            <hr className="my-6 text-lightGray" />
            <div className="overflow-x-auto flex flex-col justify-between lg:h-[550px]">
                <table className="table text-sm">
                    <thead>
                        <tr className="text-base dark:text-white">
                            <th>Name</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Deadline</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs?.jobs?.map((job) => (
                            <tr key={job?._id}>
                                <td>{job?.jobTitle}</td>
                                <td>{job?.category}</td>
                                <td>{job?.job_type}</td>
                                <td>{job?.lastDateToApply}</td>
                                <td>
                                    <Link to={`/job-details/${job?._id}`}>
                                        <SecondaryButton title={"Details"} />
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(job?._id)}
                                        className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="join mx-auto block">
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
        </div> */}
            </div>
        </div>
    );
};

export default JobsManagementTable;