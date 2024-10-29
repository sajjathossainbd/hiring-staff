/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import MiniBtn from "../../ui/MiniBtn";
import { Link } from "react-router-dom";
import SecondaryButton from "../../shared/SecondaryButton";
import { GoArrowRight } from "react-icons/go";
import { TbCoinTaka } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// eslint-disable-next-line react/prop-types
function JobCardHorizontal({ job, recruiterLogo, isLoading }) {
  // If data is not loaded, fallback to skeletons
  const {
    _id,
    jobTitle = "",
    job_type = "",
    max_salary = "",
    min_salary = "",
    lastDateToApply = "",
  } = job || {};

  const posted = new Date(lastDateToApply);
  const now = new Date();
  const timeDiff = posted - now;
  const differenceInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const result = (
    <div className="flex gap-2 items-center text-14">
      <CgCalendarDates />
      {differenceInDays < 0 ? "Expired" : `${differenceInDays} Days Left`}
    </div>
  );

  return (
    <div className="boxBorderHoverBlue p-3 rounded-lg flex flex-col md:flex-row lg:flex-row justify-between items-center bg-white dark:bg-darkBlue dark:text-white">
      {/* Left Section: Image + Job Details */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
        {/* Recruiter Logo Skeleton */}
        {isLoading ? (
          <Skeleton width={80} height={80} circle className="rounded-lg" />
        ) : (
          <img className="w-24 rounded-lg" src={recruiterLogo} alt="Logo" />
        )}

        <div>
          {/* Title and Type */}
          <div className="flex lg:flex-row flex-col gap-3">
            {isLoading ? (
              <Skeleton width={200} height={24} />
            ) : (
              <h4>{jobTitle}</h4>
            )}

            {isLoading ? (
              <Skeleton width={100} height={20} />
            ) : (
              <MiniBtn
                value={job_type}
                icon={<IoBriefcaseOutline />}
                style="bg-softGreen text-orange"
              />
            )}
          </div>

          {/* Salary and Deadline */}
          <div className="flex lg:flex-row items-center flex-col lg:gap-4 mt-3">
            <div className="flex gap-1 items-center">
              <TbCoinTaka />
              {isLoading ? (
                <Skeleton width={150} height={20} />
              ) : (
                <p className="text-14">
                  {min_salary} - {max_salary}
                </p>
              )}
            </div>

            {isLoading ? <Skeleton width={120} height={20} /> : result}
          </div>
        </div>
      </div>

      {/* Right Section: Bookmark + Apply Button */}
      <div className="flex justify-between items-center lg:mt-0 mt-3">
        <div className="flex gap-6">
          {isLoading ? (
            <Skeleton width={120} height={40} />
          ) : (
            <Link to={`/job-details/${_id}`}>
              <SecondaryButton title={"Apply Now"} icon={<GoArrowRight />} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCardHorizontal;
