import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import JobLocation from "./JobLocation";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
      <JobLocation />
    </div>
  );
}

export default Home;
