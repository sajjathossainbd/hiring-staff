/* eslint-disable react/prop-types */
import Lottie from "lottie-react";
import SearchByFilter from "../shared/SearchByFilter";
import Loading from "../ui/Loading";
import multipleLineDraw from "./../../../public/multiline-repet.json";
import { Trans, useTranslation } from "react-i18next";

const convertToBanglaDigits = (number) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return number.toString().split('').map(digit => banglaDigits[digit] || digit).join('');
};

function JobBanner({ totalJobs, isLoading }) {
  const {t} = useTranslation();
  const banglaJobsCount = convertToBanglaDigits(totalJobs); 




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
            <Trans i18nKey="jobBannerTitle" count={banglaJobsCount}>
            <span className="text-blue">{banglaJobsCount} Jobs</span> Available Now
            </Trans>
          </h3>
        )}
        <p className="md:max-w-xl text-14 mt-3">
          <Trans i18nKey={"jobBannerDescrip"}/>
        </p>
      </div>
      {/* search filter */}
      <SearchByFilter />
    </div>
  );
}

export default JobBanner;
