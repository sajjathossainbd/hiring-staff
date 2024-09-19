import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import contactBanner from "../../assets/contact/contact-banner.png"
import logo from "../../assets/logo/hiring.png"

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Contact Us</title>
      </Helmet>
      <TinnyBanner
        pathClass={"contact"}
        title={"Contact Us"}
        subTitle={"Get the latest news, updates and tips"}
        img={contactBanner}
        currentPath={"Contact Us"}
      />
      <div>
        <div>
          <div className="flex items-center gap-2">
            <img className="lg:size-12 size-8" src={logo} alt="Hiring Stuff" />
            <h3>Hiring Stuff</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
