import FindJobs from "./../../../../public/find1.json";
import CounterSection from "./CounterSection";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Lottie from "lottie-react";

const GrowthSection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgLightBlue">
      <div className="container">
        <div className=" hero-content flex flex-col lg:flex-row">
          {/* image */}
          <div className="relative  mx-auto py-12 px-4 lg:px-8 lg:w-5/12">
            <div className="relative">
              <Lottie animationData={FindJobs}></Lottie>
            </div>
          </div>
          {/* information */}
          <div className=" w-full lg:w-5/12">
            <div className="">
              <h1 className="text-2xl lg:text-3xl font-bold text-lightGray">
                <Trans i18nKey={"growthSection_hero"} />
              </h1>
              <h1 className="text-3xl lg:text-4xl font-bold w-full text-darkBlue py-2">
                <Trans i18nKey={"growthSection_hero2"} />
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <Link to={"jobs-listing"}>
                  <PrimaryBtn title={<Trans i18nKey={"searchJobBtn"} />} />
                </Link>
                <Link
                  className="ml-2 lg:ml-4 cursor-pointer hover:underline"
                  to={"blogs"}
                >
                  <Trans i18nKey={"learnMore"} />
                </Link>
              </div>
            </div>
            <CounterSection />
          </div>
          {/*  */}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GrowthSection;
