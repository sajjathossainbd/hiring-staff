import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import appStore from "../../assets/footer-images/app-store.svg";
import googlePlay from "../../assets/footer-images/google-play.svg";
import NavLink from "../../components/shared/NavLink";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer text-base-content lg:mt-20 mt-10">
        <aside className="space-y-3 mr-3">
          <div className="flex items-center gap-2">
            <img
              className="w-44"
              src="https://i.ibb.co.com/0rKvK9v/Hiring-Staff-Logo.png"
              alt=""
            />
          </div>
          <p className="max-w-72">
            Hiring Stuff is the heart of the design community and the best
            resource to discover and connect with designers and jobs worldwide
          </p>
          <div className="flex items-center gap-3 text-2xl">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <NavLink navTitle={"About Us"} />
          <NavLink navTitle={"Candidates"} />
          <NavLink navTitle={"Contact Us"} />
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <NavLink navTitle={"Feature"} />
          <NavLink navTitle={"Pricing"} />
          <NavLink navTitle={"Credit"} />
          <NavLink navTitle={"FAQ"} />
        </nav>
        <nav>
          <h6 className="footer-title">Quick links</h6>
          <NavLink navTitle={"IOS"} />
          <NavLink navTitle={"Android"} />
          <NavLink navTitle={"Desktop"} />
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <NavLink navTitle={"Helps"} />
          <NavLink navTitle={"Privacy policy"} />
          <NavLink navTitle={"Terms"} />
        </nav>
        <nav>
          <div className="space-y-3">
            <h6 className="footer-title">Download App</h6>
            <p className="max-w-52">
              Download our Apps and get extra 15% Discount on your first Order…!
            </p>
            <div className="flex lg:flex-row md:flex-col items-center gap-1">
              <img src={appStore} alt="" />
              <img src={googlePlay} alt="" />
            </div>
          </div>
        </nav>
      </footer>

      <div className="divider"></div>

      <div className="flex lg:flex-row flex-col items-center justify-between gap-2 mb-5">
        <strong>
          Copyright © {new Date().getFullYear()} - Hiring Stuff all right
          reserved
        </strong>
        <div className="flex items-center gap-3 lg:gap-10">
          <strong className="hover:text-blue cursor-pointer">
            Privacy Policy
          </strong>
          <strong className="hover:text-blue cursor-pointer">
            Terms & Conditions
          </strong>
          <strong className="hover:text-blue cursor-pointer">Security</strong>
        </div>
      </div>
    </div>
  );
};

export default Footer;
