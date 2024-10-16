/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import SearchByFilter from "../shared/SearchByFilter";
import Loading from "../ui/Loading";
import multipleLineDraw from "./../../../public/multiline-repet.json";

function JobBanner({ totalJobs, isLoading }) {
  return (
    <div className="lg:py-16 lg:px-0 px-3 py-10 bg-bgLightWhite dark:bg-darkBlue flex flex-col items-center justify-center rounded-xl relative">
      <div className="h-0 absolute top-24 lg:block md:block sm:none  ">
        <Lottie animationData={multipleLineDraw}></Lottie>
      </div>
      <div className="text-center pb-6">
        {isLoading ? (
          <Loading />
        ) : (
          <h3>
            <span className="text-blue">{totalJobs} Jobs</span> Available Now
          </h3>
        )}
        <p className="md:max-w-xl text-14 mt-3">
          Find the perfect job that fits your skills and aspirations. Browse
          through our latest job openings and take the next step in your career.
        </p>
      </div>
      {/* search filter */}
      <SearchByFilter />
    </div>
  );
}

export default JobBanner;
