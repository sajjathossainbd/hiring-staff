import { FiPhoneCall } from "react-icons/fi";
import DropdownSimple from "../../components/ui/DropdownSimple";
import { useTranslation } from "react-i18next";

const countryOptions = ["Bangladesh", "US", "Other"];
const currencyOptions = ["EUR", "BD", "AURO"];
const languageOptions = ["English", "Bangla"];



function SubNavbarRight() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === "English") {
      console.log('Language selected:', selectedLanguage);
      i18n.changeLanguage("en");
    } else if (selectedLanguage === "Bangla") {
      i18n.changeLanguage("bn");
    }
  };
  
  return (
    <div className="xl:flex lg:hidden md:hidden items-center gap-6 hidden">
      <div className="flex gap-2 items-center text-darkBlue">
        <FiPhoneCall />
        <p className="text-darkBlue">328-435-6523</p>
      </div>
      <DropdownSimple dynamicOptions={currencyOptions} placeholderData="USD" />
      <DropdownSimple
        dynamicOptions={countryOptions}
        placeholderData="All Country"
      />
      <DropdownSimple
        dynamicOptions={languageOptions} 
        placeholderData="Language" 
        onOptionSelect={handleLanguageChange} 
      />
    </div>
  );
}

export default SubNavbarRight;
