import { IoBriefcaseOutline } from "react-icons/io5";
import MiniBtn from "../../ui/MiniBtn";
import { Link } from "react-router-dom";
import BookmarkBtn from "../../ui/BookmarkBtn";
import SecondaryButton from "../../shared/SecondaryButton";
import { GoArrowRight } from "react-icons/go";
import { TbCoinTaka } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
function JobCardHorizontal({ job, recruiterLogo }) {
  const { _id, jobTitle, job_type, max_salary, min_salary, lastDateToApply } =
    job || {};
  // const calculateDaysRemaining = (postedDate) => {
  //   const now = new Date();
  //   const posted = new Date(postedDate);
  //   const timeDiff = posted - now;
  //   const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //   return daysRemaining > 0 ? `${daysRemaining} Days Remaining` : "Expired";
  // };
  const posted = new Date(lastDateToApply);
  const now = new Date();
  const timeDiff = posted - now;
  console.log(timeDiff);
  const differenceInDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
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
  return (
    <div className="boxBorderHoverBlue p-3 rounded-lg flex flex-col md:flex-row lg:flex-row justify-between items-center bg-white">
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
        <img className="w-24 rounded-lg" src={recruiterLogo} alt="" />

        <div className="">
          {/* title, type */}
          <div className="flex lg:flex-row flex-col gap-3">
            <h4>{jobTitle}</h4>{" "}
            <MiniBtn
              value={job_type}
              icon={<IoBriefcaseOutline />}
              style="bg-softGreen text-orange"
            />
          </div>
          {/* location, price, date */}
          <div className="flex lg:flex-row items-center flex-col lg:gap-4 mt-3">
            <div className="flex gap-1 items-center">
              <TbCoinTaka />
              <p className="text-14">
                {min_salary} - {max_salary}
              </p>
            </div>
            <p>{result}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="">
            <BookmarkBtn />
          </div>
          <Link to={`/job-details/${_id}`}>
            <SecondaryButton title={"Apply Now"} icon={<GoArrowRight />} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCardHorizontal;
