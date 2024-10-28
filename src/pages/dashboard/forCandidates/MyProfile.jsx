import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import DefaultInput from "../shared/DefaultInput";
import { CgNametag } from "react-icons/cg";
import { useState } from "react";
import SelectField from "../shared/SelectField";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import TextareaField from "../shared/TextareaField";
import { FaGlobe } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrCopy } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
const MyProfile = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    description: "",
    industry: "",
    website: "",
    phone: "",
    email: user?.email || "",
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

  const { data: currentCandidate, refetch } = useQuery({
    queryKey: ["currentCandidate", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/candidates/currentCandidate/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  const { register, handleSubmit } = useForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (data) => {
    const updatedData = {
      ...formData,
      name: data.name || currentCandidate?.name,
      phone: data.phone || currentCandidate?.phone_number,
      email: formData.email,
      location: {
        city: data.city || currentCandidate?.location?.city,
        state: data.state || currentCandidate?.location?.state,
        country: data.country || currentCandidate?.location?.country,
      },
      about_me: data.about_me || currentCandidate?.about_me,
      job_type: data.job_type || currentCandidate?.job_type,
    };

    try {
      const res = await axiosInstance.patch(
        `/candidates/profile/${formData.email}`,
        updatedData
      );
      if (res.data.modifiedCount > 0) {
        toast.success("Your data has been updated");
        refetch();
      } else {
        toast.error("No changes made");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  if (!currentCandidate) return <div>Loading...</div>;

  return (
    <div className="bg-white p-10 rounded-lg mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h4 className="text-center font-semibold my-7 mb-4">
          Candidate Profile Update
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="My Role:"
              icon={<CgNametag />}
              placeholder={"Candidate"}
              type="text"
              name="myRole"
              disabled
            />
          </div>

          <div className="mb-4">
            <SelectField
              label=" Job Type"
              name="jobType"
              icon={<GrCopy />}
              options={["Remote", "Hybrid", "Onsite"]}
              value={formData.job_type}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="First Name"
              icon={<FaUser />}
              placeholder={currentCandidate?.first_name}
              type="text"
              name="firstName"
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Last Name"
              icon={<FaUser />} // Add the appropriate icon here
              placeholder={currentCandidate?.last_name}
              type="text"
              name="last_name" // Ensure this matches your form's register logic
              {...register("last_name")} // Use the register function from react-hook-form
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Email"
              icon={<FaEnvelope />} // Add the appropriate icon for email
              placeholder={currentCandidate?.email}
              type="email"
              name="email"
              disabled // This will disable the input field
            />
          </div>

          <div className="mb-4">
            <DefaultInput
              label="Special Profession"
              icon={<FaBriefcase />} // Add the appropriate icon for special profession
              placeholder={currentCandidate?.special_profession}
              type="text"
              name="special_profession" // Ensure this matches your form's register logic
              {...register("special_profession")} // Use the register function from react-hook-form
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Years of Experience"
              icon={<FaClock />} // Add an appropriate icon for years of experience
              placeholder={currentCandidate?.experience_year}
              type="number"
              name="experience_year" // Ensure this matches your form's register logic
              {...register("experience_year")} // Use the register function from react-hook-form
            />
          </div>

          <div className="mb-4">
            <DefaultInput
              label="Phone Number"
              icon={<FaPhone />} // Add an appropriate icon for phone number
              placeholder={currentCandidate?.phone_number}
              type="tel"
              name="phone_number" // Ensure this matches your form's register logic
              {...register("phone_number")} // Use the register function from react-hook-form
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Profile Photo URL"
              icon={<FaImage />} // Add an appropriate icon for profile photo URL
              placeholder={currentCandidate?.photo_url}
              type="url"
              name="image" // Ensure this matches your form's register logic
              {...register("image")} // Use the register function from react-hook-form
            />
          </div>

          <div className="mb-4">
            <DefaultInput
              label="Cover Image URL"
              icon={<FaImage />} // Add an appropriate icon for cover image URL
              placeholder="https://i.ibb.co.com/mBcjQj6/download-1.jpg"
              type="url"
              name="imageUrl" // Ensure this matches your form's register logic
              disabled // This will disable the input field
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Resume URL"
              icon={<TiDocumentText />} 
              placeholder={currentCandidate?.resume}
              type="url"
              name="resume" 
              {...register("resume")} 
            />
          </div>

          <div className="mb-4">
            <DefaultInput
              label="Cover Letter URL"
              icon={<FaFileAlt />} 
              placeholder={currentCandidate?.cover_letter}
              type="url"
              name="cover_letter" 
              {...register("cover_letter")} 
            />
          </div>
        </div>

        <div className="mb-4">
          <DefaultInput
            label="Skills (comma-separated)"
            icon={<FaTools />} 
            placeholder={currentCandidate?.skills?.join(", ")}
            type="text"
            name="skills" 
            {...register("skills")} 
          />
        </div>

        <div className="mb-4">
          <TextareaField
            placeholder={
              currentCandidate?.about_me ||
              "Short description about yourself..."
            } 
            icon={<GrCopy />} 
            label="About Me" 
            name="about_me" 
            value={formData.about_me} 
            onChange={(e) => handleChange(e)} 
            rows={4} 
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="City"
              icon={<FaMapMarkerAlt />} 
              placeholder={
                currentCandidate?.location?.city || "Enter your city..."
              } 
              type="text"
              name="city" 
              {...register("city")}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="State"
              icon={<FaFlag />} 
              placeholder={
                currentCandidate?.location?.state || "Enter your state..."
              } // Fallback placeholder
              type="text"
              name="state" 
              {...register("state")} 
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Country"
              icon={<FaGlobe />} 
              placeholder={
                currentCandidate?.location?.country || "Enter your country..."
              } 
              type="text"
              name="country" 
              {...register("country")} 
            />
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <PrimaryButton title={"Update Now"} icon={<BsFillSendFill />} />
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
