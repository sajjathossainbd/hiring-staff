import TinnyHeading from "../shared/TinnyHeading";
import JobPostCard from "./JobPostCard";
import interview from "./../../../../public/interview2.json";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import InterviewCard from "../../../components/dashboard/InterviewCard";
import { Helmet } from "react-helmet-async";

function InterviewCandidets() {
  const { currentRecruiter } = useCurrentUser();

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

  const jobInterviewInfo = myJobs?.map((job) => {
    const InteriewApplicants = (job.applications || []).filter(
      (application) => application.interview === true
    );

    return {
      jobId: job._id,
      jobTitle: job.jobTitle,
      InterviewCount: InteriewApplicants.length,
      InteriewApplicants: InteriewApplicants,
    };
  });
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Interview Candidates</title>
      </Helmet>
      <TinnyHeading
        title="Manage Interview Candidates"
        path="interview-candidates"
        pathName="Interview Candidates"
      />

      {/* shortlisted candidates list */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {jobInterviewInfo?.map((job) => (
          <InterviewCard
            key={job.jobId}
            Cardtitle="Interview Candidates"
            jobTitle={job.jobTitle}
            statusTitle={"Interview"}
            img={interview}
            style="gradient-3"
            link={`/dashboard/interview-candidates/${job.jobId}`}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}

export default InterviewCandidets;
