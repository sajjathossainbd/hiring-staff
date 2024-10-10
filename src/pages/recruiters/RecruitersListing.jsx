import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import RecruiterCard from "../../components/recruiter/RecruiterCard";
import SectionTitle from "../../components/shared/SectionTitle";
import Filter from "../../components/recruiter/Filters";



function RecruitersListing() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
    totalPages,
    currentPage,
  } = useSelector((state) => state.recruitersListing);

  useEffect(() => {
    dispatch(fetchRecruitersListing(filters));
  }, [dispatch, filters]);
  const handleFilterChange = (newFilters) => {
    setFilters({ ...newFilters, page: 1 });
  };
  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <NoFoundData title="No Recruiters Found!" />;

  if (!isLoading && !isError && recruiters?.data?.length === 0) {
    content = <NoFoundData title="No Recruiters Found!" />;
  }

  if (!isLoading && !isError && recruiters?.data?.length > 0) {
    content = (
      <div>
        {/* Recruiter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
          {recruiters?.data?.map((recruiter) => (
            <RecruiterCard key={recruiter._id} recruiter={recruiter} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue text-white"
                  : "bg-lightGray"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
    
  }
  console.log(recruiters)
  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Recruiters</title>
      </Helmet>

      <div className="bg-bgLightBlue dark:bg-darkBlue p-4 md:px-24 md:py-8 space-y-6">
        <SectionTitle
          title={"Browse Recruiters"}
          subTitle={"Browse top-rated recruiters across various industries and locations, tailored to meet your hiring needs"}
        />

        {/* All filtering options */}
        <div>
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>

      {/* Content (Loading, No data, Recruiters listing) */}
      <div className="">{content}</div>
    </div>
  );
}

export default RecruitersListing;
