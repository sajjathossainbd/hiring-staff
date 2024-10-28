/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { Link } from "react-router-dom";

function JobPostCard({ Cardtitle, jobTitle, img, style, statusTitle, link }) {
  return (
    <div className="w-full bg-white p-6 rounded-lg">
      <div className={`flex items-center p-16 rounded-lg h-64 gap-6 ${style}`}>
        {/* Title */}
        <div className="w-7/12">
          <h3>{`${Cardtitle}...`}</h3>
          <p className="text-gray">{jobTitle}</p>
        </div>

        {/* Card Images */}
        <div className="w-5/12">
          <Lottie className="w-full h-auto" animationData={img}></Lottie>
        </div>
      </div>

      {/* JOb Title & Applied Number */}
      <div className="flex justify-between items-start mt-6">
        {/* Job Title & Date */}
        <div className="">
          <button className="flex gap-1 items-center py-1 px-5 rounded-full text-white bg-gradient-to-r from-blue to-greenLight hover:from-green-500 mb-1">
            <MdOutlineGroup />
            Candidates
          </button>
          <Link to={link}>
            <h4>Fresher React Developer</h4>
          </Link>
          {/* Post & Expiry Date */}
          <div className="flex gap-3 text-14 mt-3">
            <p className="flex items-center gap-1">
              <FaRegCalendarAlt />
              Post Date: 12 Aug, 2024
            </p>
            <p className="flex items-center gap-1">
              <FaRegCalendarAlt />
              Expiry Date: 11 Sep, 2024
            </p>
          </div>
        </div>
        {/* Total Applid & Profile Image */}
        <div className="">
          <p>(30) {statusTitle}</p>
          <div className="">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-blue text-white w-8">
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
