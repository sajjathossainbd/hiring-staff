import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/hiring.png";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="backdrop-blur-sm sticky top-0 z-50 bg-[#f2f6fd] ">
      <nav className="container flex items-center justify-between text-white">
        <div className="scale-100 cursor-pointer rounded-2xl text-xl font-semibold text-white">
          <div className="flex items-center gap-2">
            <img className="lg:size-12 size-8" src={logo} alt="Hiring Stuff" />
            <h3>Hiring Stuff</h3>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="group flex cursor-pointer flex-col pb-1">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-blue border-b-2 border-blue"
                      : "text-darkBlue"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden items-center justify-between gap-10 md:flex">
          <NavLink
            to="/register"
            className="underline hover:decoration-dotted hover:-translate-y-1 transition-all hover:text-blue"
          >
            <h6 className="hover:text-blue">Register</h6>
          </NavLink>
          <button className="btn bg-blue hover:bg-darkBlue hover:-translate-y-1 transition-all duration-300">
            <h6 className="text-white">Sign in</h6>
          </button>
          <label className="swap swap-rotate text-darkBlue">
            <input type="checkbox" />

            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off h-10 w-10 fill-current"
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
          className="relative flex md:hidden text-darkBlue"
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
              className="z-10 bg-blue absolute right-0 top-12 flex w-[200px] flex-col rounded-lg text-base"
            >
              {navLinks.map(({ to, label }) => (
                <li
                  key={to}
                  className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600"
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-lightGray"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
