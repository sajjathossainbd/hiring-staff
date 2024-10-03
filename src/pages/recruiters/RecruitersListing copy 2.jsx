import { useEffect } from "react";
import RecruiterCard from "../../components/recruiter/RecruiterCard";
import { Helmet } from "react-helmet-async";
import Pagination from "../../components/recruiter/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";

const RecruitersListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecruitersListing());
  }, [dispatch]);

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruitersListing);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && recruiters?.length === 0) {
    content = <NoFoundData title="No Recruiters Found!" />;
  }

  if (!isLoading && !isError && recruiters?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruiters.map((recruiter) => (
          <RecruiterCard key={recruiter._id} recruiter={recruiter} />
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Hiring Staff - Recruiters</title>
      </Helmet>
      {/* Banner Section & Recruiter Browser */}
      {/* <RecruiterBrowser /> */}

      {/* Filter and Sorting Section */}
      {/* <Filters /> */}

      {/* Recruiter listing */}
      {content}

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default RecruitersListing;
