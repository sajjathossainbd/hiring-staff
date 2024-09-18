import { Helmet } from "react-helmet-async";
import Category from "../../components/Category/Category";
import Banner from "./Banner";
import Hiring from "../../components/we-are-hiring/Hiring";
import NewsLetter from "../../components/newsLetter/newsLetter";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Banner />
      <Category/>
      <Hiring/>
      <NewsLetter/>
    </div>
  );
}

export default Home;
