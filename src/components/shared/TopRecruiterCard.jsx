/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";
import { RiNumbersLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import SecondaryButton from "./SecondaryButton";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineBriefcase } from "react-icons/hi";
import BookmarkBtn from "../ui/BookmarkBtn";
import MiniBtn from "../ui/MiniBtn";
import PrimaryOutlineBtn from "../ui/PrimaryOutlineBtn";

function TopRecruiterCard({ recruiter }) {
  const { _id, name, industry, logo, location = {} } = recruiter || {};

  return (
    <div className="boxBorderHoverBlue  overflow-hidden hover:bg-[white]  bg-white dark:bg-darkBlue p-2">
      <div className="md:p-5 p-3 flex flex-col justify-between h-full">
        {/* Recruiter Info */}
        <div className="">
          {/* Recruiter logo, name, industry */}
          <div className="">
            <img src={logo} alt={name} className="w-20 rounded-full" />
            <h4 className="">{name}</h4>
            <p className="text-12 mt-1 border-solid border-[1px] inline-block rounded-full py-1 px-5 border-lightGray">
              {industry}
            </p>
          </div>

          {/* Recruiter Button */}
          <div className="flex gap-6 mt-6">
            <MiniBtn
              value={`${location?.state}, ${location?.country}`}
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
        <div className="mt-8 flex justify-between items-center">
          <div className="">
            <Link to={`/recruiter-details/${_id}`}>
              <PrimaryOutlineBtn
                title={"View Profile"}
                icon={<GoArrowRight />}
              />
            </Link>
          </div>
          <div className="">
            <BookmarkBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRecruiterCard;
