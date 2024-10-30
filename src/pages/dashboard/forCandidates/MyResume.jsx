import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import ResumeTemplate from "../../../components/dashboard/ResumeTemplate";
import DefaultInput from "../shared/DefaultInput";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBuilding,
  TbCalendar,
  TbCalendarTime,
  TbCertificate,
  TbClock,
  TbGenderFemale,
  TbHome,
  TbMail,
  TbPhone,
  TbStar,
  TbUser,
} from "react-icons/tb";
import SelectField from "../shared/SelectField";
import TextareaField from "../shared/TextareaField";
import { GrCopy } from "react-icons/gr";

const MyResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birth: "",
    address: "",
    gender: "",
    description: "",
    education: [{ title: "", degree: "", institute: "", year: "" }],
    skills: [{ title: "", experience: "" }],
    socialLinks: { facebook: "", twitter: "", linkedin: "", github: "" },
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      education: newEducation,
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...formData.skills];
    newSkills[index] = { ...newSkills[index], [name]: value };
    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: { ...prevData.socialLinks, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <ResumeTemplate data={formData} />;
  }

  return (
    <div>
      <h3>My Resume</h3>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <h4>Basic Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <DefaultInput
              label="Name"
              icon={<TbUser />}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <DefaultInput
              label="Email"
              icon={<TbMail />}
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <DefaultInput
              label="Date of Birth"
              icon={<TbCalendar />}
              type="text"
              name="birth"
              placeholder="Date of Birth"
              value={formData.birth}
              onChange={handleChange}
              required
            />
            <DefaultInput
              label="Phone"
              icon={<TbPhone />}
              type="text"
              name="phone"
              placeholder="+880-"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <DefaultInput
              label="Address"
              icon={<TbHome />}
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Gender"
              name="gender"
              icon={<TbGenderFemale />}
              options={["Select your gender", "Male", "Female", "Other"]}
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <TextareaField
            label="Description"
            name="description"
            placeholder="Short description about you.."
            icon={<GrCopy />}
            value={formData.description}
            onChange={handleChange}
            required
          />

          <h4>Education:</h4>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
                <DefaultInput
                  label="Title"
                  icon={<TbCertificate />}
                  type="text"
                  name="title"
                  placeholder="Education title"
                  value={edu.title}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <DefaultInput
                  label="Degree"
                  icon={<TbCertificate />}
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <DefaultInput
                  label="Institute"
                  icon={<TbBuilding />}
                  type="text"
                  name="institute"
                  placeholder="Institute"
                  value={edu.institute}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <DefaultInput
                  label="Year"
                  icon={<TbCalendarTime />}
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
            </div>
          ))}

          <h4>Skills:</h4>
          {formData.skills.map((skill, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
                <DefaultInput
                  label="Title"
                  icon={<TbStar />}
                  type="text"
                  name="title"
                  placeholder="Skill Title"
                  value={skill.title}
                  onChange={(e) => handleSkillChange(index, e)}
                  required
                />
                <DefaultInput
                  label="Experience"
                  icon={<TbClock />}
                  type="text"
                  name="experience"
                  placeholder="Experience Level"
                  value={skill.experience}
                  onChange={(e) => handleSkillChange(index, e)}
                  required
                />
              </div>
            </div>
          ))}

          <h4>Social Links:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
            <DefaultInput
              label="Facebook URL"
              icon={<TbBrandFacebook />}
              type="text"
              name="facebook"
              placeholder="Facebook URL"
              value={formData.socialLinks.facebook}
              onChange={handleSocialChange}
              required
            />
            <DefaultInput
              label="Twitter URL"
              icon={<TbBrandTwitter />}
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              value={formData.socialLinks.twitter}
              onChange={handleSocialChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <DefaultInput
              label="LinkedIn URL"
              icon={<TbBrandLinkedin />}
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.socialLinks.linkedin}
              onChange={handleSocialChange}
              required
            />
            <DefaultInput
              label="GitHub URL"
              icon={<TbBrandGithub />}
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={formData.socialLinks.github}
              onChange={handleSocialChange}
              required
            />
          </div>

          <PrimaryButton
            type="submit"
            title={"Generate My Resume"}
            icon={<BsFillSendFill />}
          >
            Generate My Resume
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default MyResume;
