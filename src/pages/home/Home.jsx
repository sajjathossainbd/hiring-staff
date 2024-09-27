import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import Recruiter from "../../components/home/Recruiter";
import JobLocation from "../../components/home/JobLocation";
import NewsLetter from "../../components/home/NewsLetter";
import BlogSection from "../../components/home/BlogSection";
import Category from "../../components/home/category/Category";
import JobsDay from "../../components/home/jobsDay/JobsDay";
import GrowthSection from "../../components/home/growthSection/GrowthSection";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Homepage</title>
      </Helmet>
      <Banner />
      <Category />
      <JobsDay />
      <GrowthSection />
      <Recruiter />
      <JobLocation />
      <BlogSection />
      <NewsLetter />
    </div>
  );
}

export default Home;
