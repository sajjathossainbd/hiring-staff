
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCurrentUser from "../../hooks/useCurrentUser";
import ProfileDropDown from "../../components/navbar/ProfileDropDown";
import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";

const Navbar = () => {
  const { user, logOut } = useAuth();

 


  return (
    <div className="backdrop-blur-sm sticky top-0 z-50">
      <div className="bg-bgLightWhite dark:bg-darkBlue">
        <nav className="container flex items-center justify-between lg:py-3 h-16 lg:h-20 xl:h-24">
          {/* Logo */}
          <div className="scale-100 cursor-pointer rounded-2xl text-xl font-semibold text-darkBlue">
            <Link to={"/"}>
              <div className="flex items-center gap-2">
                {isDarkMode ? (
                  <img
                    className=" w-44 lg:w-full"
                    src="https://i.ibb.co.com/W6jZw23/Hiring-Staff-Light-Logo.png"
                    alt="Hiring Stuff"
                  />
                ) : (
                  <img
                    className=" w-44 lg:w-full"
                    src="https://i.ibb.co/0rKvK9v/Hiring-Staff-Logo.png"
                    alt="Hiring Stuff"
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavItems />
          <ProfileDropDown />

          {/* Mobile Dropdown Menu */}
          <MobileNavItems />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
