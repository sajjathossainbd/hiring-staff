import RecruiterCard from "../shared/RecruiterCard";
import SectionTitle from "../shared/SectionTitle";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";
import NoFoundData from "../ui/NoFoundData";
import { useEffect } from "react";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";

function Recruiter() {
  const dispatch = useDispatch();

  const {
    recruitersListing: recruiters,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.recruitersListing);

  useEffect(() => {
    dispatch(fetchRecruitersListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && recruiters?.length === 0) {
    content = <NoFoundData title="No Recruiters Found!" />;
  }

  if (!isLoading && !isError && recruiters?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruiters.map((recruiter) => (
          <RecruiterCard key={recruiter._id} recruiter={recruiter} />
        ))}
      </div>
    );
  }
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const recruitersInSlides = chunkArray(recruiters, 12);

  return (
    <div className=" container">
      <SectionTitle
        title={"Top Recruiters"}
        subTitle={
          "Discover your next career move, freelance gig, or internship"
        }
      />

      <div className="relative sm:mt-6 max-sm:mt-8">
        <div className="absolute top-[-50px] right-[-5px] flex gap-2 z-10">
          <button className="swiper-button-prev-custom p-2 rounded-full bg-lightGray">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[15px] h-[15px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom bg-lightGray p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[15px] h-[15px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {recruitersInSlides?.map((recruitersGroup, index) => (
            <SwiperSlide key={index}>{content}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Recruiter;
