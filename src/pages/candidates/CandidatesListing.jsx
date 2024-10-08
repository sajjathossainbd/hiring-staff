import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import CandidateCard from "../../components/candidate/CandidateCard";
import SectionTitle from "../../components/shared/SectionTitle";
import CandidatesFiltering from "../../components/candidate/candidatesFiltering";

function CandidatesListing() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  const {
    candidatesListing: candidates,
    isLoading,
    isError,
    error,
    totalPages,
    currentPage,
  } = useSelector((state) => state.candidatesListing);

  useEffect(() => {
    dispatch(fetchCandidatesListing(filters));
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...newFilters, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && candidates?.candidates?.length === 0) {
    content = <NoFoundData title="No Candidates Found!" />;
  }

  if (!isLoading && !isError && candidates?.candidates?.length > 0) {
    content = (
      <div>
        <div className="bg-bgLightBlue dark:bg-darkBlue p-4 md:px-24 md:py-8 space-y-6">
          <SectionTitle
            title={"Browse Candidates"}
            subTitle={
              "Browse top-rated professionals across various skills and locations, tailored to meet your project needs"
            }
          />
          {/* all filtering goese here */}
          <div>
            <CandidatesFiltering onFilterChange={handleFilterChange} />
          </div>
        </div>

        {/* candidate card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
          {candidates?.candidates?.map((candidate) => (
            <CandidateCard key={candidate._id} candidate={candidate} />
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

  console.log(candidates);

  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Candidates</title>
      </Helmet>
      <div className="">{content}</div>
    </div>
  );
}

export default CandidatesListing;
