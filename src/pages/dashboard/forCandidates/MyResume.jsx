import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import PrimaryButton from "../../../components/shared/PrimaryButton";
import ResumeTemplate from "../../../components/dashboard/ResumeTemplate";

const MyResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birth: "",
    address: "",
    gender: "",
    description: "",
    education: { title: "", degree: "", institute: "", year: "" },
    skill: { title: "", experience: "" },
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

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      education: { ...prevData.education, [name]: value },
    }));
  };

  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      skill: { ...prevData.skill, [name]: value },
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
          {/* name and email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray font-bold mb-2">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray font-bold mb-2">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* phone and birth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label htmlFor="birth" className="block text-gray font-bold mb-2">
                Date of Birth
              </label>
              <input
                name="birth"
                id="birth"
                type="text"
                placeholder="Date of Birth"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray font-bold mb-2">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="+880-"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* address and gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray font-bold mb-2"
              >
                Address
              </label>
              <input
                name="address"
                id="address"
                type="text"
                placeholder="Address"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray font-bold mb-2"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray font-bold mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              placeholder="Short description about you.."
              className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
              onChange={handleChange}
              required
            />
          </div>

          <h4>Education:</h4>
          {/* title and degree */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
            <div className="mb-4">
              <label
                htmlFor="educationTitle"
                className="block text-gray font-bold mb-2"
              >
                Title
              </label>
              <input
                name="title"
                id="educationTitle"
                type="text"
                placeholder="Education title"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleEducationChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="degree"
                className="block text-gray font-bold mb-2"
              >
                Degree
              </label>
              <input
                name="degree"
                id="degree"
                type="text"
                placeholder="Degree"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleEducationChange}
              />
            </div>
          </div>
          {/* institute and year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="institute"
                className="block text-gray font-bold mb-2"
              >
                Institute
              </label>
              <input
                name="institute"
                id="institute"
                type="text"
                placeholder="Institute"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleEducationChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block text-gray font-bold mb-2">
                Year
              </label>
              <input
                name="year"
                id="year"
                type="text"
                placeholder="Year"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleEducationChange}
              />
            </div>
          </div>

          <h4>Skill:</h4>
          {/* title and experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
            <div className="mb-4">
              <label
                htmlFor="skillTitle"
                className="block text-gray font-bold mb-2"
              >
                Title
              </label>
              <input
                name="title"
                id="skillTitle"
                type="text"
                placeholder="Skill Title"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSkillChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-gray font-bold mb-2"
              >
                Experience
              </label>
              <input
                name="experience"
                id="experience"
                type="text"
                placeholder="Experience Level"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSkillChange}
                required
              />
            </div>
          </div>

          <h4>Social Links:</h4>
          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-2">
            <div className="mb-4">
              <label
                htmlFor="facebook"
                className="block text-gray font-bold mb-2"
              >
                Facebook URL
              </label>
              <input
                name="facebook"
                id="facebook"
                type="text"
                placeholder="Facebook URL"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSocialChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="twitter"
                className="block text-gray font-bold mb-2"
              >
                Twitter URL
              </label>
              <input
                name="twitter"
                id="twitter"
                type="text"
                placeholder="Twitter URL"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSocialChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                htmlFor="linkedin"
                className="block text-gray font-bold mb-2"
              >
                LinkedIn URL
              </label>
              <input
                name="linkedin"
                id="linkedin"
                type="text"
                placeholder="LinkedIn URL"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSocialChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="github"
                className="block text-gray font-bold mb-2"
              >
                GitHub URL
              </label>
              <input
                name="github"
                id="github"
                type="text"
                placeholder="GitHub URL"
                className="w-full px-4 py-4 border-none bg-lightText text-14 focus:outline-lightText focus:bg-white rounded-sm"
                onChange={handleSocialChange}
                required
              />
            </div>
          </div>

          <PrimaryButton title={"Submit Now"} icon={<BsFillSendFill />} />
        </form>
      </div>
    </div>
  );
};

export default MyResume;
