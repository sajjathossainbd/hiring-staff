import { Helmet } from "react-helmet-async";
import Banner from "../../components/home/Banner";
import Category from "../../components/home/Category";
import Hiring from "../../components/home/Hiring";
import GrowthSection from "../../components/home/GrowthSection";
import Recruiter from "../../components/home/Recruiter";
import JobLocation from "../../components/home/JobLocation";
import NewsLetter from "../../components/home/NewsLetter";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Homepage</title>
      </Helmet>
      <Banner />
      <Category />
      <Hiring />
      <GrowthSection />
      <Recruiter />
      <JobLocation />
      <NewsLetter />
    </div>
  );
}

export default Home;
