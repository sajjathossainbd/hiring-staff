import SectionTitle from "../../shared/SectionTitle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";
import Hiring from "./Hiring";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobCategories } from "../../../features/jobs/jobCategories/jobCategoriesAPI";
import { setCategory } from "../../../features/jobs/jobsFilter/filterSlice";
import { useNavigate } from "react-router-dom";

function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.jobCategories);

  useEffect(() => {
    dispatch(fetchJobCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));
    navigate("/jobs-listing/1");
  };

  const itemsPerSlide = 10;
  let slides = [];

  const duplicateSlides =
    categories.length < itemsPerSlide
      ? [...categories, ...categories]
      : categories;

  for (let i = 0; i < duplicateSlides.length; i += itemsPerSlide) {
    slides.push(duplicateSlides.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="bg-bgLightBlue pb-6">
      <section className="container px-0 sm:px-0 md:px-0 lg:px-0 xl:px-14">
        <SectionTitle
          title={"Browse by category"}
          subTitle={
            "Find the job that’s perfect for you. about 800+ new jobs everyday"
          }
        />
        <div>
          <Swiper
            slidesPerView={
              categories.length < itemsPerSlide ? categories.length : 1
            }
            spaceBetween={30}
            loop={categories.length > itemsPerSlide}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mx-14 mt-14 mb-10">
                  {slide.map((category, idx) => (
                    <CategoryCard
                      key={idx}
                      categoryName={category}
                      onCategoryClick={handleCategoryClick}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Hiring />
    </div>
  );
}

export default Category;
