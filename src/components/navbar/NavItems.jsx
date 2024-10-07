import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import SinginLogout from "./SinginLogout";

function NavItems() {
  const { currentUser } = useCurrentUser();
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

  return (
    <div>
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
      {/* Mobile Dropdown Menu */}
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex lg:flex xl:hidden text-darkBlue dark:text-white"
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
            className="z-10 bg-blue dark:bg-white absolute right-0 xl:top-10 lg:top-12 top-[44px] flex w-[200px] flex-col rounded-lg text-base"
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
                to={"/dashboard/my-profile"}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-darkBlue"}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            {/* SinginLogout Component */}
            <SinginLogout />
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavItems;
