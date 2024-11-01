import { HiOutlineMail } from "react-icons/hi";
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

function SubNavbarRight() {
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

  return (
    <div className="xl:flex lg:hidden md:hidden items-center gap-6 hidden">
      <div className="flex gap-1 items-center text-darkBlue">
        <HiOutlineMail className="text-darkBlue dark:text-white"/>
        <p className="text-darkBlue">
          support@hiringstaff.com
        </p>
      </div>

      <DropdownSimple
        dynamicOptions={languageOptions}
        placeholderData={i18n.language === "en" ? "English" : "বাংলা"}
        onOptionSelect={handleLanguageChange}
      />
    </div>
  );
}

export default SubNavbarRight;
