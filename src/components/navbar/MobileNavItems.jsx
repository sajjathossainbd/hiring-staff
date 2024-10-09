/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function MobileNavItems({ navLinks }) {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  return (
    <div
      ref={dropDownMenuRef}
      onClick={() => setDropDownState(!dropDownState)}
      className="relative flex lg:flex xl:hidden text-darkBlue dark:text-white"
    >
      <RxHamburgerMenu className="size-8" />
      {dropDownState && (
        <ul
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="700"
          className="z-50 bg-blue dark:bg-white absolute left-0 top-10 flex w-[250px] flex-col rounded-lg text-base p-5 space-y-5"
        >
          {navLinks.map(({ to, label }) => (
            <li key={to} className="group flex cursor-pointer flex-col">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-white dark:border-white border-b-2 border-blue"
                      : "text-darkBlue dark:text-lightText"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MobileNavItems;
