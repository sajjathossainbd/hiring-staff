import JobSearchBox from "../../components/jobs/JobSearchBox";
import DarkLightMode from "../../components/navbar/DarkLightMode";
import SinginLogout from "../../components/navbar/SinginLogout";
import LogoWhite from "../../components/ui/LogoWhite";

const Navbar = () => {
  return (
    <div className="backdrop-blur-sm z-20 mt-12 sticky top-0">
      <div className="bg-blue dark:bg-darkBlue">
        <nav className="container flex items-center justify-between py-5">
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
