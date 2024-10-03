/* eslint-disable react/prop-types */
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

function CandidateCard({ candidate }) {
  // data destructuring
  const { _id, photo_url, first_name, email, last_name, skills, location } =
    candidate || {};

  // console.log(candidate);
  return (
    <div className=" border border-lightGray rounded-lg overflow-hidden shadow-sm bg-bgLightBlue dark:bg-darkBlue dark:text-white hover:bg-white hover:-translate-y-1 duration-300">
      <Link to={`/candidate-details/${_id}`}>
        <div className="p-6">
          <div className="flex items-center">
            <img
              src={photo_url}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 mx-2">
              <h4 className="">
                {first_name} {last_name}
              </h4>
              <p className=" text-gray">Javascript</p>
            </div>
          </div>

          <div className="mt-1 flex gap-[1px] text-14 items-center">
            <StarRatings
              rating={ 4}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="1px"
            />
            <p className="ml-2">5</p>
          </div>

          <p className="mt-4 text-gray-700 text-sm">
            About me or Description
            {/* {about_me.slice(0, 80)}... */}
          </p>
          <div className="mt-4  flex flex-wrap">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="bg-[#e1e6ff] dark:text-darkBlue m-1 py-1 px-2 rounded-md text-12"
              >
                {skill}
              </button>
            ))}
          </div>
          <hr className="border-lightGray mt-2" />
          <div className="mt-4 text-12 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <CiLocationOn />
              {location.city}
            </span>
            <span className="flex items-center gap-1">
              <CiClock2 />
              $35 /hour
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CandidateCard;
