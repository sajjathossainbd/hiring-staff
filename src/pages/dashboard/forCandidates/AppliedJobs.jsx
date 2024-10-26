import { FaTrash } from "react-icons/fa";
import { FaRegEye, FaWarehouse } from "react-icons/fa6";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import TinnyHeading from "../shared/TinnyHeading";
import NoFoundData from "../../../components/ui/NoFoundData";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../components/ui/Loading";
import { CardPagination } from "../../../components/shared/CardPagination";
import useCurrentCandidate from "../../../hooks/useCurrentCandidate";

const AppliedJobs = () => {
  const { currentCandidate } = useCurrentCandidate();
  const userId = currentCandidate?._id;
  const navigate = useNavigate();
  const { page = 1 } = useParams(); // Get current page from URL
  const limit = 12; // Number of jobs per page

  const fetchAppliedJobs = async (currentPage, limit) => {
    const response = await axiosInstance.get(
      `/jobs/applied-jobs/${userId}?page=${currentPage}&limit=${limit}`
    );
    return response.data;
  };

  const {
    // eslint-disable-next-line no-unused-vars
    data: { appliedJobs = [], totalJobs = 0, totalPages = 0 } = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["appliedJobs", userId, page],
    queryFn: () => fetchAppliedJobs(page, limit),
    enabled: !!userId,
  });

  // console.log(appliedJobs);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(
            `/jobs/applied-jobs/delete/${id}`,
            {
              data: { email: currentCandidate?.email },
            }
          );

          if (res.data.deletedCount === 1) {
            Swal.fire(
              "Deleted!",
              "Your application has been deleted.",
              "success"
            );
            refetch();
          }
        } catch (error) {
          console.error("Failed to delete application:", error);
          Swal.fire(
            "Error",
            "Failed to delete your application. Please try again.",
            "error"
          );
        }
      }
    });
  };

  if (isError) return <div>Error loading applied jobs.</div>;
  if (isLoading) return <Loading />;

  if (!appliedJobs.length) {
    return (
      <>
        <TinnyHeading
          title={"Applied Jobs"}
          path={"applied-jobs"}
          pathName={"Applied Jobs"}
        />
        <NoFoundData title="No Applied Jobs Found!" />
      </>
    );
  }
  // console.log(appliedJobs);

  return (
    <div>
      <TinnyHeading
        title={"Applied Jobs"}
        path={"applied-jobs"}
        pathName={"Applied Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-10">
        {appliedJobs?.map((job) => (
          <div
            key={job?._id}
            className="shadow-md bg-white hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto "
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="ml-3">
                  <h5>{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 flex-wrap ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.company_email}
                    </span>
                  </div>
                </div>
                <Link to={`/job-details/${job?.jobId}`}>
                  <button className=" rounded-full text-blue hover:text-white hover:bg-blue">
                    <FaRegEye />
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-12">
                  Applied on:
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    {job.appliedDate}
                  </span>
                </p>
              </div>

              <div className="flex space-x-4 text-gray">
                <button onClick={() => handleDelete(job._id)}>
                  <FaTrash className="hover:text-red-500 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card Pagination */}
      <CardPagination
        currentPage={parseInt(page)}
        totalPages={totalPages}
        onPageChange={(newPage) =>
          navigate(`/dashboard/applied-jobs/${newPage}`)
        }
      />
    </div>
  );
};

export default AppliedJobs;
