import { FiPhoneCall } from "react-icons/fi";
import DropdownSimple from "../../components/ui/DropdownSimple";
import { Trans, useTranslation } from "react-i18next";

const languageOptions = ["English", "Bangla"];

function SubNavbarRight() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    console.log("Language selected:", selectedLanguage);
    if (selectedLanguage === "English") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else if (selectedLanguage === "Bangla") {
      i18n.changeLanguage("bn");
      localStorage.setItem("language", "bn");
    }
  };

  return (
    <div className="xl:flex lg:hidden md:hidden items-center gap-6 hidden">
      <div className="flex gap-2 items-center text-darkBlue">
        <FiPhoneCall />
        <p className="text-darkBlue">
          <Trans i18nKey={"number"}></Trans>
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
