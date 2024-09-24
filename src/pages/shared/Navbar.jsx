import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const { user, logOut } = useAuth();

  const [isDarkMode, setIsDarkMode] = useState(false);

  // hamburger dropdown
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  // profile dropdown
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef();


  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef.current.contains(e.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs-listing", label: "Jobs" },
    { to: "/recruiters-listing", label: "Recruiters" },
    { to: "/candidates-listing", label: "Candidates" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];


  return (
    <div className="backdrop-blur-sm sticky top-0 z-50">
      <div className="bg-bgLightWhite dark:bg-darkBlue">
        <nav className="container flex items-center justify-between lg:py-3 h-16 lg:h-20 xl:h-24">
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
          <ul className="hidden md:hidden lg:hidden xl:flex items-center gap-5">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="group flex cursor-pointer flex-col">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `font-medium ${isActive
                      ? "text-blue dark:text-white dark:border-white border-b-2 border-blue"
                      : "text-darkBlue dark:text-lightText"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:hidden lg:hidden xl:flex items-center lg:gap-5 md:gap-3">
            {user ? (

              <div ref={dropDownRef} className="relative mr-5 w-fit text-black">
                <button onClick={() => setOpen((prev) => !prev)}>
                  <img width={40} height={40} className="w-12 border-2 border-blue rounded-full lightGray object-cover transition-transform duration-300 hover:scale-105 hover:opacity-80" src={user?.photoURL} alt="avatar" />
                </button>
                <ul
                  className={`${open ? 'visible opacity-100 transition-opacity duration-300' : 'invisible opacity-0'} absolute right-0 top-12 z-50 w-60 rounded-sm bg-bgLightWhite dark:bg-darkBlue dark:text-white`}>
                  <li className='rounded-sm px-6 py-2 flex justify-center'>
                    <img src={user?.photoURL} alt="" />
                  </li>
                  <li className='rounded-sm px-6 py-2 text-center'>
                    {user?.displayName} <br />
                    <strong className="text-12 text-blue dark:text-white">{user?.email}</strong>
                  </li>
                  <li className='hover:bg-slate-300 inter rounded-sm px-6 py-2'>
                    <Link to='/dashboard/my-profile'>Dashboard</Link>
                  </li>
                  <li className='text-red-500 hover:bg-red-600 hover:text-white rounded-sm px-6 py-2 cursor-pointer font-semibold' onClick={logOut}>Logout</li>
                </ul>
              </div>
            ) : (
              <Link to={"sign-in"}>
                <div className="mr-5">
                  <PrimaryButton title={"Sign in"} />
                </div>
              </Link>
            )}

            {/* Dark Mode Toggle */}
            <label className="swap swap-rotate text-darkBlue flex items-center">
              <input type="checkbox" onChange={handleDarkModeToggle} />
              {/* Sun Icon */}
              <svg
                className="swap-on -ml-8 lg:h-10 lg:w-10 md:h-10 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* Moon Icon */}
              <svg
                className="swap-off -ml-8 lg:h-10 lg:w-10 md:h-10 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex lg:flex xl:hidden text-darkBlue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            {dropDownState && (
              <ul
                data-aos="slide-left"
                data-aos-offset="200"
                data-aos-duration="700"
                className="z-10 bg-blue absolute right-0 xl:top-10 lg:top-12 top-[44px] flex w-[200px] flex-col rounded-lg text-base"
              >
                {navLinks.map(({ to, label }) => (
                  <li
                    key={to}
                    className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600"
                  >
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `${isActive ? "text-white" : "text-darkBlue"}`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
                  <NavLink
                    to={'/dashboard/my-profile'}
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-darkBlue"}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                {user ? (
                  <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
                    <button
                      onClick={logOut}
                      className="text-red-500 font-semibold"
                    >
                      Sign out
                    </button>
                  </li>
                ) : (
                  <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
                    <Link to="/sign-in">
                      <button className="text-darkBlue font-semibold">
                        Sign in
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
