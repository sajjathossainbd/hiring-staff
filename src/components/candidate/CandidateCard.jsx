/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CandidateCard({ candidate }) {
  // data destructuring
  const { _id } = candidate || {};

  // console.log(candidate);
  return (
    <Link to={`/candidate-details/${_id}`}>
      <button className="btn ">Candidate Details</button>
    </Link>
  );
}

export default CandidateCard;
