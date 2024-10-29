import TinnyHeading from "../shared/TinnyHeading";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import toast from "react-hot-toast";
import useCurrentUser from "../../../hooks/useCurrentUser";
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
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
        {jobShortlistedInfo?.map((job) => (
          <JobShortListCard
            key={job._id}
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
    </div>
  );
};

export default Shortlist;
