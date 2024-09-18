import { Helmet } from "react-helmet-async";
import Category from "../../components/Category/Category";

function Home() {

  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Home</title>
      </Helmet>
      <Category/>
    </div>
  );
}

export default Home;
