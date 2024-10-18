import { FiPhoneCall } from "react-icons/fi";
import NormalDropdown from "../../components/ui/NormalDropDown";
const countryOptions = ["Bangladesh", "US", "Other"];
const currencyOptions = ["EUR", "BD", "AURO"];

function SubNavbarRight() {
  return (
    <div className="xl:flex lg:hidden md:hidden items-center gap-6 hidden">
      <div className="flex gap-2 items-center text-darkBlue">
        <FiPhoneCall />
        <p className="text-darkBlue">328-435-6523</p>
      </div>
      <NormalDropdown dynamicOptions={currencyOptions} placeholderData="USD" />
      <NormalDropdown
        dynamicOptions={countryOptions}
        placeholderData="All Country"
      />
    </div>
  );
}

export default SubNavbarRight;
