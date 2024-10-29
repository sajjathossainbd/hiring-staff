import SearchByFilter from "../../shared/SearchByFilter";
import PopularSearch from "./PopularSearch";
import BannerCountDown from "./BannerCountDown";
import TodayNewJobs from "../jobs/TodayNewJobs";
import UpDownDrawLine from "./../../../../public/up-down-draw-line.json";
import BannerImg from "./../../../../public/banner1.json";
import { Trans, useTranslation } from "react-i18next";
import Lottie from "lottie-react";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="dark:bg-darkBlue px-4 lg:pb-10">
      <div className="container pt-0">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center gap-16 w-full xl:py-16 lg:py-14 md:py-10 py-7">
          {/* Banner Left - Content */}
          <div className="lg:w-1/2 w-full flex flex-col gap-8 ">
            {/* title and subtitle */}
            <div className="">
              <h2 className="lg:leading-[58px] md:leading-[50px] sm:leading-10 relative">
                <div className="absolute xl:flex hidden w-44 bottom-10 left-[82px]">
                  <Lottie animationData={UpDownDrawLine}></Lottie>
                </div>
                <Trans i18nKey="home_hero_title">
                  The <span className="text-blue">Easiest</span> Way To Get{" "}
                  <br className="lg:block hidden" /> Your New Job.
                </Trans>
              </h2>

              <p className="text-18 mt-8">{t("home_hero_subTitile")}</p>
            </div>
            {/* search by filter jobs*/}
            <SearchByFilter />
            {/* popular researches jobs */}
            <PopularSearch />
          </div>
          {/* Banner Right - Image */}
          <div className="lg:w-1/2 md:w-2/4 w-10/12 flex justify-center">
            <div className="object-cover">
              <Lottie animationData={BannerImg}></Lottie>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-0">
        <BannerCountDown />
      </div>
      <div className="mt-10 ">
        <TodayNewJobs />
      </div>
    </section>
  );
};

export default Banner;
