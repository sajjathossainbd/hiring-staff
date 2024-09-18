import GrowthSection from "../growthSection/GrowthSection";
import { Helmet } from "react-helmet-async";
import Category from "../../components/Category/Category";
import Banner from "./Banner";
import Hiring from "../../components/we-are-hiring/Hiring";
import NewsLetter from "../../components/newsLetter/newsLetter";
import JobLocation from "./JobLocation";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
      <GrowthSection></GrowthSection>
      <Category/>
      <Hiring/>
      <NewsLetter/>
      <JobLocation />
    </div>
  );
}

export default Home;
