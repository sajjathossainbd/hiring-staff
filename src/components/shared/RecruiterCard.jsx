/* eslint-disable no-unused-vars */
import Tasla from "./../../assets/recruiter/tasla.svg";
import { CiLocationOn } from "react-icons/ci";
import StarRatings from "react-star-ratings";

function RecruiterCard(recruiter) {
  const { img, name, review, location, open_jobs } = recruiter;

  return (
    <div className="py-4 px-5 rounded-xl border border-[#D2D4D7] hover:-translate-y-1 hover:shadow-md hover: shadow-[#D2D4D7] transition-all duration-200 cursor-pointer lg:inline-block block">
      <div className="flex gap-3">
        <img src={Tasla} alt="" />
        <div className="">
          <h6>{name}</h6>
          <div className="mt-1 flex gap-[1px] text-12 items-center">
            <StarRatings
              rating={review}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="12px"
              starSpacing="1px"
            />
            <p className="ml-2">{review}</p>
          </div>
        </div>
      </div>
      <div className="text-lightGray text-12 flex items-center justify-between gap-6 mt-1">
        <p className="flex items-center gap-2">
          <CiLocationOn /> {location}
        </p>
        <p>{open_jobs}</p>
      </div>
    </div>
  );
}

export default RecruiterCard;
