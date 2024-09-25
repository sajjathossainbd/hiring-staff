import DefaultInput from "../shared/DefaultInput";
import TinnyHeading from "../shared/TinnyHeading";
const CompanyProfile = () => {
  return (
    <div className="container py-5">
      <div>
        <TinnyHeading
          title="Company Profile"
          path="company-profile"
          pathName="Company Profile"
        />
      </div>
      <DefaultInput
        label="Name"
        type={"text"}
        placeholder={"Enter your name"}
      />
      <div className="flex w-full gap-5">
        <DefaultInput
          label="Name"
          type={"text"}
          placeholder={"Enter your name"}
        />
        <DefaultInput
          label="Name"
          type={"text"}
          placeholder={"Enter your name"}
        />
      </div>
    </div>
  );
};

export default CompanyProfile;
