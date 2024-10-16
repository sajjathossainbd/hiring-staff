/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
  // data destructuring
  const { _id, name, logo, address, country, location } = recruiter || {};

  return (
    <div className="boxBorderHoverBlue  overflow-hidden hover:bg-[white]  bg-bgLightBlue dark:bg-darkBlue">
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
      <p className="text-center text-lightGray mt-2">{`${location?.city},${location?.country}`}</p>

      <p className="text-center text-lightGray mt-2">{`${address},${country}`}</p>
      <div className="mt-8 flex justify-center mb-8">
        <Link to={`/recruiter-details/${_id}`}>
          <button className="btn">Visit</button>
        </Link>
      </div>
    </div>
  );
};

export default RecruiterCard;
