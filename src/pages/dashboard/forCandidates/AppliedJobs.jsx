import {
  FaMapMarkerAlt,
  FaTrash,
} from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";
import Loading from "../../../components/ui/Loading";
import Swal from "sweetalert2";
// import { GoBookmark } from "react-icons/go";

const AppliedJobs = () => {

  const { currentUser } = useCurrentUser();

  const { data: jobs = [], isLoading, error, refetch } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await axiosInstance.get("/jobs");
      return res.data;
    },
  });

  const filterJobs = (jobs) => {

    if (!currentUser || !currentUser.email) {
      return [];
    }

    return jobs?.jobs?.filter((job) =>
      job.appliers && job.appliers.some((applicant) => applicant.email === currentUser.email)
    );
  };

  // Filtered applied jobs
  const appliedJobs = filterJobs(jobs);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading jobs: {error.message}</p>;
  }

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
          const res = await axiosInstance.delete(`/jobs/applications/delete/${id}`, {
            data: { email: currentUser?.email },
          });

          if (res.data.modifiedCount > 0) {
            Swal.fire("Deleted!", "Your application has been deleted.", "success");
            refetch();
          } else {
            Swal.fire("Error", "No application found to delete.", "error");
          }

        } catch (error) {
          console.error("Failed to delete application:", error);
          Swal.fire("Error", "Failed to delete your application. Please try again.", "error");
        }
      }
    });
  };



  return (
    <div>
      <h3>My Applied jobs</h3>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-6">
        {appliedJobs?.map((job, idx) => (
          <div
            key={idx}
            className=" shadow-md bg-bgLightBlue hover:-translate-y-1 duration-200 rounded-lg p-6 "
          >
            <div>
              <div className="flex items-center">
                <img
                  src={job.logoUrl || "	https://via.placeholder.com/50"}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <h5 className="">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.job_type}
                    </span>
                    <span className="flex items-center mr-4">
                      <FaMapMarkerAlt className="mr-1 text-lightBlue" />{" "}
                      {job.lastDateToApply}
                    </span>
                    <span>
                      <span className="text-lightBlue">$ </span> {job.min_salary} - {job.max_salary}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="text-12 flex space-x-2">
                <span className="bg-red-100 text-red-500  px-3 py-1 rounded-full">
                  {job?.tags[0]}
                </span>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                  {job?.tags[1]}
                </span>
                <span className="bg-lightText text-lightBlue px-3 py-1 rounded-full">
                  {job?.tags[2]}
                </span>
              </div>

              <div className="flex space-x-4 text-gray">
                <button onClick={() => handleDelete(job?._id)}>
                  <FaTrash className="hover:text-red-500 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
