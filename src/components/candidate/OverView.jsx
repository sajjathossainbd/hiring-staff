/* eslint-disable react/prop-types */
import {
  FaBriefcase,
  FaCopy,
  FaDollarSign,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

function Overview({ candidate }) {
  const {
    _id,
    first_name,
    last_name,
    email,
    phone_number,
    location,
    photo_url,
    date_applied,
    job_email_applied_to,
    certifications,
    cover_letter,
    resume,
    education,
    experience,
    skills,
  } = candidate || {};

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy email: ", err);
      });
  };

  return (
    <>
      <div className=" border border-lightGray text-gray space-y-3 rounded-lg p-6 w-full">
        <Helmet>
          <title>Hiring Staff - Overview</title>
        </Helmet>
        <h4 className=" ">Overview</h4>
        <hr className="text-lightGray" />

        <div className="flex items-center ">
          <FaBriefcase className="mr-2" />
          <div>
            <p className="">Experience</p>
            <p className="">12 Years</p>
          </div>
        </div>

        <div className="flex items-center">
          <FaDollarSign className=" mr-2" />
          <div>
            <p className="">Expected Salary</p>
            <p className="">$26k - $30k</p>
          </div>
        </div>

        <div className="flex items-center ">
          <FaLanguage className="  mr-2" />
          <div>
            <p>Language</p>
            <p>English, German</p>
          </div>
        </div>

        <div className="flex items-center  ">
          <FaGraduationCap className="  mr-2" />
          <div>
            <p>Education Level</p>
            <p>{education?.[0]?.degree}</p>
          </div>
        </div>

        <hr className="text-lightGray mt-4" />

        <div>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            {location?.city} , {location?.state} , {location?.country},
          </p>
          <p className="mb-2">
            <FaPhoneAlt className="inline-block mr-2" />
            {phone_number}
          </p>
          <p className="mb-2">
            <FaEnvelope className="inline-block mr-2" />
            {email}
          </p>
        </div>

        <PrimaryButton
          onClickBtn={copyToClipboard}
          icon={<FaCopy className="mr-2" />}
          title={"Copy Email"}
          className="px-4 py-5"
        />
      </div>
    </>
  );
}

export default Overview;
