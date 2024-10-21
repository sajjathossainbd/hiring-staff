import SectionTitle from "../../shared/SectionTitle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobCategories } from "../../../features/jobs/jobCategories/jobCategoriesAPI";
import { setCategory } from "../../../features/jobs/jobsFilter/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchJobsListing } from "../../../features/jobs/jobsListing/jobsListingSlice";
import Hiring from "./Hiring";
import { Trans, useTranslation } from "react-i18next";


function Category() {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobsListing: jobs } = useSelector((state) => state.jobsListing);
  const { categories } = useSelector((state) => state.jobCategories);

  useEffect(() => {
    dispatch(fetchJobCategories());
    dispatch(fetchJobsListing());
  }, [dispatch]);

  const jobsData = jobs?.jobs || [];

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));
    navigate("/jobs-listing/1");
  };

  const itemsPerSlide = 10;
  const slides = [];
  for (let i = 0; i < categories.length; i += itemsPerSlide) {
    slides.push(categories.slice(i, i + itemsPerSlide));
  }

  // Calculate job counts per category
  const jobCounts = categories.reduce((acc, category) => {
    acc[category] = jobsData.filter(
      (job) => job.category.toLowerCase() === category.toLowerCase()
    ).length;
    return acc;
  }, {});

  // Conditionally disable loop based on number of slides
  const shouldLoop = slides.length > 1;

  return (
    <div className=" pb-6">
      <section className="container px-0 sm:px-0 md:px-0 lg:px-0 xl:px-14">
        <SectionTitle
          title={<Trans i18nKey="browsbyCategory" />}
          subTitle={<Trans i18nKey="browsbyCategory_subTitle"/>}
        />
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={shouldLoop} // Conditionally enable loop
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
                      jobCount={jobCounts[category] || 0} // Pass job count
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
