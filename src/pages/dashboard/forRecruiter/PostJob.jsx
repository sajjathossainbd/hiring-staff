import { useState } from "react";
import DefaultInput from "../shared/DefaultInput";
import TinnyHeading from "../shared/TinnyHeading";
import { FiSend } from "react-icons/fi";
const PostJob = () => {
  // State object to handle form data
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    jobType: "",
    specialisms: "",
    offeredSalary: "",
    careerLevel: "",
    experience: "",
    gender: "",
    industry: "",
    qualification: "",
    applicationDeadline: "",
    country: "",
    city: "",
    completeAddress: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <TinnyHeading
        title={"Post a New Job"}
        path={"post-job"}
        pathName={"Post a New Job"}
      />
      <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
        <h5>Post Your Job</h5>
        <hr className="my-6 text-lightGray" />

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-6 gap-4 text-14"
        >
          <div className="col-span-6">
            <DefaultInput
              label={"Job Title"}
              type={"text"}
              placeholder={"Job title here"}
              name="jobTitle"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 flex flex-col h-full">
            <div className="label">
              <span className="font-semibold">Job Description</span>
            </div>
            <textarea
              className="w-full h-full p-2 resize-none py-4 rounded-md bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border text-14 outline-none px-3 
                   focus:bg-white border border-bgLightWhite 
                   focus:border-blue placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-500"
              placeholder="Job Description"
              name="jobDescription"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Name Fields */}
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"First Name"}
              type={"text"}
              placeholder={"First Name"}
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"Last Name"}
              type={"text"}
              placeholder={"Last Name"}
              name="lastName"
              onChange={handleChange}
            />
          </div>

          {/* Email and Job Type */}
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"Email address"}
              type={"email"}
              placeholder={"Email address"}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Job Type</span>
            </div>
            <select
              name="jobType"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Job Type</option>
              <option>Banking</option>
              <option>Categories</option>
              <option>Digital & Creative</option>
            </select>
          </div>

          {/* Specialisms and Offered Salary */}
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Specialisms</span>
            </div>
            <select
              name="specialisms"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Specialisms</option>
              <option>Banking</option>
              <option>Categories</option>
              <option>Digital & Creative</option>
            </select>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Offered Salary</span>
            </div>
            <select
              name="offeredSalary"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Offered Salary</option>
              <option>$400</option>
              <option>$500</option>
              <option>$1000</option>
              <option>$2000</option>
            </select>
          </div>

          {/* Career Level and Experience */}
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Career Level</span>
            </div>
            <select
              name="careerLevel"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Career Level</option>
              <option>Entry</option>
              <option>Mid</option>
              <option>Senior</option>
            </select>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Experience</span>
            </div>
            <select
              name="experience"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Experience</option>
              <option>Less than 1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
            </select>
          </div>

          {/* Gender and Industry */}
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Gender</span>
            </div>
            <select
              name="gender"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label">
              <span className="font-semibold">Industry</span>
            </div>
            <select
              name="industry"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Industry</option>
              <option>Banking</option>
              <option>Categories</option>
              <option>Digital & Creative</option>
              <option>Management</option>
            </select>
          </div>

          {/* Qualification, Deadline, and Country */}
          <div className="col-span-6 md:col-span-2">
            <div className="label">
              <span className="font-semibold">Qualification</span>
            </div>
            <select
              name="qualification"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Qualification</option>
              <option>High School</option>
              <option>Bachelor&apos;s</option>
              <option>Master&apos;s</option>
            </select>
          </div>
          <div className="col-span-6 md:col-span-2">
            <DefaultInput
              label={"Application Deadline Date"}
              type={"date"}
              name="applicationDeadline"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="label">
              <span className="font-semibold">Country</span>
            </div>
            <select
              name="country"
              onChange={handleChange}
              className="py-4 px-3 bg-bgLightWhite dark:bg-darkBlue dark:border-blue dark:border outline-none w-full border-lightGray rounded-md"
            >
              <option value="">Select Country</option>
              <option>Bangladesh</option>
              <option>China</option>
              <option>Germany</option>
              <option>United Arab Emirates</option>
            </select>
          </div>

          {/* City, Address, Latitude, and Longitude */}
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"City"}
              type={"text"}
              placeholder={"City"}
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"Complete Address"}
              type={"text"}
              placeholder={"Complete Address"}
              name="completeAddress"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"Latitude"}
              type={"text"}
              placeholder={"Latitude"}
              name="latitude"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label={"Longitude"}
              type={"text"}
              placeholder={"Longitude"}
              name="longitude"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-6 flex justify-start">
            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center px-5 group"
            >
              Submit Now
              <FiSend className="ml-2 transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>
        </form>
        {/* Submit Button */}
      </div>
    </div>
  );
};

export default PostJob;
