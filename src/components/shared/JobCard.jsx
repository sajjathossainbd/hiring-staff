/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SecondaryButton from "./SecondaryButton";
import SkillsButton from "./SkillsButton";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const { _id, job_title, job_type, date_posted, description, job_category } =
    job || {};

  console.log(job);

  return (
    <div className="rounded-lg border border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF] dark:bg-darkBlue">
      <div className="px-8 py-12">
        <h4 className="">{job_title}</h4>
        <div className="text-12  flex gap-3 items-center">
          <p className="flex items-center  gap-2 text-lightGray">
            <IoBriefcaseOutline /> {job_type}
          </p>
          <p className="flex items-center gap-2 text-lightGray">
            <WiTime7 />
            {date_posted}
          </p>
        </div>

        <p className="text-14 mt-4">{description}</p>
        <div className="mt-6">
          <div className="">
            <SkillsButton skill={job_category} />
          </div>
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
