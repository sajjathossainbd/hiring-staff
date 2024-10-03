import {
  FaBriefcase,
  FaDollarSign,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";

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
  return (
    <>
      <div className=" border border-lightGray text-gray space-y-3 rounded-lg p-6 w-full">
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
          icon={<FaEnvelope className="mr-2" />}
          title={"Send Message"}
          className="px-4 py-5"
        />
      </div>
    </>
  );
}

export default Overview;
