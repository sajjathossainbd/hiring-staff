import { useDispatch, useSelector } from "react-redux";
import JobCardHorizontal from "./JobCardHorizontal";
import { useEffect, useState } from "react";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
import { fetchRecruiterDetails } from "../../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import Loading from "../../ui/Loading";
import NoFoundData from "../../ui/NoFoundData";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { Trans } from "react-i18next";

function TodayNewJobs() {
  const dispatch = useDispatch();

  const {
    jobsListing: jobs,
    isLoading,
    isError,
  } = useSelector((state) => state.jobsListing);

  const jobsData = jobs?.jobs?.slice(0, 3) || [];

  const [recruitersData, setRecruitersData] = useState({});
  const [recruiterIdsFetched, setRecruiterIdsFetched] = useState(new Set());

  useEffect(() => {
    dispatch(fetchJobsListing());
  }, [dispatch]);

  useEffect(() => {
    const fetchRecruiters = async () => {
      const recruiters = {};
      const newRecruiterIds = new Set(recruiterIdsFetched);

      await Promise.all(
        jobsData.map(async (job) => {
          if (!recruiterIdsFetched.has(job.recruiter_id)) {
            const recruiterResponse = await dispatch(
              fetchRecruiterDetails(job.recruiter_id)
            ).unwrap();
            recruiters[job.recruiter_id] = recruiterResponse;
            newRecruiterIds.add(job.recruiter_id);
          }
        })
      );

      if (Object.keys(recruiters).length > 0) {
        setRecruitersData((prevRecruiters) => ({
          ...prevRecruiters,
          ...recruiters,
        }));
        setRecruiterIdsFetched(newRecruiterIds);
      }
    };

    if (jobsData.length > 0) {
      fetchRecruiters();
    }
  }, [jobsData, dispatch, recruiterIdsFetched]);

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
          const recruiter = recruitersData[job.recruiter_id];

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
        <h3>Today&apos;s New Jobs</h3>
        <h3>
          <Trans i18nKey={"todayNewJobs"} />
        </h3>
        <div className="mt-10">{content}</div>
        <Link
          to={"/jobs-listing"}
          className="flex items-center justify-center mt-6"
        >
          <PrimaryBtn title={<Trans i18nKey={"moreJobs"} />} />
        </Link>
      </div>
    </div>
  );
}

export default TodayNewJobs;
