import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import CandidateCard from "../../components/candidate/CandidateCard";
import CandidatesFiltering from "../../components/candidate/CandidatesFiltering";
import Lottie from "lottie-react";
import multipleLineDraw from "./../../../public/multiline-repet.json";
import { CardPagination } from "../../components/shared/CardPagination";
import { Trans, useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { ScrollRestoration } from "react-router-dom";

const convertToBanglaDigits = (number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return number
    .toString()
    .split("")
    .map((digit) => banglaDigits[digit] || digit)
    .join("");
};

function CandidatesListing() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  const {
    candidatesListing: candidates,
    isLoading,
    isError,
    totalPages,
    currentPage,
  } = useSelector((state) => state.candidatesListing);

  useEffect(() => {
    dispatch(fetchCandidatesListing(filters));
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...newFilters, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  const totalCandidates = candidates?.totalCandidates || 0;
  const banglaCandidatesCount =
    i18n.language === "bn"
      ? convertToBanglaDigits(totalCandidates)
      : totalCandidates;

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <NoFoundData title="No Candidates Found!" />;

  if (!isLoading && !isError && candidates?.candidates?.length === 0) {
    content = <NoFoundData title="No Candidates Found!" />;
  }

  if (!isLoading && !isError && candidates?.candidates?.length > 0) {
    content = (
      <div>
        {/* candidate card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-10">
          {candidates?.candidates?.map((candidate) => (
            <CandidateCard key={candidate._id} candidate={candidate} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          <CardPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Candidates</title>
      </Helmet>

      <div className="lg:py-14 lg:px-0 px-3 py-10 bg-bgLightWhite dark:bg-darkBlue flex flex-col items-center rounded-xl relative">
        <div className="h-0 absolute top-24 lg:block md:block sm:none  ">
          <Lottie animationData={multipleLineDraw}></Lottie>
        </div>
        <div className="text-center pb-6">
          <h3>
            <Trans
              i18nKey="candidatesBannerTitle"
              count={banglaCandidatesCount}
            >
              <span className="text-blue">
                {banglaCandidatesCount} Candidates
              </span>{" "}
              Available Now
            </Trans>
          </h3>

          <p className="md:max-w-xl text-14 mt-3">
            <Trans i18nKey={"candidatesBannerDescrip"} />
          </p>
        </div>

        <div className="mb-4">
          <CandidatesFiltering onFilterChange={handleFilterChange} />
        </div>
      </div>

      <div className="">{content}</div>
      <ScrollRestoration />
    </div>
  );
}

export default CandidatesListing;
