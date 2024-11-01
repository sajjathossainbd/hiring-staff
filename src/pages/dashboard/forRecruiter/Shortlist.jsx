import TinnyHeading from "../shared/TinnyHeading";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/axios";
import toast from "react-hot-toast";
import useCurrentUser from "../../../hooks/useCurrentUser";
import shortlist from "./../../../../public/banner2";
import JobShortListCard from "../../../components/dashboard/JobShortListCard";

const Shortlist = () => {
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

  return (
    <div>
      <TinnyHeading
        title="Manage Shortlisted Candidates"
        path="shortlist"
        pathName="Shortlisted Candidates"
      />

      {/* shortlisted candidates list */}
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 mt-6">
        { 
          jobShortlistedInfo
            .filter((job) => job.shortlistedCount > 0)
            .map((job) => (
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
            ))
         }
      </div>
    </div>
  );
};

export default Shortlist;
