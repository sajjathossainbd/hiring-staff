/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import SecondaryButton from "../../components/shared/SecondaryButton";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
const RecruiterJobsCard = ({
  _id,
  position,
  jobType,
  locations,
  max_salary,
  min_salary,
  dates,
}) => {
  return (
    <div className="md:p-10 p-5  bg-bgLightWhite dark:bg-darkBlue dark:border dark:border-blue container rounded-xl">
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex md:flex-row flex-col items-center gap-2">
              <h4>{position}</h4>
              <span className="bg-bgDeepBlue px-2 rounded-md text-14">
                {jobType}
              </span>
            </div>
            <div className="flex md:flex-row flex-col gap-4 md:py-0 py-4">
              <p className="flex items-center gap-1">
                <CiLocationOn /> {locations}
              </p>
              <p className="flex items-center gap-1">
                <CiBadgeDollar /> {min_salary} - {max_salary}
              </p>
              <p className="flex items-center gap-1">
                <CiCalendar /> {dates}
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-row-reverse gap-5">
          <button className="btn btn-outline btn-primary border-none bg-bgLightBlue">
            <FaRegBookmark className="text-xl" />
          </button>
          <Link to={`/job-details/${_id}`}>
            <SecondaryButton title={"Apply Now"} icon={<GoArrowRight />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterJobsCard;
