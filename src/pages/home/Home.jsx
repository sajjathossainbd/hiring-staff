import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
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
      <JobLocation />
    </div>
  );
}

export default Home;
