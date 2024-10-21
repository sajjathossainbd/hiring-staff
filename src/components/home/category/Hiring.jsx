import left from "../../../assets/home/hiring/bg-left-hiring.svg";
import right from "../../../assets/home/hiring/bg-right-hiring.svg";
import { GoVerified } from "react-icons/go";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
function Hiring() {
  return (
    <div className="container flex justify-center items-center pt-0 ">
      {/* Hiring Inof */}
      <div className="flex w-[90%] justify-evenly items-center border border-bgDeepBlue rounded-lg shadow-sm flex-col lg:flex-row p-5 space-y-3 lg:gap-3 bg-white">
        <div className="hidden lg:block">
          <img src={left} alt="left img" />
        </div>
        <div className="flex lg:flex-col gap-2 lg:gap-0   ">
          <p className="text-16 text-lightGray font-bold flex items-end mb-4">
          <Trans i18nKey="weAre">WE ARE</Trans>
          </p>
          <h2 className="lg:mb-10"> <Trans i18nKey="hiring">HIRING</Trans></h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 mb-4">
            <div className="text-center">
              <p className="text-18  text-lightGray">
                <Trans i18nKey={"hiringBannerDescrip"}/>
              </p>
            </div>
            <div className="lg:mt-10">
              <div className=""></div>
            </div>
          </div>
          <Link to={"/jobs-listing"}>
            <PrimaryBtn icon={<GoVerified />} title={<Trans i18nKey={"applyBtn"}/>} />
          </Link>
        </div>

        <div className="hidden lg:block">
          <img src={right} alt="right img" />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
