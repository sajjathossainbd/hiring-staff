/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import MiniBtn from "../../ui/MiniBtn";
import { Link } from "react-router-dom";
import SecondaryButton from "../../shared/SecondaryButton";
import { GoArrowRight } from "react-icons/go";
import { TbCoinTaka } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";

function JobCardHorizontal({
  job,
  // recruiterLogo
}) {
  const { _id, jobTitle, job_type, max_salary, min_salary, lastDateToApply } =
    job || {};
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
    <div className="boxBorderHoverBlue px-6 py-9 rounded-lg flex flex-col md:flex-row lg:flex-row justify-between xl:items-center items-start bg-white dark:bg-darkBlue dark:text-white">
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
        {/* <img className="w-24 rounded-lg" src={recruiterLogo} alt="" /> */}

        <div>
          {/* title, type */}
          <div className="flex lg:flex-row flex-col gap-3">
            <h4>{jobTitle}</h4>
            <MiniBtn
              value={job_type}
              icon={<IoBriefcaseOutline />}
              style="bg-softGreen text-orange"
            />
          </div>
          {/* location, price, date */}
          <div className="flex lg:flex-row lg:items-center items-start flex-col gap-1 lg:gap-4 mt-3">
            <div className="flex gap-1 items-center">
              <TbCoinTaka />
              <p className="text-14">
                {min_salary} - {max_salary}
              </p>
            </div>
            {result} {/* Updated to directly use result as a div */}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center lg:mt-0 mt-3">
        <div className="flex gap-6">
          <Link to={`/job-details/${_id}`}>
            <SecondaryButton title={"Apply Now"} icon={<GoArrowRight />} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCardHorizontal;
