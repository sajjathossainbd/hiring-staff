/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RecruiterCard = ({ recruiter }) => {
  // data destructuring
  const { _id, name, logo, address, country } = recruiter || {};

  return (
    <div className="w-full p-4 border hover:-translate-y-1 transition duration-300 border-lightGray shadow-md rounded-lg mx-auto">
      <img src={logo} alt={name} className="w-auto h-20 mx-auto mb-4 pt-8" />
      <h4 className="font-semibold text-center text-darkBlue hover:text-blue">
        {name}
      </h4>
      
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
