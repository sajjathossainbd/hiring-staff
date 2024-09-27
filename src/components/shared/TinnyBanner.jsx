/* eslint-disable react/prop-types */

import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TinnyBanner = ({ title, subTitle, currentPath }) => {
  return (
    <div className="bg-tinny-banner-image-light dark:bg-tinny-banner-image-dark bg-cover bg-center">
      <div className="relative container mx-auto flex lg:flex-row flex-col gap-3 items-center justify-between">
        <div>
          <h3 className="dark:text-white">{title}</h3>
          <p className="dark:text-white">{subTitle}</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded text-14">
          <Link
            to={"/"}
            className="flex items-center gap-[3px] hover:text-darkBlue"
          >
            <IoHomeOutline /> Hiring Stuff
          </Link>
          <Link className="flex items-center gap-[2px] text-darkBlue">
            <IoIosArrowForward /> {currentPath}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TinnyBanner;
