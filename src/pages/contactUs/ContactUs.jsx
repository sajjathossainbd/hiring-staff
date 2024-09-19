import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import contactBanner from "../../assets/contact/contact-banner.png"

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Contact Us</title>
      </Helmet>
      <div>
        <TinnyBanner
          pathClass={"contact"}
          title={"Contact Us"}
          subTitle={"Get the latest news, updates and tips"}
          img={contactBanner}
          currentPath={"Contact Us"}
        />
      </div>
    </div>
  );
}

export default ContactUs;
