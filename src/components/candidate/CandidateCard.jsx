/* eslint-disable react/prop-types */
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { LiaBuffer } from "react-icons/lia";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MiniBtn from "../ui/MiniBtn";
import SecondaryButton from "../shared/SecondaryButton";
import { BsSendArrowUp } from "react-icons/bs";

function CandidateCard({ candidate }) {
  const {
    _id,
    photo_url,
    first_name,
    last_name,
    special_profession,

    location,
    about_me,
    experience_year,
    skills = [],
    level,
    featured,
    ratingsNumbers,
    ratings
  } = candidate || {};

  return (
    <div className="boxBorderHoverBlue overflow-hidden hover:bg-[white] bg-bgLightBlue dark:bg-darkBlue">
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Card Information */}
        <div className="">
          {/* Candidate Personal Info */}
          <div className="flex items-center">
            <img
              src={photo_url}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4 mx-2">
              <h4>
                {first_name} {last_name}
              </h4>
              <p className="text-gray">{special_profession}</p>
            </div>
          </div>
          {/* Featured And Top Rated */}
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <MiniBtn
                value={level}
                icon={<MdOutlineVerified />}
                style="bg-softGreen text-blue"
              />
              <MiniBtn
                value={featured ? "Featured" : ""}
                icon={featured ? <LiaBuffer /> : ""}
                style={`${featured} ? "bg-softGreen text-green : ""`}
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <StarRatings
                rating={ratings}
                starRatedColor="#ffd250"
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="1px"
              />
              <p className="text-blue text-14">
                {ratings} ( {ratingsNumbers} Reviews )
              </p>
            </div>
          </div>

          {/* Description and Skills */}
          <div className="">
            <p className="mt-4 text-14">{about_me?.slice(0, 80)}...</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills?.map((skill, index) => (
                <MiniBtn
                  key={index}
                  value={skill}
                  icon={""}
                  style="bg-bgDeepBlue dark:text-darkBlue text-[8px]"
                />
              ))}
            </div>
          </div>

          {/* City and Expression */}
          <div className="mt-4 text-14 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <CiLocationOn />
              {location?.city}, {location?.state}
            </span>
            <span className="flex items-center gap-1">
              <CiClock2 />
              {experience_year} years
            </span>
          </div>
        </div>

        {/* Hire Button and Bookmark Button */}
        <div className="mt-6 flex justify-between items-center">
          <div className="">
            <Link to={`/candidate-details/${_id}`}>
              <SecondaryButton title={"Hire Me"} icon={<BsSendArrowUp />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
