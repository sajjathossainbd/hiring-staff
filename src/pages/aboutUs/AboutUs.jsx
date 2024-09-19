import { Helmet } from "react-helmet-async";
import Testimonial from "./Testimonial";
import TinnyBanner from "../../components/shared/TinnyBanner";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - About Us</title>
      </Helmet>
      <TinnyBanner
        title={"About Us"}
        subTitle={"Get the latest news, updates and tips"}
        currentPath={"About Us"}
      />
      <Testimonial />
    </div>
  );
}

export default AboutUs;
