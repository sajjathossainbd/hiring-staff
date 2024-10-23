import { IoBriefcaseOutline } from "react-icons/io5";
import MiniBtn from "../../ui/MiniBtn";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import BookmarkBtn from "../../ui/BookmarkBtn";
import SecondaryButton from "../../shared/SecondaryButton";
import { GoArrowRight } from "react-icons/go";

// eslint-disable-next-line react/prop-types
function JobCardHorizontal({ job, recruiterLogo }) {
  const { _id, jobTitle, job_type, salary_range, postedDate } = job || {};
  const calculateDaysRemaining = (postedDate) => {
    const now = new Date();
    const posted = new Date(postedDate);
    const timeDiff = posted - now;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining > 0 ? `${daysRemaining} Days Remaining` : "Expired";
  };
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
          <div className="flex lg:flex-row flex-col lg:gap-4 mt-3">
            <MiniBtn
              value={salary_range}
              icon={<IoBriefcaseOutline />}
              style="text-18"
            />
            <MiniBtn
              value={`${calculateDaysRemaining(postedDate)}`}
              icon={<MdOutlineDateRange />}
              style="text-18"
            />
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
