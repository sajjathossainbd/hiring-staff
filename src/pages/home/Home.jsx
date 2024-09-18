import GrowthSection from "../growthSection/GrowthSection";
import { Helmet } from "react-helmet-async";
import Category from "../../components/Category/Category";
import Banner from "./Banner";
import Hiring from "../../components/we-are-hiring/Hiring";
import JobLocation from "./JobLocation";

function Home() {
  return (
    <div>
      <GrowthSection></GrowthSection>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
      <Category/>
      <Hiring/>
      <JobLocation />
    </div>
  );
}

export default Home;
