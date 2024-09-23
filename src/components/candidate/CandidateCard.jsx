/* eslint-disable react/prop-types */
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

function CandidateCard({ candidate }) {
  const {
    id,
    name,
    language,
    ratings,
    about_me,
    skills,
    area,
    charge_per_hour,
    img,
  } = candidate;
  return (
    <div className=" border border-lightGray rounded-lg overflow-hidden shadow-sm bg-bgLightBlue hover:bg-white hover:-translate-y-1 duration-300">
      <Link to={`/candidate-details/${id}`} state={{ candidate }}>
        <div className="p-6">
          <div className="flex items-center">
            <img src={img} alt="Profile" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-sm text-gray-600">{language}</p>
            </div>
          </div>

          <div className="mt-1 flex gap-[1px] text-14 items-center">
            <StarRatings
              rating={ratings}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="1px"
            />
            <p className="ml-2">{ratings}</p>
          </div>

          <p className="mt-4 text-gray-700 text-sm">
            {about_me.slice(0, 80)}...
          </p>

          <div className="mt-4  flex flex-wrap">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="bg-[#e1e6ff] m-1 py-1 px-2 rounded-md text-12"
              >
                {skill}
              </button>
            ))}
          </div>
          <hr className="border-lightGray mt-2" />

          <div className="mt-4 text-12 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <CiLocationOn />
              {area}
            </span>
            <span className="flex items-center gap-1">
              <CiClock2 />${charge_per_hour}/hour
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CandidateCard;
