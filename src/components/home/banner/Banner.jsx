import SearchByFilter from "../../shared/SearchByFilter";
import BannerImg from "../../../SVG/BannerImg";
import PopularSearch from "./PopularSearch";

const Banner = () => {
  return (
    <section className="dark:bg-darkBlue px-4 lg:pb-10">
      <div className="container ">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-20 w-full">
          {/* Banner Left - Content */}
          <div className="lg:w-1/2 w-full flex flex-col gap-8 ">
            {/* title and subtitle */}
            <div className="">
              <h2 className="lg:leading-[55px] md:leading-[50px] sm:leading-10">
                Accelerate <br className="lg:block hidden" /> Your Hiring with
                Our
                <br className="lg:block hidden" />
                <span className="text-blue"> Job Search </span>
                Solutions
              </h2>
              <p className="text-18 mt-3">
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
          <div className="lg:w-1/2 w-10/12 flex justify-center">
            {/* image component */}
            <BannerImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
