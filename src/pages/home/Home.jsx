import Recruiter from "../../components/home/Recruiter";
import JobLocation from "../../components/home/JobLocation";
import NewsLetter from "../../components/home/NewsLetter";
import BlogSection from "../../components/home/BlogSection";
import Category from "../../components/home/category/Category";
import GrowthSection from "../../components/home/growthSection/GrowthSection";
import Reviews from "../../components/reviews/Reviews";
import Banner from "../../components/home/banner/Banner";


function Home() {
  return (
    <div>
      <Banner />
      <Category />
      {/* <JobsDay /> */}
      <GrowthSection />
      <Recruiter />
      <JobLocation />
      <BlogSection />
      <NewsLetter />
      <Reviews />
    </div>
  );
}

export default Home;
