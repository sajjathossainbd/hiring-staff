/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";
import { RiNumbersLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import SecondaryButton from "./SecondaryButton";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi";
import MiniBtn from "../ui/MiniBtn";
import PrimaryOutlineBtn from "../ui/PrimaryOutlineBtn";

function TopRecruiterCard({ recruiter }) {
  const { _id, name, industry, logo, location } = recruiter || {};

  return (
    <div className="boxBorderHoverBlue  overflow-hidden hover:bg-[white]  bg-bgLightBlue dark:bg-darkBlue p-2">
      <div className="md:p-5 p-3 flex flex-col xl:justify-between justify-start items-start h-full">
        {/* Recruiter Info */}
        <div className="">
          {/* Recruiter logo, name, industry */}
          <div className="">
            <img
              src={logo}
              alt={name}
              className="xl:h-20 lg:h-14 h-12 w-auto object-cover rounded-xl"
            />
            <h4 className="">{name}</h4>
            <p className="text-12 mt-1 border-solid border-[1px] inline-block rounded-full py-1 px-5 border-lightGray">
              {industry}
            </p>
          </div>

          {/* Recruiter Button */}
          <div className="flex xl:flex-row flex-col xl:gap-6 gap-1 mt-6">
            <MiniBtn
              value={location}
              icon={<CiLocationOn />}
              style="bg-softGreen text-green"
            />
            <MiniBtn
              value={"4 Open Job"}
              icon={<HiOutlineBriefcase />}
              style="bg-softGreen text-blue"
            />
          </div>

          {/* Rating */}
          <div className="mt-[3px] flex gap-[1px] text-14 items-center">
            <StarRatings
              rating={4}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="1px"
            />
            <p className="ml-2 text-blue">4.5 Rating</p>
          </div>
        </div>

        {/* View More Button And Favourite Icon */}
        <div className="mt-auto flex justify-between items-center">
          <Link to={`/recruiter-details/${_id}`}>
            <PrimaryOutlineBtn title={"View Profile"} icon={<GoArrowRight />} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopRecruiterCard;
