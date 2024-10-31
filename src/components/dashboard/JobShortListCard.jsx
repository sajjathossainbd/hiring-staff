/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";

function JobShortListCard({ Cardtitle, img, style, link, job }) {
  const { jobTitle, shortlistedCount } = job;

  return (
    <div className="w-full light:bg-white dark:border border shadow-sm border-bgDeepBlue p-4 sm:p-6 rounded-lg">
      <div
        className={`flex flex-col lg:flex-row items-center p-8 sm:p-12 lg:p-16 rounded-lg gap-4 lg:gap-6 ${style}`}
      >
        {/* Title */}
        <div className="w-full lg:w-7/12">
          <h3 className="text-lg lg:text-xl">{`${Cardtitle}...`}</h3>
          <p className="text-gray text-sm lg:text-base">{jobTitle}</p>
        </div>

        {/* Card Images */}
        <div className="w-full lg:w-5/12">
          <Lottie
            className="w-full h-52 lg:h-auto"
            animationData={img}
          ></Lottie>
        </div>
      </div>

      {/* Job Title & Applied Number */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-4 lg:mt-6">
        {/* Job Title & Date */}
        <div className="mb-4 lg:mb-0">
          <Link to={link}>
            <button className="flex gap-1 items-center py-1 px-4 lg:px-5 rounded-full text-white bg-gradient-to-r from-blue to-greenLight hover:from-green-500 mb-1">
              <MdOutlineGroup />
              Candidates
            </button>
            <h4 className="text-lg lg:text-xl">{jobTitle}</h4>
          </Link>
          {/* Post & Expiry Date */}
          <div className="flex flex-wrap gap-3 text-14 mt-3">
            <p className="flex items-center gap-1 text-sm lg:text-base">
              <FaRegCalendarAlt />
              Post Date: 12 Aug, 2024
            </p>
            <p className="flex items-center gap-1 text-sm lg:text-base">
              <FaRegCalendarAlt />
              Expiry Date: 11 Sep, 2024
            </p>
          </div>
        </div>

        {/* Total Shortlisted & Profile Images */}
        <div className="text-sm lg:text-base">
          <p>
            <span className="font-bold">{shortlistedCount}</span> Shortlisted
          </p>
          <div className="flex justify-start mt-2 lg:mt-0">
            <div className="avatar-group -space-x-4 lg:-space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-8 h-8 lg:w-10 lg:h-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8 h-8 lg:w-10 lg:h-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8 h-8 lg:w-10 lg:h-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-blue text-white w-8 h-8 lg:w-10 lg:h-10">
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

export default JobShortListCard;
