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

function Recruiter() {
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
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
          title={"Top Recruiters"}
          subTitle={
            "Discover your next career move, freelance gig, or internship"
          }
        />

        <div className="mt-10">
          <div className="">{content}</div>
          <Link
            to={"/recruiters-listing"}
            className="mt-16 flex items-center justify-center"
          >
            <PrimaryBtn title="More Recruiter" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recruiter;
