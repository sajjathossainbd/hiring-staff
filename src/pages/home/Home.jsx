import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import GrowthSection from "../../components/home/GrowthSection";
import Recruiter from "../../components/home/Recruiter";
import JobLocation from "../../components/home/JobLocation";
import NewsLetter from "../../components/home/NewsLetter";
import BlogSection from "../../components/home/BlogSection";
import JobDayCard from "../../components/home/JobDayCard";
import Category from "../../components/home/category/Category";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Homepage</title>
      </Helmet>
      <Banner />
      <Category />
      <JobDayCard />
      <GrowthSection />
      <Recruiter />
      <JobLocation />
      <BlogSection />
      <NewsLetter />
    </div>
  );
}

export default Home;
