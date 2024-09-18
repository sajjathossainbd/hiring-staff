import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../../assets/logo/hiring.png"
import appStore from "../../assets/footer-images/app-store.svg"
import googlePlay from "../../assets/footer-images/google-play.svg"

const Footer = () => {
  return (
    <div>
      <footer className="footer text-base-content lg:p-0 p-10">
        <aside className="space-y-3">
          <div className="flex items-center gap-2">
            <img className="size-12" src={logo} alt="" />
            <h3>Hiring Stuff</h3>
          </div>
          <p className="max-w-72">
            Hiring Stuff is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide
          </p>
          <div className="flex items-center gap-3 text-2xl">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">About Us</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Candidates</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Feature</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Pricing</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Credit</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick links</h6>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">IOS</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Android</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Desktop</a>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Helps</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Privacy policy</a>
          <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">Terms</a>
        </nav>
        <div className="space-y-3">
          <h6 className="footer-title">
            Download App
          </h6>
          <p className="max-w-52">
            Download our Apps and get extra 15% Discount on your first Order…!
          </p>
          <div className="flex items-center gap-1">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
      </footer>

      <div className="divider"></div>

      <div className="flex lg:flex-row flex-col items-center justify-between gap-2">
        <strong>Copyright © {new Date().getFullYear()} - Hiring Stuff all right reserved</strong>
        <div className="flex items-center gap-3 lg:gap-10">
          <strong className="hover:text-blue cursor-pointer">Privacy Policy</strong>
          <strong className="hover:text-blue cursor-pointer">Terms & Conditions</strong>
          <strong className="hover:text-blue cursor-pointer">Security</strong>
        </div>
      </div>

    </div>
  );
};

export default Footer;