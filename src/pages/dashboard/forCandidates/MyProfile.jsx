import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import DefaultInput from "../shared/DefaultInput";
import { CgNametag } from "react-icons/cg";
import { useState, useEffect } from "react";
import SelectField from "../shared/SelectField";
import { FaUser, FaEnvelope, FaBriefcase, FaClock, FaPhone, FaImage, FaGlobe, FaMapMarkerAlt, FaTools, FaFileAlt, FaFlag } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import TextareaField from "../shared/TextareaField";
import { GrCopy } from "react-icons/gr";

const MyProfile = () => {
  const { user } = useAuth();

  const { data: currentCandidate, refetch } = useQuery({
    queryKey: ["currentCandidate", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/candidates/currentCandidate/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const [formData, setFormData] = useState({
    job_type: "Remote", // Default value for job type
    first_name: "",
    last_name: "",
    special_profession: "",
    experience_year: "",
    phone_number: "",
    photo_url: "",
    resume: "",
    cover_letter: "",
    skills: [],
    about_me: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    if (currentCandidate) {
      setFormData({
        job_type: currentCandidate.job_type || "Remote", // Ensure job type is set correctly
        first_name: currentCandidate.first_name || "",
        last_name: currentCandidate.last_name || "",
        special_profession: currentCandidate.special_profession || "",
        experience_year: currentCandidate.experience_year || "",
        phone_number: currentCandidate.phone_number || "",
        photo_url: currentCandidate.photo_url || "",
        resume: currentCandidate.resume || "",
        cover_letter: currentCandidate.cover_letter || "",
        skills: currentCandidate.skills ? currentCandidate.skills.join(", ") || "" : "", // Convert array to string for input
        about_me: currentCandidate.about_me || "",
        city: currentCandidate.location?.city || "",
        state: currentCandidate.location?.state || "",
        country: currentCandidate.location?.country || "",
      });
    }
  }, [currentCandidate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...currentCandidate,
      ...formData,
      email: user.email,
      location: {
        city: formData.city,
        state: formData.state,
        country: formData.country,
      },
      skills: formData.skills.split(",").map(skill => skill.trim()),
    };

    try {
      const res = await axiosInstance.patch(`/candidates/profile/${user.email}`, updatedData);
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
      <form onSubmit={onSubmit}>
        <h4 className="text-center font-semibold my-7 mb-4">Candidate Profile Update</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="My Role:"
              icon={<CgNametag />}
              placeholder="Candidate"
              type="text"
              disabled
            />
          </div>

          <div className="mb-4">
            <SelectField
              label="Job Type"
              name="job_type"
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
              placeholder={currentCandidate.first_name}
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Last Name"
              icon={<FaUser />}
              placeholder={currentCandidate.last_name}
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Email"
              icon={<FaEnvelope />}
              placeholder={currentCandidate.email}
              type="email"
              disabled
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Special Profession"
              icon={<FaBriefcase />}
              placeholder={currentCandidate.special_profession}
              type="text"
              name="special_profession"
              value={formData.special_profession}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Years of Experience"
              icon={<FaClock />}
              placeholder={currentCandidate.experience_year}
              type="number"
              name="experience_year"
              value={formData.experience_year}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Phone Number"
              icon={<FaPhone />}
              placeholder={currentCandidate.phone_number}
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Profile Photo URL"
              icon={<FaImage />}
              placeholder={currentCandidate.photo_url}
              type="url"
              name="photo_url"
              value={formData.photo_url}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Cover Image URL"
              icon={<FaImage />}
              placeholder="https://i.ibb.co.com/mBcjQj6/download-1.jpg"
              type="url"
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="Resume URL"
              icon={<TiDocumentText />}
              placeholder={currentCandidate.resume}
              type="url"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Cover Letter URL"
              icon={<FaFileAlt />}
              placeholder={currentCandidate.cover_letter}
              type="url"
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <DefaultInput
            label="Skills (comma-separated)"
            icon={<FaTools />}
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <TextareaField
            placeholder={currentCandidate.about_me || "Short description about yourself..."}
            icon={<GrCopy />}
            label="About Me"
            name="about_me"
            value={formData.about_me}
            onChange={handleChange}
            rows={4}
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <DefaultInput
              label="City"
              icon={<FaMapMarkerAlt />}
              placeholder={currentCandidate.location?.city || "Enter your city..."}
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="State"
              icon={<FaFlag />}
              placeholder={currentCandidate.location?.state || "Enter your state..."}
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <DefaultInput
              label="Country"
              icon={<FaGlobe />}
              placeholder={currentCandidate.location?.country || "Enter your country..."}
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
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
