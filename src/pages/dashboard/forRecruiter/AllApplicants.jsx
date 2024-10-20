import { FaRegEye } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllApplicants = () => {
  const { currentUser } = useCurrentUser();

  const { data: allAppliedJobs, refetch } = useQuery({
    queryKey: ["myJobs", currentUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/applied-jobs/email/${currentUser.email}`
      );
      return res.data;
    },
    enabled: !!currentUser?.email,
  });

  // Handle shortlist or reject action
  const handleUpdateStatus = async (id, action) => {
    const updateData = action === "shortlist"
      ? { shortlist: "approved" }
      : { reject: true };

    try {
      const res = await axiosInstance.patch(
        `/jobs/applied-jobs/update/${id}`,
        updateData
      );

      if (res.data.updatedCount) {
        const statusText = action === "shortlist" ? "Shortlisted" : "Rejected";
        Swal.fire({
          position: "center",
          icon: "success",
          title: `This application is now ${statusText}.`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

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
        axiosInstance.delete(`/jobs/applied-jobs/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Job has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <TinnyHeading
        title="All Applicants"
        path="all-applicants"
        pathName="All Applicants"
      />
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 rounded-md">
        <h5>Applicants</h5>
        <hr className="my-6 text-lightGray" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {allAppliedJobs?.map((person, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col justify-between border border-lightGray rounded-lg hover:border-gray transition-all duration-200 lg:p-6 p-3 pb-6"
            >
              <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex flex-col gap-2 justify-center">
                  <span className="font-bold">{person?.applicantName}</span>
                  <span className="text-sm font-medium text-blue">
                    {person?.jobTitle}
                  </span>
                  <div className="flex justify-between lg:gap-14 lg:pt-0 pt-1 items-center">
                    <span className="text-sm flex items-center gap-1">
                      <CiLocationOn />
                      {person?.applicantEmail}
                    </span>
                    <span className="text-sm flex gap-1 items-center">
                      <IoTimeOutline />
                      {person?.availability}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue overflow-x-auto">
                      {person?.coverLetter}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-2 lg:pt-0 pt-6">
                <div className="tooltip" data-tip="Resume">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <Link href={person?.resume}>
                      <FaRegEye />
                    </Link>
                  </button>
                </div>
                <div className="tooltip" data-tip="Shortlist">
                  <button
                    onClick={() => handleUpdateStatus(person?._id, "shortlist")}
                    className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                  >
                    <IoCheckmark />
                  </button>
                </div>
                <div className="tooltip" data-tip="Reject">
                  <button
                    onClick={() => handleUpdateStatus(person?._id, "reject")}
                    className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className="tooltip" data-tip="Delete">
                  <button
                    onClick={() => handleDelete(person?._id)}
                    className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApplicants;
