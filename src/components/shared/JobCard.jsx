/* eslint-disable no-unused-vars */
import { IoBriefcaseOutline } from "react-icons/io5";
import { WiTime7 } from "react-icons/wi";
import SecondaryButton from "./SecondaryButton";

function JobCard(job) {
  const { job_title, job_type, job_post_time, job_description } = job;
  return (
    <div className="rounded-lg border border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF] dark:bg-darkBlue">
      <div className="px-8 py-12">
        <h4 className="">{job.job_title}</h4>
        <div className="text-12  flex items-center">
          <p className="flex items-center  gap-2 text-lightGray">
            <IoBriefcaseOutline /> {job.job_type}
          </p>
          <p className="flex items-center gap-2 text-lightGray">
            <WiTime7 />
            {job.job_post_time}
          </p>
        </div>

        <p className="text-14 mt-4">{job.job_description}</p>
        <div className="mt-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-md bg-[#EFF3FC]">App</span>
            <span className="px-3 py-1 rounded-md bg-[#EFF3FC]">Figma</span>
          </div>
          <div className="mt-8 flex justify-end">
            <SecondaryButton title={"Apply Now"} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
