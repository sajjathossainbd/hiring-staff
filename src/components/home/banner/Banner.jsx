import SearchByFilter from "../../shared/SearchByFilter";
import PopularSearch from "./PopularSearch";
import bannerImg from "../../../assets/home/banner/banner03.svg";
import Lottie from "lottie-react";
import UpDownDrawLine from "./../../../../public/up-down-draw-line.json";
import BannerCountDown from "./BannerCountDown";
import TodayNewJobs from "../jobs/TodayNewJobs";

const Banner = () => {
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
                The <span className="text-blue">Easiest</span> Way To Get
                <br className="lg:block hidden" /> Your New Job.
              </h2>
              <p className="text-18 mt-8">
                Every month, 3 million job seekers use our platform, submitting
                over 140,000 applications daily to explore new opportunities and
                connect with potential employers.
              </p>
            </div>
            {/* search by filter jobs*/}
            <SearchByFilter />
            {/* popular researches jobs */}
            <PopularSearch />
          </div>
          {/* Banner Right - Image */}
          <div className="lg:w-1/2 md:w-2/4 w-10/12 flex justify-center">
            <img
              className="h-full object-cover ml-auto animate-updown"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container pt-0">
        <BannerCountDown />
      </div>
      <div className="mt-10">
        <TodayNewJobs />
      </div>
    </section>
  );
};

export default Banner;
