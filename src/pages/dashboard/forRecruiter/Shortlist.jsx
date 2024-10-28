import { FaRegEye } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { IoCheckmark } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import toast from "react-hot-toast";
import NoFoundData from "../../../components/ui/NoFoundData";
import useCurrentUser from "../../../hooks/useCurrentUser";
import JobPostCard from "./JobPostCard";
import shortlist from "./../../../../public/banner2";
import JobShortListCard from "../../../components/dashboard/JobShortListCard";

const Shortlist = () => {
  const { currentRecruiter } = useCurrentUser();

  // const { data: allShortlistAppliedJobs, refetch } = useQuery({
  //   queryKey: ["allShortlistAppliedJobs", currentRecruiter?.email],
  //   queryFn: async () => {
  //     const res = await axiosInstance.get(
  //       `/jobs/applied-jobs/email/shortlist/${currentRecruiter?.email}`
  //     );
  //     return res.data;
  //   },
  //   enabled: !!currentRecruiter?.email,
  // });

  const { data: myJobs, refetch } = useQuery({
    queryKey: ["myJobs", currentRecruiter?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/jobs/email/${currentRecruiter.email}`
      );
      return res.data;
    },
    enabled: !!currentRecruiter?.email,
  });
  // console.log(myJobs);

  const jobShortlistedInfo = myJobs?.map((job) => {
    const shortlistedApplicants = (job.applications || []).filter(
      (application) => application.shortlist === "approved"
    );

    return {
      jobId: job._id,
      jobTitle: job.jobTitle,
      shortlistedCount: shortlistedApplicants.length,
      shortlistedApplicants: shortlistedApplicants,
    };
  });

  // console.log(jobShortlistedInfo);

  // Function to handle status update for selected
  // const handleUpdateStatus = async (id) => {
  //   try {
  //     const res = await axiosInstance.patch(
  //       `/jobs/applied-jobs/selected/${id}`
  //     );
  //     if (res.status === 200) {
  //       toast.success("Job selected successfully!");
  //       refetch();
  //     }
  //   } catch (error) {
  //     console.error("Error updating job status:", error);
  //     toast.error("Failed to update job status.");
  //   }
  // };

  return (
    <div>
      <TinnyHeading
        title="Manage Shortlisted Candidates"
        path="shortlist"
        pathName="Shortlisted Candidates"
      />

      {/* shortlisted candidates list */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {jobShortlistedInfo?.map((job) => (
          <JobShortListCard
            Cardtitle="Shortlisted Candidates"
            jobTitle={job?.jobTitle}
            statusTitle="Shortlist"
            img={shortlist}
            style="gradient-3"
            link={`/dashboard/shortlsit-candidates/${job?.jobId}`}
            job={job}
          />
        ))}
      </div>

      {/* shorrlist candidates old design list */}
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 rounded-md">
        <h5>Shortlisted Resumes</h5>
        <hr className="my-6 text-lightGray" />
        {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {allShortlistAppliedJobs?.map((person, index) => (
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
                    <a target="_blank" href={person?.resume}>
                      <FaRegEye />
                    </a>
                  </button>
                </div>
                <div className="tooltip" data-tip="Select">
                  <button
                    onClick={() => handleUpdateStatus(person?._id)}
                    className="btn rounded-full text-blue hover:text-white hover:bg-blue"
                  >
                    <IoCheckmark />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Shortlist;
