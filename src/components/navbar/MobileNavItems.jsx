/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import DropdownSimple from "../../components/ui/DropdownSimple";
import { useTranslation } from "react-i18next";
import BDIcon from "./../../assets/icon/bd.png";
import USIcon from "./../../assets/icon/us.png";

const languageOptions = [
  {
    label: "English",
    icon: USIcon,
  },
  {
    label: "বাংলা",
    icon: BDIcon,
  },
];

function MobileNavItems({ navLinks }) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === "English") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else if (selectedLanguage === "বাংলা") {
      i18n.changeLanguage("bn");
      localStorage.setItem("language", "bn");
    }
  };

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  return (
    <div
      ref={dropDownMenuRef}
      className="relative flex lg:flex xl:hidden text-darkBlue dark:text-white"
    >
      <button onClick={() => setDropDownState(!dropDownState)} className="flex items-center">
        <RxHamburgerMenu className="size-8" />
      </button>
      {dropDownState && (
        <ul
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="700"
          className="z-50 bg-bgLightBlue dark:bg-blue absolute left-0 top-10 flex w-[250px] flex-col rounded-lg text-base p-5 space-y-5"
        >
          {navLinks.map(({ to, label }) => (
            <li key={to} className="group flex cursor-pointer flex-col">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-blue dark:border-white dark:text-white border-b-2 border-blue"
                      : "text-darkBlue dark:text-lightText"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <DropdownSimple
              dynamicOptions={languageOptions}
              placeholderData={i18n.language === "en" ? "English" : "বাংলা"}
              onOptionSelect={handleLanguageChange}
            />
          </li>
        </ul>
      )}
    </div>
  );
}

export default MobileNavItems;
