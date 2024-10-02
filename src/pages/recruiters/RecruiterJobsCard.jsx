/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import SecondaryButton from "../../components/shared/SecondaryButton";
const RecruiterJobsCard = ({
  recruiterImage,
  position,
  jobType,
  locations,
  salary,
  dates,
}) => {
  return (
    <div className="md:p-10 p-5  bg-bgLightWhite dark:bg-darkBlue dark:border dark:border-blue container rounded-xl">
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <img
            className="object-cover h-20 w-auto rounded-md"
            src={recruiterImage}
            alt=""
          />
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
                <CiBadgeDollar /> {salary}
              </p>
              <p className="flex items-center gap-1">
                <CiCalendar /> {dates}
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-row-reverse gap-5">
          <button className="btn btn-outline btn-primary border-none bg-bgLightBlue">
            <FaRegBookmark className="text-xl dark:text-white" />
          </button>
          <SecondaryButton title={"Apply Now"} />
        </div>
      </div>
    </div>
  );
};

export default RecruiterJobsCard;
