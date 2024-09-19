/* eslint-disable react/prop-types */

import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import banner from "../../assets/pricing/pricing-page-banner.png"

const TinnyBanner = ({ title, subTitle, currentPath }) => {
    return (
        <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="relative container mx-auto flex lg:flex-row flex-col gap-3 items-center justify-between">
                <div>
                    <h3
                    >
                        {title}
                    </h3>
                    <p
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
