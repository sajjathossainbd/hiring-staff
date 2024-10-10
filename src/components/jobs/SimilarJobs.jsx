/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

function SimilarJobs({
  jobtitle,
  brandImage,
  type,
  howManyDatesAgo,
  company,
  jobLocation,
  country,
  city,
}) {
  return (
    <button className="btn h-auto block text-start bg-white dark:bg-darkBlue border rounded-xl border-bgDeepBlue p-4 hover:bg-bgLightWhite hover:border-bgLightWhite">
      <div className="flex justify-end font-medium text-[13px]">
        {howManyDatesAgo} days ago
      </div>
      <div>
        <div className="flex gap-5 items-start">
          <img className="h-14 w-auto object-cover" src={brandImage} alt="" />
          <div>
            <h5 className="pb-1">{jobtitle}</h5>
            <div className="flex items-center gap-x-2 text-14 mt-1">
              <span className="text-blue font-medium">{company}</span>
              <GoDotFill className="text-[8px] text-gray" />
              <div className="flex items-center gap-x-1 dark:text-white">
                <CiLocationOn />
                <span>
                  {city} , {country}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                {type}
              </span>
              <span className="px-2 py-1 bg-bgLightWhite text-14 font-medium rounded-md">
                {jobLocation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default SimilarJobs;
