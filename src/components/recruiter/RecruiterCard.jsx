/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
  // data destructuring
  const { _id } = recruiter || {};

  return (
    <Link to={`/recruiter-details/${_id}`}>
      <button className="btn">Recruiter Card</button>
    </Link>
  );
};

export default RecruiterCard;
