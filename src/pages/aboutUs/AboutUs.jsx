import { Helmet } from "react-helmet-async";
import Testimonial from "./Testimonial";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - About Us</title>
      </Helmet>
      <Testimonial />
    </div>
  );
}

export default AboutUs;
