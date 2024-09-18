/* eslint-disable react/prop-types */

import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const TinnyBanner = ({ title, subTitle, img, currentPath, pathClass }) => {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            {pathClass === "contact" && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
            )}
            <div className="relative container mx-auto flex lg:flex-row flex-col gap-3 items-center justify-between">
                <div>
                    <h3
                        className={`${pathClass === "contact" ? "text-white" : ""
                            }`}
                    >
                        {title}
                    </h3>
                    <p
                        className={`"text-18 mt-3" ${pathClass === "contact" ? "text-white" : ""
                            }`}
                    >
                        {subTitle}
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded text-14">
                    <Link to={"/"} className="flex items-center gap-[3px] hover:text-darkBlue">
                        <IoHomeOutline /> Hiring Stuff
                    </Link>
                    <p className="flex items-center gap-[2px]">
                        <IoIosArrowForward /> {currentPath}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TinnyBanner;
