/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import MiniBtn from "../ui/MiniBtn";
import { GoArrowRight } from "react-icons/go";
import { LiaBuffer } from "react-icons/lia";
import BookmarkBtn from "../ui/BookmarkBtn";
function JobCard({ job }) {
  const {
    _id,
    jobTitle,
    job_type,
    postedDate,
    description = [],
    min_salary,
    max_salary,
    job_location,
  } = job || {};

  // console.log(job);

  return (
    <div className="boxBorderHoverBlue hover:bg-[white]  bg-bgLightBlue dark:bg-darkBlue">
      <div className="md:p-5 p-3 flex flex-col justify-between h-full">
        <div className="">
          {/* Recruiter Information */}
          <div className="">
            <img
              className="w-20"
              src="https://finestwp.co/demos/html/jobcamp/image/l1/png/feature-brand-1.png"
              alt=""
            />
            <h6 className="font-normal pt-2">Golosoft LLC</h6>
            <h4 className="mb-3">{jobTitle}</h4>
          </div>

          {/* Button Information */}
          <div className="flex lg:justify-between md:justify-between sm:justify-start lg:gap-y-2 md:gap-y-4 sm:gap-6 max-sm:gap-4 items-center mt-6 flex-wrap">
            <MiniBtn
              value={job_location}
              icon={<CiLocationOn />}
              style="bg-softGreen text-green"
            />
            <MiniBtn
              value={job_type}
              icon={<IoBriefcaseOutline />}
              style="bg-softGreen text-orange"
            />
            <MiniBtn
              value={"Featured"}
              icon={<LiaBuffer />}
              style="bg-softGreen text-blue"
            />
          </div>

          {/* Description And Price */}
          <div className="">
            <p className="text-14 my-3">{description[0]}</p>
            <div className="flex justify-between">
              <p className="text-14 flex items-center gap-x-1">
                <CiBadgeDollar className="text-lg" />
                {min_salary} - {max_salary}
              </p>
              <p className="flex items-center gap-x-1 text-14">
                <WiTime7 className="text-lg" /> {postedDate}
              </p>
            </div>
          </div>
        </div>

        {/* Apply Button And Favourite Icon */}
        <div className="mt-8 flex justify-between items-center">
          <div className="">
            <Link to={`/job-details/${_id}`}>
              <SecondaryButton title={"Apply Now"} icon={<GoArrowRight />} />
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

export default JobCard;
