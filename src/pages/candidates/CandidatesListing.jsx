import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import CandidateCard from "../../components/candidate/CandidateCard";

function CandidatesListing() {
  const dispatch = useDispatch();

  const {
    candidatesListing: candidates,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.candidatesListing);

  useEffect(() => {
    dispatch(fetchCandidatesListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && candidates?.length === 0) {
    content = <NoFoundData title="No Candidates Found!" />;
  }

  if (!isLoading && !isError && candidates?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate._id} candidate={candidate} />
        ))}
      </div>
    );
  }

  // console.log(candidates);

  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Candidates</title>
      </Helmet>
      <div className="">
        <h1>Candidate Listing</h1>

        {/* Candidate Card */}
        {content}
      </div>
    </div>
  );
}

export default CandidatesListing;
