import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import JobBanner from "../../components/jobs/JobBanner";

function JobsListing() {
  const dispatch = useDispatch();

  const {
    jobsListing: jobs,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobsListing);

  useEffect(() => {
    dispatch(fetchJobsListing());
  }, [dispatch]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <NoFoundData title="No Videos Found!" />;
  }
  if (!isLoading && !isError && jobs?.length > 0) {
    content = (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container">
        {/* Jobs Banner */}
        <JobBanner />

        {/* Jobs Listing */}
        <div className="pb-10 mt-20">{content}</div>
        {/* pagination */}
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default JobsListing;
