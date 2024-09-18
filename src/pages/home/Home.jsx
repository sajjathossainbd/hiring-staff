import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
    </div>
  );
}

export default Home;
