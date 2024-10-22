import JobSearchBox from "../../components/jobs/JobSearchBox";
import DarkLightMode from "../../components/navbar/DarkLightMode";
import SinginLogout from "../../components/navbar/SinginLogout";
import LogoWhite from "../../components/ui/LogoWhite";
import { Trans, useTranslation } from "react-i18next";
const Navbar = () => {
  
  return (
    <div className="backdrop-blur-sm z-20 mt-16 sticky top-0">
      <div className="bg-blue dark:bg-darkBlue">
        <nav className="container flex items-center justify-between py-4">
          <LogoWhite size="large" />

          <JobSearchBox />

          <div className="flex items-center gap-4">
            <SinginLogout />
            <DarkLightMode />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
