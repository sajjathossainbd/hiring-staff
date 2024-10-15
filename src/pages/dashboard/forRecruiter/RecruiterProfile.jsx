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

const SelectInput = ({ label, name, options, onChange, value }) => (
  <div className="lg:col-span-3 md:col-span-6">
    <label className="font-semibold">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue outline-none w-full border-lightGray rounded-md"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

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
    email: currentUser?.email || "",
    latitude: "",
    longitude: "",
    address: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    ceo: "",
    businessType: "",
    annualRevenue: "",
    foundedYear: "",
    companySizeCategory: "",
    numberOfEmployees: "",
    certifications: [],
    awards: [],
    linkedin: "",
    twitter: "",
  });

  const [certification, setCertification] = useState("");
  const [award, setAward] = useState("");

  // Populate formData with recruiter data once it's available
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post("/recruiters", formData).then((res) => {
      if (res.data.insertId) {
        toast.success("Successfully Added recruiter!");
      }
    });
  };

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
        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-6 md:grid-cols-1 gap-x-6 gap-y-4 text-14"
        >
          <DefaultInput
            label="Company Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <DefaultInput
            label="Logo URL"
            type="url"
            name="logo"
            value={formData.logo}
            onChange={handleChange}
          />
          <textarea
            className="lg:col-span-6 p-3 bg-bgLightWhite dark:bg-darkBlue rounded-md"
            placeholder="Short description about the company..."
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <SelectInput
            label="Industry"
            name="industry"
            options={["FinTech", "Banking", "Education"]}
            value={formData.industry}
            onChange={handleChange}
          />
          <DefaultInput
            label="Website"
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
            type="text"
            name="ceo"
            value={formData.ceo}
            onChange={handleChange}
          />
          <SelectInput
            label="Business Type"
            name="businessType"
            options={["Private", "Public"]}
            value={formData.businessType}
            onChange={handleChange}
          />
          <DefaultInput
            label="Annual Revenue"
            type="text"
            name="annualRevenue"
            value={formData.annualRevenue}
            onChange={handleChange}
          />
          <DefaultInput
            label="Founded Year"
            type="text"
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
          />
          <SelectInput
            label="Company Size Category"
            name="companySizeCategory"
            options={["Small", "Medium", "Large"]}
            value={formData.companySizeCategory}
            onChange={handleChange}
          />
          <DefaultInput
            label="Number of Employees"
            type="number"
            name="numberOfEmployees"
            value={formData.numberOfEmployees}
            onChange={handleChange}
          />
          <DefaultInput
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <DefaultInput
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <DefaultInput
            label="State"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <DefaultInput
            label="Country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <DefaultInput
            label="Latitude"
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
          />
          <DefaultInput
            label="Longitude"
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
          />
          <DefaultInput
            label="Zip Code"
            type="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          <div className="lg:col-span-6">
            <label className="font-semibold">Certifications</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
                className="w-full"
              />
              <button
                type="button"
                onClick={handleAddCertification}
                className="btn bg-blue text-white"
              >
                Add
              </button>
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
              />
              <button
                type="button"
                onClick={handleAddAward}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
          </div>
          <DefaultInput
            label="LinkedIn"
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <DefaultInput
            label="Twitter"
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
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
