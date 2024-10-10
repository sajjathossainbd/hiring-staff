/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiLocationOn } from "react-icons/ci";
import StarRatings from "react-star-ratings";

function RecruiterCard({ recruiter }) {
  const { name, location = {}, logo } = recruiter;
  // console.log(recruiter);

  return (
    <div className="py-4 px-5 rounded-xl border border-[#D2D4D7] hover:-translate-y-1 hover:shadow-md hover: shadow-[#D2D4D7] transition-all duration-200 cursor-pointer lg:inline-block block">
      <div className="flex gap-3">
        <img className="rounded-full w-10 h-10" src={logo} alt="" />
        <div className="">
          <h6>{name}</h6>
          <div className="mt-1 flex gap-[1px] text-12 items-center">
            <StarRatings
              rating={5}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="12px"
              starSpacing="1px"
            />
            <p className="ml-2">4</p>
          </div>
        </div>
      </div>
      <div className="text-lightGray text-12 flex items-center justify-between gap-6 mt-1">
        <p className="flex items-center gap-2">
          <CiLocationOn /> {location.city}
          {location.country}
        </p>
        <p>2 Open Jobs</p>
      </div>
    </div>
  );
}

export default RecruiterCard;
