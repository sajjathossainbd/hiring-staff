/* eslint-disable react/prop-types */
import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import JobBanner from "../../components/jobs/JobBanner";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";

function JobsListing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page: paramPage } = useParams();
  const page = paramPage ? parseInt(paramPage, 10) : 1;
  const limit = 9;

  // Selectors
  const {
    jobsListing: jobs,
    isLoading: jobsLoading,
    isError: jobsError,
  } = useSelector((state) => state.jobsListing);
  const {
    recruiterDetails: recruiter,
    isLoading: recruiterLoading,
    isError: recruiterError,
  } = useSelector((state) => state.recruiterDetails);
  const { JobTitle, AllCategory, Location } = useSelector(
    (state) => state.filters
  );


  const [recruitersData, setRecruitersData] = useState({});

  const filters = useMemo(
    () => ({
      category: AllCategory,
      job_title: JobTitle,
      job_location: Location,
      page,
      limit,
    }),
    [AllCategory, JobTitle, Location, page]
  );

  // Fetch Jobs Listing
  useEffect(() => {
    dispatch(fetchJobsListing(filters));
  }, [filters, dispatch]);

  // Fetch Recruiter details for all jobs
  useEffect(() => {
    if (jobs?.jobs?.length > 0) {
      const fetchRecruiters = async () => {
        const recruiters = {};
        await Promise.all(
          jobs.jobs.map(async (job) => {
            try {
              const recruiterResponse = await dispatch(
                fetchRecruiterDetails(job.recruiter_id)
              ).unwrap();
              recruiters[job.recruiter_id] = recruiterResponse;
            } catch (error) {
              console.error(
                `Error fetching recruiter details for recruiter_id ${job.recruiter_id}:`,
                error
              );
              recruiters[job.recruiter_id] = null;
            }
          })
        );
        setRecruitersData(recruiters);
      };
      fetchRecruiters();
    }
  }, [jobs?.jobs, dispatch]);

  // Unified Loading and Error state
  const isLoading = jobsLoading || recruiterLoading;
  const isError = jobsError || recruiterError;

  // Content rendering logic
  let content = null;

  if (isLoading) content = <Loading />;
  else if (isError || jobs?.jobs?.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
  } else {
    content = (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {jobs?.jobs?.map((job) => {
          const recruiter = recruitersData[job.recruiter_id];
          return (
            <JobCard
              key={job._id}
              job={job}
              recruiterName={recruiter?.name || "Loading..."}
              recruiterLogo={recruiter?.logo || ""}
              recruiterWebsite={recruiter?.website || ""}
              recruiterRating={recruiter?.ratings || 0}
            />
          );
        })}
      </div>
    );
  }

  // Pagination logic
  const currentPage = jobs?.currentPage || 1;
  const totalJobs = jobs?.totalJobs || 0;
  const totalPages = Math.ceil(totalJobs / limit) || 1;

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
