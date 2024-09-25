import { MdOutlineFileUpload } from "react-icons/md";
import TinnyHeading from "../shared/TinnyHeading";
import DefaultInput from "../shared/DefaultInput";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

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
    console.log(formData);
  };

  return (
    <div className="py-5">
      <div>
        <TinnyHeading
          title="Company Profile"
          path="company-profile"
          pathName="Company Profile"
        />
      </div>

      <div className="bg-softLightBlue py-6 lg:px-6 px-0 rounded-md">
        <h5>Profile Details</h5>
        <hr className="my-6 text-lightGray" />
        <div>
          <div className="flex lg:flex-row flex-col-reverse gap-6 items-center">
            <div className="lg:w-1/2 relative">
              <img
                className="w-full object-cover rounded-md"
                src="https://templates.envytheme.com/eeza/default/assets/images/my-profile.jpg"
                alt="Company Profile"
              />
              <button className="btn bg-white flex items-center absolute bottom-4 left-4">
                <MdOutlineFileUpload className="text-lg" /> Upload Photo
              </button>
            </div>
            <div className="lg:w-1/2">
              <p>
                Please ensure the file size does not exceed 1MB, with minimum
                dimensions of 450x450, and use .jpg or .png formats.
              </p>
            </div>
          </div>
          <hr className="my-6 text-lightGray" />
          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-6 md:grid-cols-1 gap-x-6 gap-y-4"
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
                className="py-4 px-3 bg-bgLightWhite outline-none w-full border-lightGray rounded-md"
              >
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
                className="py-4 px-3 bg-bgLightWhite outline-none w-full border-lightGray rounded-md"
              >
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
                className="py-4 px-3 bg-bgLightWhite outline-none w-full border-lightGray rounded-md"
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
                className="w-full h-full p-2 resize-none py-4 rounded-md bg-bgLightWhite text-14 outline-none px-3 
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
                className="py-4 px-3 bg-bgLightWhite outline-none w-full border-lightGray rounded-md"
              >
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
                className="py-4 px-3 bg-bgLightWhite outline-none w-full border-lightGray rounded-md"
              >
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
              <div className="label">
                <span className="font-semibold">Social Media Links</span>
              </div>
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
            <button className="btn btn-primary lg:col-span-6 col-start-1 row-start-11 md:col-span-6">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;