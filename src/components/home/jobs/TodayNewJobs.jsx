import { useDispatch, useSelector } from "react-redux";
import JobCardHorizontal from "./JobCardHorizontal";
import { useEffect } from "react";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
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

  useEffect(() => {
    dispatch(fetchJobsListing());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isError || !jobs?.jobs?.length) {
    content = <NoFoundData title={<Trans i18nKey="noJobsFound" />} />;
  } else {
    content = (
      <div className="grid gap-4">
        {jobs.jobs.slice(0, 3).map((job) => {
          return <JobCardHorizontal key={job._id} job={job} />;
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
        <Link
          to="/jobs-listing"
          className="flex items-center justify-center mt-6"
        >
          <PrimaryBtn title={<Trans i18nKey="moreJobs" />} />
        </Link>
      </div>
    </div>
  );
}

export default TodayNewJobs;
