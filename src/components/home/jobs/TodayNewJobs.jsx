import { useDispatch, useSelector } from "react-redux";
import JobCardHorizontal from "./JobCardHorizontal";
import { useEffect, useState } from "react";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
import { fetchRecruiterDetails } from "../../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
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
  } = useSelector(state => state.jobsListing);

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
        jobs.jobs.slice(0, 3).map(async (job) => {
          if (!recruiterIdsFetched.has(job.recruiter_id)) {
            try {
              const recruiterResponse = await dispatch(fetchRecruiterDetails(job.recruiter_id)).unwrap();
              recruiters[job.recruiter_id] = recruiterResponse;
              newRecruiterIds.add(job.recruiter_id);
            } catch (error) {
              console.error('Error fetching recruiter details:', error);
            }
          }
        })
      );

      if (Object.keys(recruiters).length > 0) {
        setRecruitersData(prevRecruiters => ({
          ...prevRecruiters,
          ...recruiters
        }));
        setRecruiterIdsFetched(newRecruiterIds);
      }
    };

    if (jobs?.jobs?.length > 0) {
      fetchRecruiters();
    }
  }, [jobs, dispatch, recruiterIdsFetched]);

  let content;

  if (isLoading) {
<<<<<<< HEAD
    content = (
      <div className="grid gap-10">
        <JobCardHorizontal isLoading={true} />
        <JobCardHorizontal isLoading={true} />
        <JobCardHorizontal isLoading={true} />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <NoFoundData title="No Jobs Found!" />;
  } else if (!isError && jobsData.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
  } else {
    content = (
      <div className="grid gap-10">
        {jobsData.map((job) => {
=======
    content = <Loading />;
  } else if (isError || !jobs?.jobs?.length) {
    content = <NoFoundData title={<Trans i18nKey="noJobsFound" />} />;
  } else {
    content = (
      <div className="grid gap-4">
        {jobs.jobs.slice(0, 3).map(job => {
>>>>>>> d165969842f51e5571934f8c3edbc6f6896b2fb9
          const recruiter = recruitersData[job.recruiter_id];
          return (
            <JobCardHorizontal
              key={job._id}
              job={job}
<<<<<<< HEAD
              recruiterLogo={recruiter?.logo}
              isLoading={false} // Data is loaded
=======
              recruiterName={recruiter?.name}
              recruiterLogo={recruiter?.logo}
>>>>>>> d165969842f51e5571934f8c3edbc6f6896b2fb9
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="bg-bgLightBlue dark:bg-darkBlue py-12">
      <div className="container py-0">
        <h3 className="hover:text-blue transition-all duration-500">
          <Trans i18nKey="todayNewJobs" />
        </h3>
        <div className="mt-8">{content}</div>
        <Link to="/jobs-listing" className="flex items-center justify-center mt-6">
          <PrimaryBtn title={<Trans i18nKey="moreJobs" />} />
        </Link>
      </div>
    </div>
  );
}

export default TodayNewJobs;
