import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import JobBanner from "../../components/jobs/JobBanner";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { CardPagination } from "../../components/shared/CardPagination";
import { Helmet } from "react-helmet-async";

function JobsListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page: paramPage } = useParams();
  const page = paramPage ? parseInt(paramPage, 10) : 1;
  const limit = 9;

  // Selectors
  const {
    jobsListing: jobs,
    isLoading,
    isError,
  } = useSelector((state) => state.jobsListing);

  const { JobTitle, AllCategory, Location } = useSelector(
    (state) => state.filters
  );

  const filters = useMemo(
    () => ({
      category: AllCategory,
      job_title: JobTitle,
      job_location: Location,
      page,
      limit,
    }),
    [page, JobTitle, Location, AllCategory]
  );

  useEffect(() => {
    dispatch(fetchJobsListing(filters));
  }, [filters, dispatch]);

  // Content rendering logic
  let content = null;

  if (isLoading) content = <Loading />;
  else if (jobs?.jobs?.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
  } else {
    content = (
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-10 gap-5">
        {jobs?.jobs?.map((job) => {
          return <JobCard key={job._id} job={job} />;
        })}
      </div>
    );
  }

  // Pagination logic
  const currentPage = jobs?.currentPage || 1;
  const totalJobs = jobs?.totalJobs || 0;
  const totalPages = Math.ceil(totalJobs / limit) || 1;

  return (
    <>
      <div className="container flex flex-col justify-center">
        <Helmet>
          <title>Hiring Staff - Find Jobs</title>
        </Helmet>
        {/* Jobs Banner */}
        <JobBanner totalJobs={totalJobs} />

        {/* Jobs Listing */}
        <div className="pb-10 mt-20">{content}</div>

        {/* Card Pagination */}
        {jobs?.jobs && (
          <CardPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(newPage) => navigate(`/jobs-listing/${newPage}`)}
          />
        )}
      </div>
      <NewsLetter />
      <ScrollRestoration />
    </>
  );
}

export default JobsListing;
