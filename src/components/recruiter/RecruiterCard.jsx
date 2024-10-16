/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MiniBtn from "../ui/MiniBtn";
import { CiBookmark, CiLocationOn, CiMoneyBill } from "react-icons/ci";
import { HiOutlineBriefcase } from "react-icons/hi";
import { RiNumbersLine } from "react-icons/ri";
import StarRatings from "react-star-ratings";
import SecondaryButton from "../shared/SecondaryButton";
import { GoArrowRight } from "react-icons/go";

const RecruiterCard = ({ recruiter }) => {
  // data destructuring
  const {
    _id,
    name,
    industry,
    description,
    annualRevenue,
    companySizeCategory,
    logo,
    location = {},
  } = recruiter || {};

  return (
    <div className="boxBorderHoverBlue  overflow-hidden hover:bg-[white]  bg-bgLightBlue dark:bg-darkBlue">
      <div className="md:p-5 p-3 flex flex-col justify-between h-full">
        {/* Recruiter Info */}
        <div className="">
          <img src={logo} alt={name} className="w-20 rounded-full" />
          <h4 className="">{name}</h4>
          <p className="text-12 mt-1 border-solid border-[1px] inline-block rounded-full py-1 px-5 border-lightGray">
            {industry}
          </p>

          {/* Button */}
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

          {/* Description */}
          <p className="mt-3">{description?.slice(0, 90)}...</p>

          {/* Revenue and Size */}
          <div className="flex justify-between mt-2">
            <p className="text-12 flex items-center gap-x-1 capitalize">
              <CiMoneyBill className="text-lg" />
              {annualRevenue} Yearly Revenue
            </p>
            <p className="flex items-center gap-x-1 text-12">
              <RiNumbersLine className="text-lg" /> {companySizeCategory} Size
            </p>
          </div>

          {/*  */}
        </div>

        {/* View More Button And Favourite Icon */}
        <div className="mt-8 flex justify-between items-center">
          <div className="">
            <Link to={`/recruiter-details/${_id}`}>
              <SecondaryButton title={"View Profile"} icon={<GoArrowRight />} />
            </Link>
          </div>
          <div className="hover:bg-bgDeepBlue p-2 rounded-md hover:text-blue text-gray cursor-pointer hover:font-bold">
            <CiBookmark className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;
