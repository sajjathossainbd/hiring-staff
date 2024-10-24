import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import appStore from "../../assets/footer-images/app-store.svg";
import googlePlay from "../../assets/footer-images/google-play.svg";
import NavLink from "../../components/shared/NavLink";
import LogoBlack from "../../components/ui/LogoBlack";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer text-base-content lg:mt-10 mt-6">
        <aside className="space-y-3 mr-3">
          <div className="text-6">
            <LogoBlack size="medium" />
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
          <NavLink to={"/about"} navTitle={"About Us"} />
          <NavLink to={"/candidates-listing"} navTitle={"Candidates"} />
          <NavLink to={"/contact"} navTitle={"Contact Us"} />
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <NavLink to={"/blogs"} navTitle={"Blogs"} />
          <NavLink to={"/pricing"} navTitle={"FAQ"} />
        </nav>
        <nav className="disabled">
          <h6 className="footer-title">Quick links</h6>
          <NavLink navTitle={"IOS"} />
          <NavLink navTitle={"Android"} />
          <NavLink navTitle={"Desktop"} />
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
          <Link to={"/privacy"}>
            <strong className="hover:text-blue cursor-pointer">
              Privacy Policy
            </strong>
          </Link>
          <Link to={"termsandcondition"}>
            <strong className="hover:text-blue cursor-pointer">
              Terms & Conditions
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
