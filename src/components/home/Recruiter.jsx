import SectionTitle from "../shared/SectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import NoFoundData from "../ui/NoFoundData";
import { useEffect } from "react";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import TopRecruiterCard from "../shared/TopRecruiterCard";
import { Link } from "react-router-dom";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";
function Recruiter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruitersListing);

  const recrutiersData = recruiters?.recruiters?.slice(0, 6) || [];

  useEffect(() => {
    dispatch(fetchRecruitersListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && recrutiersData?.length === 0) {
    content = <NoFoundData title="No Recruiters Found!" />;
  }

  if (!isLoading && !isError && recrutiersData.length > 0) {
    content = (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {recrutiersData.map((recruiter, index) => (
          <TopRecruiterCard
            key={`${recruiter._id}-${index}`}
            recruiter={recruiter}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey={"topRecruiters"} />}
          subTitle={<Trans i18nKey={"topRecruitersDescrip"} />}
        />

        <div className="mt-10">
          <div className="">{content}</div>
          <Link
            to={"/recruiters-listing"}
            className="mt-10 mb-10 flex items-center justify-center"
          >
            <PrimaryBtn title={<Trans i18nKey={"moreRecruiters"} />} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recruiter;
