import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import JobBanner from "../../components/jobs/JobBanner";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";

function JobsListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page } = useParams() || 1;
  const limit = 9;

  const {
    jobsListing: jobs,
    isLoading,
    isError,
  } = useSelector((state) => state.jobsListing);
  const { JobTitle, AllCategory, Location } = useSelector(
    (state) => state.filters
  );

  const [recruitersData, setRecruitersData] = useState({});

  useEffect(() => {
    const filters = {
      category: AllCategory,
      job_title: JobTitle,
      job_location: Location,
      page: page,
      limit,
    };
    dispatch(fetchJobsListing(filters));
  }, [AllCategory, JobTitle, Location, dispatch, page]);

  // Fetch recruiter details for each job
  useEffect(() => {
    if (jobs?.jobs?.length > 0) {
      const fetchRecruiters = async () => {
        const recruiters = {};
        for (const job of jobs.jobs) {
          const recruiterResponse = await dispatch(
            fetchRecruiterDetails(job.company_id)
          ).unwrap();
          recruiters[job.company_id] = recruiterResponse;
        }
        setRecruitersData(recruiters);
      };
      fetchRecruiters();
    }
  }, [jobs?.jobs, dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <NoFoundData title="No Jobs Found!" />;

  if (!isError && jobs.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
  }

  if (!isLoading && !isError && jobs?.jobs?.length > 0) {
    content = (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {jobs?.jobs?.map((job) => {
          const recruiter = recruitersData[job.company_id];

          return (
            <JobCard
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

  // current page and total jobs count
  const currentPage = jobs?.currentPage || 1;
  const totalJobs = jobs?.totalJobs || 0;
  const totalPages = Math.ceil(totalJobs / limit) || 1;

  // Navigate the next or previous page
  const handlePageChange = (direction) => {
    const newPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/jobs-listing/${newPage}`);
    }
  };

  return (
    <>
      <div className="container flex flex-col justify-center">
        {/* Jobs Banner */}
        <JobBanner totalJobs={totalJobs} />

        {/* Jobs Listing */}
        <div className="pb-10 mt-20">{content}</div>

        {/* Pagination */}
        {jobs?.jobs && (
          <div className="join mx-auto">
            <button
              className="join-item btn dark:bg-white"
              onClick={() => handlePageChange("previous")}
              disabled={currentPage <= 1}
              aria-label="Previous Page"
            >
              «
            </button>
            <button className="join-item btn disabled">{`${currentPage} of ${totalPages}`}</button>
            <button
              className="join-item btn dark:bg-white"
              onClick={() => handlePageChange("next")}
              disabled={currentPage >= totalPages}
              aria-label="Next Page"
            >
              »
            </button>
          </div>
        )}
      </div>
      <NewsLetter />
      <ScrollRestoration />
    </>
  );
}

export default JobsListing;
