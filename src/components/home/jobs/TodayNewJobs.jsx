import { useDispatch, useSelector } from "react-redux";
import JobCardHorizontal from "./JobCardHorizontal";
import { useEffect, useState } from "react";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
import { fetchRecruiterDetails } from "../../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import Loading from "../../ui/Loading";
import NoFoundData from "../../ui/NoFoundData";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../ui/PrimaryBtn";

function TodayNewJobs() {
  const dispatch = useDispatch();

  const {
    jobsListing: jobs,
    isLoading,
    isError,
  } = useSelector((state) => state.jobsListing);

  const jobsData = jobs?.jobs?.slice(0, 3) || [];

  const [recruitersData, setRecruitersData] = useState({});
  const [recruiterIdsFetched, setRecruiterIdsFetched] = useState(new Set()); // Track fetched recruiter IDs

  // Fetch jobs listing
  useEffect(() => {
    dispatch(fetchJobsListing());
  }, [dispatch]);

  // Fetch recruiter details for only the first 3 jobs
  useEffect(() => {
    const fetchRecruiters = async () => {
      const recruiters = {};
      const newRecruiterIds = new Set(recruiterIdsFetched);

      // Only fetch recruiter details for jobs whose recruiter data hasn't been fetched yet
      await Promise.all(
        jobsData.map(async (job) => {
          if (!recruiterIdsFetched.has(job.company_id)) {
            const recruiterResponse = await dispatch(
              fetchRecruiterDetails(job.company_id)
            ).unwrap();
            recruiters[job.company_id] = recruiterResponse;
            newRecruiterIds.add(job.company_id); // Mark the recruiter ID as fetched
          }
        })
      );

      // Update the recruiter data only if new recruiters were fetched
      if (Object.keys(recruiters).length > 0) {
        setRecruitersData((prevRecruiters) => ({
          ...prevRecruiters,
          ...recruiters,
        }));
        setRecruiterIdsFetched(newRecruiterIds); // Update fetched IDs
      }
    };

    if (jobsData.length > 0) {
      fetchRecruiters();
    }
  }, [jobsData, dispatch, recruiterIdsFetched]); // Remove recruitersData from dependencies

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <NoFoundData title="No Jobs Found!" />;

  if (!isError && jobsData.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
  }

  if (!isLoading && !isError && jobsData.length > 0) {
    content = (
      <div className="grid gap-10">
        {jobsData.map((job) => {
          const recruiter = recruitersData[job.company_id];

          return (
            <JobCardHorizontal
              key={job._id}
              job={job}
              recruiterName={recruiter?.name}
              recruiterLogo={recruiter?.logo}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-bgLightBlue py-12">
      <div className="container py-0">
        <h3>Today New Jobs</h3>
        <div className="mt-10">{content}</div>
        <Link
          to={"/jobs-listing"}
          className="flex items-center justify-center mt-6"
        >
          <PrimaryBtn title="More Jobs" />
        </Link>
      </div>
    </div>
  );
}

export default TodayNewJobs;
