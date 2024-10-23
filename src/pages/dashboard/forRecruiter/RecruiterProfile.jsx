/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import TinnyHeading from "../shared/TinnyHeading";
import DefaultInput from "../shared/DefaultInput";
import PhoneInput from "react-phone-number-input";
import { FiSend } from "react-icons/fi";
import "react-phone-number-input/style.css";
import axiosInstance from "../../../utils/axios";
import toast from "react-hot-toast";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import SelectField from "../shared/SelectField";
import { LiaCitySolid } from "react-icons/lia";
import { TbUnlink } from "react-icons/tb";
import { BsBrowserChrome } from "react-icons/bs";
import {
  MdAddLocationAlt,
  MdLocationCity,
  MdPersonAddAlt1,
} from "react-icons/md";
import { FaMapLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { TbNumbers } from "react-icons/tb";
import { RiUserLocationLine } from "react-icons/ri";
import TextareaField from "../shared/TextareaField";

const RecruiterProfile = () => {
  const { currentUser } = useCurrentUser();

  const { data: currentRecruiter } = useQuery({
    queryKey: ["currentRecruiter", currentUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/recruiters/currentRecruiter/${currentUser?.email}`
      );
      return res.data;
    },
    enabled: !!currentUser?.email,
  });

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    description: "",
    industry: "",
    website: "",
    phone: "",
    email: currentUser?.email,
    map: "",
    location: "",
    ceo: "",
    businessType: "",
    annualRevenue: "",
    foundedYear: "",
    companySizeCategory: "",
    numberOfEmployees: "",
    certifications: [],
    awards: [],
    technology: [],
    socialProfiles: {},
  });

  const [certification, setCertification] = useState("");
  const [award, setAward] = useState("");
  const [technologys, setTechnologys] = useState("");
  const [socialKey, setSocialKey] = useState("");
  const [socialValue, setSocialValue] = useState("");

  // Populate formData with recruiter data
  useEffect(() => {
    if (currentRecruiter) {
      setFormData((prev) => ({
        ...prev,
        ...currentRecruiter,
      }));
    }
  }, [currentRecruiter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleAddCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, certification],
    }));
    setCertification("");
  };

  const handleAddAward = () => {
    setFormData((prev) => ({
      ...prev,
      awards: [...prev.awards, award],
    }));
    setAward("");
  };

  const handleAddTechnology = () => {
    setFormData((prev) => ({
      ...prev,
      technology: [...prev.technology, technologys],
    }));
    setTechnologys("");
  };

  const handleSocialChange = () => {
    if (socialKey && socialValue) {
      setFormData((prev) => ({
        ...prev,
        socialProfiles: {
          ...prev.socialProfiles,
          [socialKey]: socialValue,
        },
      }));
      setSocialKey("");
      setSocialValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post("/recruiters", formData).then((res) => {
      if (res.data.insertId) {
        toast.success("Successfully Added recruiter!");
      }
    });
  };
  console.log(formData);
  return (
    <div>
      <TinnyHeading
        title="Company Profile"
        path="recruiter-profile"
        pathName="Company Profile"
      />
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
        <h5>Profile Details</h5>
        <hr className="my-6 text-lightGray" />
        <form onSubmit={handleSubmit} className="space-y-2">
          <DefaultInput
            label="Company Name"
            icon={<LiaCitySolid />}
            type="text"
            name="name"
            placeholder="Company Name"
            value={formData.name}
            onChange={handleChange}
          />
          <DefaultInput
            label="Logo URL"
            icon={<TbUnlink />}
            type="url"
            name="logo"
            placeholder="http://company.com/logo"
            value={formData.logo}
            onChange={handleChange}
          />
          <TextareaField
            placeholder="Short description about the company..."
            label="Company Short Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <SelectField
            label="Industry"
            name="industry"
            options={[
              "Select Industry",
              "Web and Software Development",
              "Technology and IT Solutions",
              "Business Process Outsourcing (BPO)",
              "Artificial Intelligence and Data Science",
              "Digital Marketing and E-commerce",
              "Construction and Infrastructure",
              "Healthcare IT and Life Sciences",
              "Logistics and Supply Chain Management",
              "Financial Technology (FinTech)",
              "Education Technology (EdTech)",
            ]}
            value={formData.industry}
            onChange={handleChange}
          />
          <DefaultInput
            label="Website"
            icon={<BsBrowserChrome />}
            placeholder="http://company.com"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="lg:col-span-3">
            <label className="font-semibold">Phone</label>
            <PhoneInput
              international
              defaultCountry="ES"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="rounded-md bg-bgLightWhite dark:bg-darkBlue"
            />
          </div>
          <DefaultInput
            label="CEO"
            icon={<MdPersonAddAlt1 />}
            placeholder="Jhankar Mahbub"
            type="text"
            name="ceo"
            value={formData.ceo}
            onChange={handleChange}
          />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            <SelectField
              label="Business Type"
              name="businessType"
              options={["Private", "Public"]}
              value={formData.businessType}
              onChange={handleChange}
            />
            <SelectField
              label="Company Size Category"
              name="companySizeCategory"
              options={["Small", "Medium", "Large"]}
              value={formData.companySizeCategory}
              onChange={handleChange}
            />
            <SelectField
              label="Number of Employees"
              name="numberOfEmployees"
              options={["1-50", "51-100", "101-300", "301-500", "501-1000+"]}
              value={formData.numberOfEmployees}
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-x-6 md:gap-x-4">
            <DefaultInput
              label="Annual Revenue"
              icon={<FaMoneyCheckDollar />}
              placeholder="20 Million"
              type="number"
              name="annualRevenue"
              value={formData.annualRevenue}
              onChange={handleChange}
            />
            <DefaultInput
              label="Founded Year"
              icon={<TbNumbers />}
              placeholder="2004"
              type="number"
              name="foundedYear"
              value={formData.foundedYear}
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 gap-6">
            <DefaultInput
              label="Location"
              icon={<MdAddLocationAlt />}
              placeholder="City, Country"
              type="text"
              name="location"
              value={formData.state}
              onChange={handleChange}
            />

            <DefaultInput
              label="Map"
              type="text"
              name="map"
              value={formData.map}
              onChange={handleChange}
              placeholder={"Map link.."}
            />
          </div>

          <div className="lg:col-span-6">
            <label className="font-semibold">Certifications</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
                className="w-full"
                placeholder="Add certifications one by one"
              />
              <button
                type="button"
                onClick={handleAddCertification}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.certifications.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <label className="font-semibold">Awards</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={award}
                onChange={(e) => setAward(e.target.value)}
                className="w-full"
                placeholder="Add awards one by one"
              />
              <button
                type="button"
                onClick={handleAddAward}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.awards.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <label className="font-semibold">Technology</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={technologys}
                onChange={(e) => setTechnologys(e.target.value)}
                className="w-full"
                placeholder="Add technology one by one"
              />
              <button
                type="button"
                onClick={handleAddTechnology}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.technology.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <label className="font-semibold">Social </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={socialKey}
                onChange={(e) => setSocialKey(e.target.value)}
                className="w-full"
                placeholder="Platform (e.g., LinkedIn)"
              />
              <input
                type="text"
                value={socialValue}
                onChange={(e) => setSocialValue(e.target.value)}
                className="w-full"
                placeholder="URL (e.g., https://linkedin.com/company/...)"
              />
              <button
                type="button"
                onClick={handleSocialChange}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <ul>
              {Object.entries(formData.socialProfiles).map(
                ([platform, url], index) => (
                  <li key={index} className="text-gray text-12">
                    {platform}:{" "}
                    <a href={url} target="_blank">
                      {url}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Add more fields like this as needed */}
          <div className="lg:col-span-6 flex justify-end">
            <button
              type="submit"
              className="btn bg-blue text-white px-6 py-3 flex items-center"
            >
              <FiSend className="mr-2" /> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterProfile;
