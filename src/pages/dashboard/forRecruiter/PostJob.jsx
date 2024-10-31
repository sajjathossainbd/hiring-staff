import { useEffect, useState } from "react";
import DefaultInput from "../shared/DefaultInput";
import TinnyHeading from "../shared/TinnyHeading";
import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axios";
import SelectField from "../shared/SelectField";
import useCurrentUser from "../../../hooks/useCurrentUser";
import TextareaField from "../shared/TextareaField";
import { GrCopy } from "react-icons/gr";
import { PiBookOpenBold, PiSubtitlesBold } from "react-icons/pi";
import { TbCategory, TbGraphFilled } from "react-icons/tb";
import { FaBusinessTime, FaCalendar, FaCalendarDay, FaGetPocket, FaLocationDot, FaNoteSticky, FaTags } from "react-icons/fa6";
import { GiPlayerTime } from "react-icons/gi";
import { MdTimelapse } from "react-icons/md";
import { FaMoneyCheckAlt, FaRegListAlt } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
const PostJob = () => {
  const [candidateEmails, setCandidateEmails] = useState();

  const { currentRecruiter } = useCurrentUser();

  console.log(currentRecruiter);

  useEffect(() => {
    axiosInstance.get("/users/candidate-emails").then((res) => {
      setCandidateEmails(res.data.candidateEmails);
    });
  }, []);

  const [formData, setFormData] = useState({
    recruiter_id: currentRecruiter?._id,
    jobTitle: "",
    logo: currentRecruiter?.logo,
    companyName: currentRecruiter?.name,
    category: "",
    description: "",
    job_type: "",
    experience: "",
    job_location: "",
    work_hours: "",
    workdays: "",
    min_salary: "",
    max_salary: "",
    postedDate: "",
    lastDateToApply: "",
    education: "",
    tags: [],
    responsibilities: [],
    requirements: [],
    email: currentRecruiter?.email,
    benefits: [],
    appliers: [],
    featured: false,
  });



  const [tag, setTag] = useState("");
  const [responsibilitie, setResponsibilitie] = useState("");
  const [requirement, setRequirement] = useState("");
  const [benefit, setBenefit] = useState("");
  const [applier, setApplier] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
    }));
  }, []);
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      candidateEmails: candidateEmails,
    }));
  }, [candidateEmails]);

  // useEffect(() => {
  //   if (currentRecruiter?.email) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       company_email: currentRecruiter?.email,
  //       company_name: currentRecruiter?.name,
  //       candidateEmails,
  //     }));
  //   }
  // }, [candidateEmails, currentRecruiter]);

  const handleAddTags = () => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, tag],
    }));
    setTag("");
  };

  const handleAddResponsibilities = () => {
    setFormData((prev) => ({
      ...prev,
      responsibilities: [...prev.responsibilities, responsibilitie],
    }));
    setResponsibilitie("");
  };
  const handleAddRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, requirement],
    }));
    setRequirement("");
  };
  const handleAddBenefit = () => {
    setFormData((prev) => ({
      ...prev,
      benefits: [...prev.benefits, benefit],
    }));
    setBenefit("");
  };

  const handleAddApplier = () => {
    setFormData((prev) => ({
      ...prev,
      appliers: [...prev.appliers, applier],
    }));
    setApplier("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    try {
      const res = await axiosInstance.post("/jobs", formData);
      if (res.data.insertId) {
        toast.success("Job submitted successfully");
        e.target.reset();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Reset loading to false after submission
    }
  };

  return (
    <div>
      <TinnyHeading
        title="Post a New Job"
        path="post-job"
        pathName="Post a New Job"
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
              label="Job Title"
              icon={<PiSubtitlesBold />}
              type="text"
              placeholder="Enter Job Title"
              name="jobTitle"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 ">
            <SelectField
              icon={<TbCategory />}
              label="Category"
              name="category"
              options={[
                "Back-End Development",
                "Business & Finance",
                "Business Analysis",
                "Consulting",
                "Content Creation",
                "Content Development",
                "Content Writing",
                "Data Analysis",
                "Design",
                "DevOps",
                "Education",
                "Education & Career Guidance",
                "ERP",
                "Front End",
                "Full Stack Development",
                "Game Development",
                "IoT",
                "IT & Software",
                "IT Consultancy",
                "IT Support",
                "Marketing",
                "Mobile Development",
                "Product Management",
                "Project Management",
                "Quality Assurance",
                "Software Development",
                "Web Development",
              ]}
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <TextareaField
              placeholder="Job description..."
              icon={<GrCopy />}
              label="Job Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <SelectField
              label="Job Type"
              icon={<FaBusinessTime />}
              name="job_type"
              options={[
                "Full-time",
                "Part-time",
                "Contractual",
                "Intern",
                "Freelance",
              ]}
              value={formData.job_type}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <SelectField
              label="Workdays"
              name="workdays"
              icon={<MdTimelapse />}
              options={["Monday to Friday", "Sunday to Thursday", "Flexible"]}
              value={formData.workdays}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <SelectField
              label="Work Hours"
              name="work_hours"
              icon={<GiPlayerTime />}
              options={[
                "9:00 AM - 5:00 PM",
                "9:00 AM to 6:00 PM",
                "9:30 AM - 5:30 PM",
                "10:00 AM to 6:00 PM",
                "Flexible",
                "Variable",
                "Project-based",
              ]}
              value={formData.work_hours}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <SelectField
              label="Job Location"
              icon={<FaLocationDot />}
              name="job_location"
              options={["Hybrid", "On-site", "Remote"]}
              value={formData.job_location}
              onChange={handleChange}
            />
          </div>

          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex items-center"><TbGraphFilled className="mr-2 w-4 h-4" />Experience (in years)</label>
            <input
              type="number"
              value={formData.experience}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  experience: e.target.value
                    ? parseInt(e.target.value, 10)
                    : "",
                }))
              }
              className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full ps-10 p-2.5 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
              placeholder="Enter experience in years"
            />
          </div>
          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex gap-2 items-center"><FaMoneyCheckAlt />Minimum Salary</label>
            <input
              type="number"
              value={formData.min_salary}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  min_salary: e.target.value
                    ? parseInt(e.target.value, 10)
                    : "", // Ensures it's a number
                }))
              }
              className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full ps-10 p-2.5 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
              placeholder="Enter minimum salary"
            />
          </div>
          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex gap-2 items-center"><FaMoneyCheckAlt />Maximum Salary</label>
            <input
              type="number"
              value={formData.max_salary}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  max_salary: e.target.value
                    ? parseInt(e.target.value, 10)
                    : "",
                }))
              }
              className=" bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full ps-10 p-2.5 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
              placeholder="Enter maximum salary"
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Posted Date"
              icon={<FaCalendarDay />}
              type="date"
              name="postedDate"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Last Date to Apply"
              icon={<FaCalendar />}
              type="date"
              name="lastDateToApply"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <DefaultInput
              label="Education"
              type="text"
              icon={<PiBookOpenBold />}
              placeholder="Enter Required Education"
              name="education"
              onChange={handleChange}
            />
          </div>

          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex items-center gap-2"><FaRegListAlt />Responsibilities</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={responsibilitie}
                onChange={(e) => setResponsibilitie(e.target.value)}
                className="w-full bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
                placeholder="Add responsibilities"
              />
              <button
                type="button"
                onClick={handleAddResponsibilities}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.responsibilities.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex items-center gap-2"><FaNoteSticky />Requirement</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="w-full bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
                placeholder="Add requirements"
              />
              <button
                type="button"
                onClick={handleAddRequirement}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.requirements.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 col-span-6">
            {/* Benefits Section */}
            <label className="font-semibold flex items-center gap-2"><FaGetPocket />Benefits</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={benefit}
                onChange={(e) => setBenefit(e.target.value)}
                className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
                placeholder="Add benefits"
              />
              <button
                type="button"
                onClick={handleAddBenefit}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {formData.benefits.map((b, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{b},</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 col-span-6">
            {/* Appliers Section */}
            <label className="font-semibold flex items-center gap-2"><IoPeopleSharp />Appliers</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={applier}
                onChange={(e) => setApplier(e.target.value)}
                className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
                placeholder="Add applier"
              />
              <button
                type="button"
                onClick={handleAddApplier}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {formData.appliers.map((c, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{c},</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 col-span-6">
            <label className="font-semibold flex items-center gap-2"><FaTags />Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
                placeholder="Add tags"
              />
              <button
                type="button"
                onClick={handleAddTags}
                className="btn bg-blue text-white"
              >
                Add
              </button>
            </div>
            <div className="flex gap-2">
              {formData.tags.map((a, index) => (
                <div key={index} className="text-gray text-12">
                  <p>{a} ,</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-6">
          <button
              type="submit"
              className="w-full py-3 bg-blue text-white rounded-md hover:bg-darkBlue transition"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  <FiSend className="inline mr-2" />
                  Submit Job
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
