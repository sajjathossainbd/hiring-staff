/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
function JobCard({ job }) {
  const {
    _id,
    jobTitle,
    job_type,
    postedDate,
    description,
    min_salary,
    max_salary,
    job_location,
  } = job || {};

  // console.log(job);

  return (
    <div className="rounded-lg border border-[#e2e5ef] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF] dark:bg-darkBlue">
      <div className="md:p-5 p-3">
        <h4 className="mb-3">{jobTitle}</h4>
        <div className="text-14 flex justify-between items-center">
          <p className="flex items-center  gap-x-1">
            <IoBriefcaseOutline className="text-lg" /> {job_type}
          </p>

          <p className="flex items-center gap-x-1 text-14">
            <CiLocationOn className="text-lg" />
            {job_location}
          </p>
        </div>

        <p className="text-14 my-3">{description}</p>
        <div className="flex justify-between">
          <p className="text-[13px] flex items-center gap-x-1">
            <CiBadgeDollar className="text-lg" />
            {min_salary} - {max_salary}
          </p>
          <p className="flex items-center gap-x-1 text-[13px]">
            <WiTime7 className="text-lg" /> {postedDate}
          </p>
        </div>
        <div className="mt-6">
          <div className="mt-8 flex justify-end">
            <Link to={`/job-details/${_id}`}>
              <SecondaryButton title={"Apply Now"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
