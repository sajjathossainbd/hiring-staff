/* eslint-disable react/prop-types */
// JobCard.js
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import MiniBtn from "../ui/MiniBtn";
import { CiLocationOn } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaBuffer } from "react-icons/lia";
import { TbCoinTaka } from "react-icons/tb";
import { WiTime7 } from "react-icons/wi";
function JobCard({ job, recruiterName, recruiterLogo }) {
  const {
    _id,
    jobTitle,
    description,
    job_type,
    postedDate,
    min_salary,
    max_salary,
    job_location,
    featured,
  } = job || {};

  return (
    <div className="boxBorderHoverBlue hover:bg-[white] bg-bgLightBlue dark:bg-darkBlue">
      <div className="md:p-5 p-3 flex flex-col justify-between h-full">
        <div className="">
          <img
            className="w-20 h-auto rounded-full"
            src={recruiterLogo}
            alt=""
          />
          <h6 className="font-normal pt-2">{recruiterName}</h6>
          <h4 className="mb-3">{jobTitle}</h4>

          <div className="flex lg:justify-between md:justify-between sm:justify-start items-center mt-6 flex-wrap">
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
            {featured && (
              <MiniBtn
                value={"Featured"}
                icon={<LiaBuffer />}
                style="bg-softGreen text-blue"
              />
            )}
          </div>

          <p className="text-14 my-3">{description}</p>
          <div className="flex justify-between">
            <p className="text-14 flex items-center gap-x-1">
              <TbCoinTaka className="text-lg" /> {min_salary} - {max_salary}
            </p>
            <p className="flex items-center gap-x-1 text-14">
              <WiTime7 className="text-lg" /> {postedDate}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link to={`/job-details/${_id}`}>
            <SecondaryButton title="Apply Now" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
