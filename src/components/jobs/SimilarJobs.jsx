/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import MiniBtn from "../ui/MiniBtn";
import { IoMdTime } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";

function SimilarJobs({ job }) {
  const { _id, jobTitle, category, job_type, job_location, lastDateToApply } =
    job;

  // Last date to apply
  const startDate = new Date(lastDateToApply);
  const currentDate = new Date();
  const differenceInTime = startDate - currentDate;

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  const result =
    differenceInDays < 0 ? (
      <div className="flex gap-2 items-center">
        <CgCalendarDates /> Expired
      </div>
    ) : (
      <div className="flex gap-2 items-center">
        <CgCalendarDates /> {differenceInDays} Days Left
      </div>
    );
  // data formate
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = formatDate(lastDateToApply);
  return (
    <Link
      to={`/job-details/${_id}`}
      className="btn h-auto block text-start bg-bgLightWhite dark:bg-darkBlue border rounded-md p-4 hover:bg-white border-bgLightWhite hover:border-blue transition-all duration-500 "
    >
      <div>
        <div className="flex gap-5 items-start">
          <div>
            <h5 className="pb-1">{jobTitle}</h5>
            <p className="text-12 mt-1 border-solid border-[1px] inline-block rounded-full py-1 px-5 border-lightGray">
              {category}
            </p>
            <div className="flex items-center gap-x-2 text-14 mt-4">
              <span className="flex items-center gap-4">
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
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-14">
                <IoMdTime />
              </div>
              {/* how many days left */}
              <div className="flex items-center gap-2 text-12">
                {formattedDate}
                <p className="text-red-600"> {result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SimilarJobs;
