import GrowthSection from "../growthSection/GrowthSection";
import { Helmet } from "react-helmet-async";
import Category from "../../components/Category/Category";
import Banner from "./Banner";
import Hiring from "../../components/we-are-hiring/Hiring";
import NewsLetter from "../../components/newsLetter/newsLetter";
import JobLocation from "./JobLocation";
import Recruiter from "./Recruiter";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
      <Recruiter />
      <GrowthSection></GrowthSection>
      <Category/>
      <Hiring/>
      <NewsLetter/>
      <JobLocation />
    </div>
  );
}

export default Home;
