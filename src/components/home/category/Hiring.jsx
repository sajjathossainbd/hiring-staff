import left from "../../../assets/home/hiring/bg-left-hiring.svg";
import right from "../../../assets/home/hiring/bg-right-hiring.svg";
import { GoVerified } from "react-icons/go";
import PrimaryBtn from "../../ui/PrimaryBtn";
function Hiring() {
  return (
    <div className="container flex justify-center items-center pt-0">
      <div className="flex w-[90%] justify-evenly items-center border border-bgDeepBlue rounded-lg shadow-sm flex-col lg:flex-row p-5 space-y-3 lg:gap-3">
        <div className="hidden lg:block">
          <img src={left} alt="left img" />
        </div>
        <div className="flex lg:flex-col gap-2 lg:gap-0   ">
          <p className="text-16 text-lightGray font-bold flex items-end ">
            WE ARE
          </p>
          <h2 className="lg:mb-10">HIRING</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 mb-4">
            <div className="text-center">
              <p className="text-18  text-lightGray">
                Let’s Work Together & Explore Opportunities
              </p>
            </div>
            <div className="lg:mt-10">
              <div className=""></div>
            </div>
          </div>
          <PrimaryBtn icon={<GoVerified />} title={"Apply Now"} />
        </div>

        <div className="hidden lg:block">
          <img src={right} alt="right img" />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
