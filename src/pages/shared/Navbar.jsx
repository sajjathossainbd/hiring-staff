import JobSearchBox from "../../components/jobs/JobSearchBox";
import DarkLightMode from "../../components/navbar/DarkLightMode";
import SinginLogout from "../../components/navbar/SinginLogout";
import LogoWhite from "../../components/ui/LogoWhite";

const Navbar = () => {
  return (
    <div className="backdrop-blur-sm sticky top-0 z-50">
      <div className="bg-blue dark:bg-darkBlue py-2">
        <nav className="container flex items-center justify-between lg:py-3 h-16 lg:h-20 xl:h-24">
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
