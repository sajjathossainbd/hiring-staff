/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
  // data destructuring
  const { _id, name, logo, location } = recruiter || {};

  return (
    <div className="w-full p-4 hover:-translate-y-1 transition duration-300 border-lightGray shadow-md rounded-lg mx-auto">
      <img src={logo} alt={name} className="w-auto h-20 mx-auto mb-4 pt-8" />
      <h4 className="font-semibold text-center text-darkBlue hover:text-blue">
        {name}
      </h4>
      {/* <div className="flex justify-center items-center mt-2">
        <div className="text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={` ${
                index < recruiter.ratings / 10
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="ml-2">({recruiter.ratings})</span>
      </div> */}
      <p className="text-center text-lightGray mt-2">{`${location.address},${location.country}`}</p>
      <div className="mt-8 flex justify-center mb-8">
        {/* <Link
          to={`/recruiters-listing/${recruiter._id}`}
          className="bg-[#E0E6F7] hover:text-blue p-3 rounded-md text-darkBlue transition-all duration-500 text-14"
        >
          {recruiter.openJobs > 0
            ? `${recruiter.openJobs} Open Jobs`
            : "No Open Job"}
        </Link> */}
        <Link to={`/recruiter-details/${_id}`}>
          <button className="btn">Visit</button>
        </Link>
      </div>
    </div>
  );
};

export default RecruiterCard;
