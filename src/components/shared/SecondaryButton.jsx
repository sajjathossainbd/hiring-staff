/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
function SecondaryButton({ title }) {
  return (
    <button className="bg-[#E0E6F7] hover:bg-blue hover:text-[white] p-3 rounded-md text-blue font-medium  transition-all duration-500 text-14 flex gap-1 items-center">
      {title} <GoArrowRight className="text-lg" />
    </button>
  );
}

export default SecondaryButton;
