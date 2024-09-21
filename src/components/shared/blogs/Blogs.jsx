import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/newsBlog.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setBlogs(data);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="relative mt-10">
      <div className="absolute top-[-50px] right-0 flex gap-2 z-10">
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

      {/* Swiper component */}
      <Swiper
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
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard key={blog.id} {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blogs;
