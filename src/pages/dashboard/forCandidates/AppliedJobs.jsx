import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "../../../hooks/useCurrentUser";
import Loading from "../../../components/ui/Loading";
import Swal from "sweetalert2";
// import { GoBookmark } from "react-icons/go";

const AppliedJobs = () => {
  const { currentUser } = useCurrentUser();
   

  const userId = currentUser?._id;

  const {
    data: appliedJobs = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["appliedJobs", userId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/jobs/applied-jobs/${userId}`);
      return res.data;
    },
    enabled: !!userId,
  });
 

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading jobs: {error.message} || No Applied Jobs</p>;
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
          const res = await axiosInstance.delete("/jobs/applied-jobs/delete", {
            data: { email: currentUser?.email },
          });
        

          if (res.data.deletedCount === 1) {
            Swal.fire(
              "Deleted!",
              "Your application has been deleted.",
              "success"
            );
            refetch();
          } else {
            Swal.fire("Error", "No application found to delete.", "error");
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

  return (
    <div>
      <h3>My Applied jobs</h3>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 mt-6">
        {appliedJobs?.map((job, idx) => (
          <div
            key={idx}
            className=" shadow-md bg-bgLightBlue hover:-translate-y-1 duration-200 rounded-lg p-6 overflow-auto"
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
                    <span className="flex items-center mr-4 flex-wrap ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.company_email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className=" ">
                <p className="text-12">
                  Applied on:
                  <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                    {job?.appliedDate}
                  </span>
                </p>
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
