import left from "../../assets/Hiring/bg-left-hiring.svg";
import right from "../../assets/Hiring/bg-right-hiring.svg";
import PrimaryButton from "../shared/PrimaryButton";
import { GoVerified } from "react-icons/go";
function Hiring() {
  return (
    <div className="container mx-auto flex justify-center items-center mt-12">
      <div className="flex w-[90%] justify-evenly items-center border border-lightGray rounded-md flex-col lg:flex-row p-5 space-y-3 shadow-md lg:gap-3">
        <div className="hidden lg:block">
          <img src={left} alt="left img" />
        </div>
        <div className="flex lg:flex-col gap-2 lg:gap-0   ">
          <p className="text-16 text-lightGray font-bold flex items-end ">
            WE ARE
          </p>
          <h2 className="lg:mb-10">HIRING</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12">
          <div className="text-center">
            <p className="text-18  text-lightGray">
              Let’s Work Together & Explore Opportunities
            </p>
          </div>
          <div className="lg:mt-10">
            <div className="flex  items-center lg:items-start justify-center mb-4 lg:mr-4">
              <PrimaryButton icon={<GoVerified />} title={"Apply Now"} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={right} alt="right img" />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
