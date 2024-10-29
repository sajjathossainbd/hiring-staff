/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import RecruiterCard from "../../components/recruiter/RecruiterCard";
import Filter from "../../components/recruiter/RecruitersFiltering";
import Lottie from "lottie-react";
import multipleLineDraw from "./../../../public/multiline-repet.json";
import { ScrollRestoration } from "react-router-dom";
import { CardPagination } from "../../components/shared/CardPagination";
import { Trans, useTranslation } from "react-i18next";
import i18n from "../../i18n";
import RecruitersFiltering from "../../components/recruiter/RecruitersFiltering";

const convertToBanglaDigits = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit] || digit)
    .join("");
};

function RecruitersListing() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ page: 1 });

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruitersListing);

  useEffect(() => {
    dispatch(fetchRecruitersListing(filters));
  }, [dispatch, filters]);

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };
  const totalRecruiters = recruiters?.totalRecruiters || 0;
  const banglaRecruitersCount =
    i18n.language === "bn"
      ? convertToBanglaDigits(totalRecruiters)
      : totalRecruiters;
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <NoFoundData title="No Recruiters Found!" message={error} />;

  if (!isLoading && !isError && recruiters?.recruiters?.length === 0) {
    content = <NoFoundData title="No Recruiters Found!" />;
  }

  if (!isLoading && !isError && recruiters?.recruiters?.length > 0) {
    content = (
      <div>
        {/* Recruiter Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 my-10">
          {recruiters?.recruiters?.map((recruiter, index) => (
            <RecruiterCard
              key={`${recruiter._id}-${index}`}
              recruiter={recruiter}
            />
          ))}
        </div>

        {/* Card Pagination Component */}
        <CardPagination
          totalPages={recruiters?.totalPages}
          currentPage={recruiters?.currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Recruiters</title>
      </Helmet>

      <div className="lg:py-16 lg:px-0 px-3 py-10 bg-bgLightWhite dark:bg-darkBlue flex flex-col items-center rounded-xl relative">
        <div className="h-0 absolute top-24 lg:block md:block sm:none">
          <Lottie animationData={multipleLineDraw}></Lottie>
        </div>
        <div className="text-center pb-6">
          <h3>
            <Trans
              i18nKey="recruitersBannerTitle"
              count={banglaRecruitersCount}
            >
              <span className="text-blue">
                {banglaRecruitersCount} Recruiters
              </span>{" "}
              Available Now
            </Trans>
          </h3>

          <p className="md:max-w-xl text-14 mt-3">
            Browse top-rated recruiters across various locations, tailored to
            meet your project needs.
            <Trans i18nKey={"recruitersBannerDescrip"} />
          </p>
        </div>

        <div>
          <RecruitersFiltering />
        </div>
      </div>

      <div>{content}</div>
      <ScrollRestoration />
    </div>
  );
}

export default RecruitersListing;
