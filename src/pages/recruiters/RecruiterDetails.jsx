/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";

function RecruiterDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    recruiterDetails: recruiter,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruiterDetails);

  // data destructuring
  const { _id, name } = recruiter || {};

  useEffect(() => {
    dispatch(fetchRecruiterDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !recruiter?._id) {
    content = <NoFoundData title={"No Recruiter Found!"} />;
  }

  if (!isLoading && !isError && recruiter?.id) {
    content = (
      <div>
        {/* 
    
        1. recruiter juto data acche database thake,shob akhane rakhben
        2. judi bashi boro hy jai tahole alada compoent create korte paren
        
        */}
      </div>
    );
  }

  // console.log(recruiter);
  return (
    <div className="container">
      <h1>Recruiter Deteils</h1>

      {/* Recruiter Details Content */}
      {content}
    </div>
  );
}

export default RecruiterDetails;
