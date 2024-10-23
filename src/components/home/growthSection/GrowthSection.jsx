import imageLeft from "/src/assets/logo/growthSection/Card_1.png";
import imageRight from "/src/assets/logo/growthSection/Card_2.png";
import perfectMatch from "./../../../assets/home/perfect-match.svg";
import CounterSection from "./CounterSection";
import PrimaryBtn from "../../ui/PrimaryBtn";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

const GrowthSection = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-bgLightBlue">
      <div className="container">
        <div className=" hero-content flex flex-col lg:flex-row">
          {/* image */}
          <div className="relative  mx-auto py-12 px-4 lg:px-8 lg:w-5/12">
            <div className="relative">
              <img
                src={perfectMatch}
                alt="Main Background"
                className="rounded-xl lg:w-[482px] lg:h-[435px] w-80 h-56"
              />

              <div className="absolute -top-28 -left-44 hidden md:block">
                <img
                  src={imageLeft}
                  alt="Overlay 1"
                  className="w-[390px] h-[324px] rounded-lg box"
                />
              </div>

              <div className="absolute -bottom-44 -right-36 hidden md:block">
                <img
                  src={imageRight}
                  alt="Overlay 2"
                  className="w-[335px] h-[366px] rounded-lg object-cover box"
                />
              </div>
            </div>
          </div>
          {/* information */}
          <div className=" w-full lg:w-5/12">
            <div className="">
              <h1 className="text-2xl lg:text-4xl font-bold text-lightGray">
                <Trans i18nKey={"growthSection_hero"} />
              </h1>
              <h1 className="text-3xl lg:text-5xl font-bold w-full text-darkBlue py-2">
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
