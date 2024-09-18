import GrowthSection from "../growthSection/GrowthSection";
import { Helmet } from "react-helmet-async";

function Home() {

  return (
    <div>
      <GrowthSection></GrowthSection>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
    </div>
  );
}

export default Home;
