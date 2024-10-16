import SearchByFilter from "../../shared/SearchByFilter";
import PopularSearch from "./PopularSearch";
import bannerImg from "../../../assets/home/banner/banner-3.svg";

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
          <div className="lg:w-1/2 w-10/12 flex justify-center">
            <img
              className="h-full object-cover ml-auto animate-updown"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
