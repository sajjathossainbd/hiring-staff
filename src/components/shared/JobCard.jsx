/* eslint-disable react/prop-types */
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SecondaryButton from "./SecondaryButton";
import SkillsButton from "./SkillsButton";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const {
    _id,
    position,
    type,
    posted,
    jobDescription,
    skills = [],
  } = job || {};

  return (
    <div className="rounded-lg border border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF] dark:bg-darkBlue">
      <div className="px-8 py-12">
        <h4 className="">{position}</h4>
        <div className="text-12  flex gap-3 items-center">
          <p className="flex items-center  gap-2 text-lightGray">
            <IoBriefcaseOutline /> {type}
          </p>
          <p className="flex items-center gap-2 text-lightGray">
            <WiTime7 />
            {posted}
          </p>
        </div>

        <p className="text-14 mt-4">{jobDescription}</p>
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillsButton key={index} skill={skill} />
            ))}
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
