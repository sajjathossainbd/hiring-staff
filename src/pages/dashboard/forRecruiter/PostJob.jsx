import { useEffect, useState } from "react";
import DefaultInput from "../shared/DefaultInput";
import TinnyHeading from "../shared/TinnyHeading";
import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axios";
import useCurrentRecruiter from "../../../hooks/useCurrentRecruiter";

const PostJob = () => {
  const { currentRecruiter } = useCurrentRecruiter();
  const [candidateEmails, setCandidateEmails] = useState();

  useEffect(() => {
    axiosInstance.get("/users/candidate-emails").then((res) => {
      setCandidateEmails(res.data.candidateEmails);
    });
  }, []);

  const [formData, setFormData] = useState({
    company_email: "",
    company_id: "",
    jobTitle: "",
    category: "",
    description: "",
    job_type: "",
    job_location: "",
    min_salary: "",
    max_salary: "",
    postedDate: "",
    lastDateToApply: "",
    requirements: "",
    responsibilities: "",
    education: "",
    tags: "",
    status: "pending",
    candidateEmails
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      candidateEmails: candidateEmails,
    }));
  }, [candidateEmails]);

  useEffect(() => {
    if (currentRecruiter?.email) {
      setFormData((prevData) => ({
        ...prevData,
        company_email: currentRecruiter.email,
      }));
    }
  }, [currentRecruiter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/jobs", formData);
      if (res.data.insertId) {
        toast.success("Job submitted successfully");
        e.target.reset();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
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
              type="text"
              placeholder="Enter Job Title"
              name="jobTitle"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <DefaultInput
              label="Company ID"
              type="text"
              placeholder="Enter Company ID"
              name="company_id"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <DefaultInput
              label="Category"
              type="text"
              placeholder="Enter Category"
              name="category"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <textarea
              name="description"
              placeholder="Enter Job Description"
              onChange={handleChange}
              className="w-full h-32 p-3 rounded-md border bg-bgLightWhite dark:bg-darkBlue dark:border-blue"
            ></textarea>
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Job Type"
              type="text"
              placeholder="e.g., Full-time, Part-time"
              name="job_type"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Job Location"
              type="text"
              placeholder="e.g., Hybrid, Remote"
              name="job_location"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Min Salary"
              type="number"
              placeholder="Enter Minimum Salary"
              name="min_salary"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Max Salary"
              type="number"
              placeholder="Enter Maximum Salary"
              name="max_salary"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Posted Date"
              type="date"
              name="postedDate"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6 md:col-span-3">
            <DefaultInput
              label="Last Date to Apply"
              type="date"
              name="lastDateToApply"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <textarea
              name="requirements"
              placeholder="Enter Requirements"
              onChange={handleChange}
              className="w-full h-32 p-3 rounded-md border bg-bgLightWhite dark:bg-darkBlue dark:border-blue"
            ></textarea>
          </div>

          <div className="col-span-6">
            <textarea
              name="responsibilities"
              placeholder="Enter Responsibilities"
              onChange={handleChange}
              className="w-full h-32 p-3 rounded-md border bg-bgLightWhite dark:bg-darkBlue dark:border-blue"
            ></textarea>
          </div>

          <div className="col-span-6">
            <DefaultInput
              label="Education"
              type="text"
              placeholder="Enter Required Education"
              name="education"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <DefaultInput
              label="Tags"
              type="text"
              placeholder="Enter Tags (comma separated)"
              name="tags"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue text-white rounded-md hover:bg-darkBlue transition"
            >
              <FiSend className="inline mr-2" />
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
