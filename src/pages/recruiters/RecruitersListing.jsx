import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import RecruiterCard from "../../components/recruiter/RecruiterCard";

function RecruitersListing() {
  const dispatch = useDispatch();

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruitersListing);

  useEffect(() => {
    dispatch(fetchRecruitersListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && recruiters?.length === 0) {
    content = <NoFoundData title="No Jobs Found!" />;
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
    <div className="container">
      <h1>Recruiter Listing</h1>

      {/* Recruiter Listing Card */}
      {content}
    </div>
  );
}

export default RecruitersListing;
