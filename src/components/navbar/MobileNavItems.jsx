/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

function MobileNavItems({ navLinks, user, logOut }) {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  return (
    <div
      ref={dropDownMenuRef}
      onClick={() => setDropDownState(!dropDownState)}
      className="relative flex lg:flex xl:hidden text-darkBlue dark:text-white"
    >
      <RxHamburgerMenu className="size-8"/>
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
          {user ? (
            <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
              <button onClick={logOut} className="text-red-500 font-semibold">
                Sign out
              </button>
            </li>
          ) : (
            <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
              <Link to="/sign-in">
                <button className="text-darkBlue font-semibold">Sign in</button>
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default MobileNavItems;
