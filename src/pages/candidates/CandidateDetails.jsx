/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCandidateDetails } from "../../features/candidates/candidateDetails/candidateDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";

function CandidateDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    candidateDetails: candidate,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.candidateDetails);

  // data destructuring
  const { first_name, last_name } = candidate || {};

  useEffect(() => {
    dispatch(fetchCandidateDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !candidate?._id) {
    content = <NoFoundData title={"No Candidate Found!"} />;
  }

  if (!isLoading && !isError && candidate?.id) {
    content = (
      <div>
        {/* 
    
        1. candidate juto data acche database thake,shob akhane rakhben
        2. judi bashi boro hy jai tahole alada compoent create korte paren
        
        */}
      </div>
    );
  }

  // console.log(candidate);

  return (
    <div className="container">
      <h1>Condate Deteils</h1>

      {/* Candidate Details Content */}
      {content}
    </div>
  );
}

export default CandidateDetails;
