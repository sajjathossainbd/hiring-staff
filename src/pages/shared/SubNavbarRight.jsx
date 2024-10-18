import { FiPhoneCall } from "react-icons/fi";
import DropdownSimple from "../../components/ui/DropdownSimple";
const countryOptions = ["Bangladesh", "US", "Other"];
const currencyOptions = ["EUR", "BD", "AURO"];

function SubNavbarRight() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-2 items-center text-darkBlue">
        <FiPhoneCall />
        <p className="text-darkBlue">328-435-6523</p>
      </div>
      <DropdownSimple dynamicOptions={currencyOptions} placeholderData="USD" />
      <DropdownSimple
        dynamicOptions={countryOptions}
        placeholderData="All Country"
      />
    </div>
  );
}

export default SubNavbarRight;
