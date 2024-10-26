import Rating from "../shared/Rating";
import arrow from "../../assets/About-us/arrow.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../shared/SectionTitle";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { Trans, useTranslation } from "react-i18next";
const Testimonial = () => {
  const {t} = useTranslation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosInstance.get('/reviews')
      .then(res => {
        setReviews(res.data);
      });
  }, []);

  if (reviews.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-0 container">
      <div className="lg:w-1/2 mx-auto text-center pb-12">
        <SectionTitle
          title={<Trans i18nKey={"testiminialTitle"}/>}
          subTitle={<Trans i18nKey={"testiminialDescrip"}/>}
        />
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[26rem] lg:min-h-96"
        // responsive breakpoints
        breakpoints={{
          640: {
            slidesPerView: 1, // small screens (mobile)
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // medium screens (tablet)
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // large screens (desktop)
            spaceBetween: 30,
          },
        }}
      >
        {reviews?.map((review, index) => (
          <SwiperSlide className="select-none" key={index}>
            <div className="border rounded-md border-[#EBEFFA] p-6 relative min-h-72 lg:min-h-52">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                  <h5>{review.name}</h5>
                  <span className="hidden lg:block">-</span>
                  <Rating rating={review?.reviewData.rating} />
                </div>
                <p>
                  {review.reviewData.message.split(" ").length > 25
                    ? review.reviewData.message
                      .split(" ")
                      .slice(0, 25)
                      .join(" ") + "..."
                    : review.reviewData.message}
                </p>
              </div>
              {/* arrow png */}
              <img
                className="absolute top-[99%] left-10 bg-white dark:bg-darkBlue"
                src={arrow}
                alt=""
              />
            </div>

            {/* name with image and role */}
            <div className="flex gap-4 items-center pt-8 relative left-7">
            <div className="flex flex-col gap-1">
                <h5>{review.name}</h5>
              </div>
              <div className="flex flex-col gap-1">
                <h6>{review.date}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
