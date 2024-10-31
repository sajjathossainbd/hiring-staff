/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";

function JobPostCard({ Cardtitle, img, style, link, job }) {
  const { jobTitle, applicationsCount } = job;

  return (
    <div className="light:bg-white dark:border border-bgDeepBlue p-4 sm:p-6 rounded-lg">
      <div
        className={`flex flex-col md:flex-row items-center p-8 md:p-16 rounded-lg h-auto md:h-64 gap-6 ${style}`}
      >
        {/* Title */}
        <div className="w-full lg:w-7/12">
          <h3 className="text-lg md:text-xl">{`${Cardtitle}...`}</h3>
          <p className="text-gray text-sm md:text-base">{jobTitle}</p>
        </div>

        {/* Card Images */}
        <div className="w-full md:w-5/12">
          <Lottie
            className="w-full lg:h-auto h-52"
            animationData={img}
          ></Lottie>
        </div>
      </div>

      {/* Job Title & Applied Number */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-6">
        {/* Job Title & Date */}
        <div className="mb-4 md:mb-0">
          <Link to={link}>
            <button className="flex gap-1 items-center py-1 px-5 rounded-full text-white bg-gradient-to-r from-blue to-greenLight hover:from-green-500 mb-1">
              <MdOutlineGroup />
              Candidates
            </button>
            <h4 className="text-lg md:text-xl">{jobTitle}</h4>
          </Link>
          {/* Post & Expiry Date */}
          <div className="flex flex-wrap gap-3 text-14 mt-3">
            <p className="flex items-center gap-1 text-sm md:text-base">
              <FaRegCalendarAlt />
              Post Date: 12 Aug, 2024
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <FaRegCalendarAlt />
              Expiry Date: 11 Sep, 2024
            </p>
          </div>
        </div>

        {/* Total Applied & Profile Image */}
        <div>
          <p className="text-sm md:text-base">
            <span className="font-bold">{applicationsCount}</span> Applied
          </p>
          <div className="flex justify-start">
            <div className="avatar-group -space-x-4 md:-space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-6 md:w-8">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-6 md:w-8">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-6 md:w-8">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-blue text-white w-6 md:w-8">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPostCard;
