import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { CardPagination } from "../shared/CardPagination";
import SecondaryButton from "../shared/SecondaryButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobsManagementTable = () => {
    const navigate = useNavigate();
    const { page = 1 } = useParams(); // Assuming page is passed in the URL
    const limit = 6; // Set your desired number of jobs per page

    // Fetch jobs with pagination
    const fetchJobs = async (currentPage, limit) => {
        const response = await axiosInstance.get(`/jobs?page=${currentPage}&limit=${limit}`);
        return response.data;
    };

    const {
        data: jobsData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["jobs", page],
        queryFn: () => fetchJobs(page, limit),
    });

    if (isError) return <div>Error loading jobs.</div>;
    if (isLoading) return <Loading />;

    const currentPage = jobsData.currentPage || 1;
    const totalDocuments = jobsData.totalJobs || 0;
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
                axiosInstance.delete(`/jobs/delete/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Job has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };

    const renderSkeletonRows = () =>
        Array.from({ length: limit }).map((_, index) => (
            <tr key={index}>
                {/* <td><Skeleton height={20} width="100%" style={customSkeletonStyle} /></td> */}
                <td><Skeleton height={20} width="100%" /></td>
            </tr>
        ));

    return (
        <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
            <h5>Manage Jobs</h5>
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
                        {jobsData?.jobs?.map((job) => (
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
                    onPageChange={(newPage) => navigate(`/dashboard/manage-all-jobs/${newPage}`)}
                />
            </div>
        </div>
    );
};

export default JobsManagementTable;
