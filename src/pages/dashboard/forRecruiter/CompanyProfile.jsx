import { MdOutlineFileUpload } from "react-icons/md";
import TinnyHeading from "../shared/TinnyHeading";
import DefaultInput from "../shared/DefaultInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const CompanyProfile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    website: "",
    estSince: "",
    teamSize: "10 - 20",
    multipleSelect: "Banking",
    allowInSearch: "Yes",
    aboutCompany: "",
    country: "Bangladesh",
    city: "Dhaka",
    completeAddress: "",
    findOnMap: "",
    latitude: "",
    longitude: "",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    instagramUrl: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <TinnyHeading
          title="Company Profile"
          path="company-profile"
          pathName="Company Profile"
        />
      </div>

      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
        <h5>Profile Details</h5>
        <hr className="my-6 text-lightGray" />
        <div>
          <div className="flex lg:flex-row flex-col-reverse lg:gap-6 gap-3 items-center">
            <div className="relative">
              <img
                className="lg:w-96 object-cover rounded-md"
                src="https://templates.envytheme.com/eeza/default/assets/images/my-profile.jpg"
                alt="Company Profile"
              />
              <button className="btn bg-white dark:bg-darkBlue dark:text-white dark:border-none flex items-center absolute bottom-4 left-4">
                <MdOutlineFileUpload className="text-lg" /> Upload Photo
              </button>
            </div>
            <div>
              <p>
                Please ensure the file size does not exceed 1MB, with minimum
                dimensions of 450x450, and use .jpg or .png formats.
              </p>
            </div>
          </div>
          <hr className="my-6 text-lightGray" />
          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-6 md:grid-cols-1 gap-x-6 gap-y-4 text-14"
          >
            <div className="lg:col-span-3 md:col-span-6">
              <DefaultInput
                label={"Company name (optional)"}
                type={"text"}
                placeholder={"Company name (optional)"}
                name="companyName"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <DefaultInput
                label={"Email address"}
                type={"email"}
                placeholder={"Email address"}
                name="email"
                onChange={handleChange}
              />
            </div>
            {/* Phone number */}
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">Phone</span>
              </div>
              <PhoneInput
                international
                defaultCountry="BD"
                value={formData.phone}
                onChange={handlePhoneChange}
                className="rounded-md bg-bgLightWhite dark:bg-darkBlue dark:border dark:border-blue"
              />
            </div>
            {/* End */}
            <div className="lg:col-span-3 md:col-span-6">
              <DefaultInput
                label={"Website"}
                type={"url"}
                placeholder={"Website"}
                name="website"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <DefaultInput
                label={"Est. Since"}
                type={"text"}
                placeholder={"12.08.2024"}
                name="estSince"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">Team Size</span>
              </div>
              <select
                name="teamSize"
                onChange={handleChange}
                className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
              >
                <option selected>Select Team Size</option>
                <option>10 - 20</option>
                <option>20 - 50</option>
                <option>200 - 300</option>
                <option>300 - 350</option>
                <option>500 - 1000</option>
              </select>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">Multiple Select Boxes</span>
              </div>
              <select
                name="multipleSelect"
                onChange={handleChange}
                className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
              >
                <option selected>Select Box</option>
                <option>Banking</option>
                <option>Categories</option>
                <option>Digital & Creative</option>
              </select>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">Allow In Search & Listing</span>
              </div>
              <select
                name="allowInSearch"
                onChange={handleChange}
                className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="flex flex-col h-full lg:col-span-6 md:col-span-6">
              <div className="label">
                <span className="font-semibold">About Company</span>
              </div>
              <textarea
                className="w-full h-full p-2 resize-none py-4 rounded-md bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border text-14 outline-none px-3 
                   focus:bg-white border border-bgLightWhite 
                   focus:border-blue placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-500"
                placeholder="Short description about company..."
                name="aboutCompany"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">Country</span>
              </div>
              <select
                name="country"
                onChange={handleChange}
                className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
              >
                <option selected>Select Country</option>
                <option>Bangladesh</option>
                <option>China</option>
                <option>Germany</option>
                <option>United Arab Emirates</option>
                <option>Australia</option>
              </select>
            </div>
            <div className="lg:col-span-3 md:col-span-6">
              <div className="label">
                <span className="font-semibold">City</span>
              </div>
              <select
                name="city"
                onChange={handleChange}
                className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
              >
                <option selected>Select City</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Barisal</option>
              </select>
            </div>
            <div className="lg:col-span-6 md:col-span-6">
              <DefaultInput
                label={"Complete Address"}
                type={"text"}
                placeholder={"Complete Address"}
                name="completeAddress"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-2 md:col-span-6">
              <DefaultInput
                label={"Find On Map"}
                type={"text"}
                placeholder={"Find On Map"}
                name="findOnMap"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-2 md:col-span-6">
              <DefaultInput
                label={"Latitude"}
                type={"text"}
                placeholder={"Latitude"}
                name="latitude"
                onChange={handleChange}
              />
            </div>
            <div className="lg:col-span-2 md:col-span-6">
              <DefaultInput
                label={"Longitude"}
                type={"text"}
                placeholder={"Longitude"}
                name="longitude"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col h-full lg:col-span-6 md:col-span-6">
              <div className="label pb-2">
                <span className="font-semibold">Social Media Links</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
                <DefaultInput
                  label={"Facebook URL"}
                  type={"url"}
                  placeholder={"Facebook URL"}
                  name="facebookUrl"
                  onChange={handleChange}
                />
                <DefaultInput
                  label={"Twitter URL"}
                  type={"url"}
                  placeholder={"Twitter URL"}
                  name="twitterUrl"
                  onChange={handleChange}
                />
                <DefaultInput
                  label={"LinkedIn URL"}
                  type={"url"}
                  placeholder={"LinkedIn URL"}
                  name="linkedinUrl"
                  onChange={handleChange}
                />
                <DefaultInput
                  label={"Instagram URL"}
                  type={"url"}
                  placeholder={"Instagram URL"}
                  name="instagramUrl"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="group">
              <button
                type="submit"
                className="btn btn-primary flex items-center px-5"
              >
                Submit Now
                <FiSend className="ml-2 transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
