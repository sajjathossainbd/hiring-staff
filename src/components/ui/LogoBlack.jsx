/* eslint-disable react/prop-types */
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";

function LogoBlack({ size = "large" }) {
  // Determine the size classes based on the size prop
  const iconSize = size === "large" ? "text-4xl" : "text-3xl";
  const textSize = size === "large" ? "text-3xl" : "text-2xl";

  return (
    <Link to={"/"} className="flex items-center gap-1">
      <HiOutlineBriefcase
        className={`${iconSize} text-darkBlue dark:text-white`}
      />
      <h3 className={`${textSize} font-semibold text-darkBlue`}>
        Hiring Staff
      </h3>
    </Link>
  );
}

export default LogoBlack;
