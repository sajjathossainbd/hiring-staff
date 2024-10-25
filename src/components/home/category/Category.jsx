import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJobCategories } from "../../../features/jobs/jobCategories/jobCategoriesAPI";
import { setCategory } from "../../../features/jobs/jobsFilter/filterSlice";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
import { Trans, useTranslation } from "react-i18next";
import SectionTitle from "../../shared/SectionTitle";
import CategoryCard from "./CategoryCard";
import Hiring from "./Hiring";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Category() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobsListing: jobsData } = useSelector((state) => state.jobsListing);
  const { categories } = useSelector((state) => state.jobCategories);

  useEffect(() => {
    dispatch(fetchJobsListing());
    dispatch(fetchJobCategories());
  }, [dispatch]);

  const jobs = jobsData?.jobs || [];

  // Calculate job counts per category using reduce
  const jobCounts = jobs.reduce((acc, job) => {
    const category = job.category || "Uncategorized"; 
    acc[category] = (acc[category] || 0) + 1; 
    return acc;
  }, {});

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));
    navigate("/jobs-listing/1");
  };

  const itemsPerSlide = 10;
  const slides = [];
  for (let i = 0; i < categories.length; i += itemsPerSlide) {
    slides.push(categories.slice(i, i + itemsPerSlide));
  }

  const shouldLoop = slides.length > 1; 
  return (
    <div className="pb-6">
      <section className="container px-0 sm:px-0 md:px-0 lg:px-0 xl:px-14">
        <SectionTitle
          title={<Trans i18nKey="browsbyCategory" />}
          subTitle={<Trans i18nKey="browsbyCategory_subTitle" />}
        />
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={shouldLoop}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            style={{
              "--swiper-navigation-size": "20px", 
              "--swiper-navigation-color": "#000", 
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mx-14 mt-14 mb-10">
                  {slide.map((category, idx) => (
                    <CategoryCard
                      key={idx}
                      categoryName={category}
                      jobCount={jobCounts[category] || 0} // Display job count
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
