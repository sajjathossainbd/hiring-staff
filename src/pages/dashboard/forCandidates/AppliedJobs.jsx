import {
  FaMapMarkerAlt,
  FaEye,
  FaCheck,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { GoBookmark } from "react-icons/go";

const AppliedJobs = () => {
  const jobs = [
    {
      jobTitle: "Software Engineer",
      company: "TechCorp",
      location: "United States",
      salary: "80k - 100k",
      tags: ["Full Time", "Remote", "Urgent"],
      logoUrl: "https://via.placeholder.com/50",
    },
    {
      jobTitle: "Product Manager",
      company: "Innovate Labs",
      location: "Germany",
      salary: "65k - 85k",
      tags: ["Part Time", "On-site"],
      logoUrl: "https://via.placeholder.com/50",
    },
    {
      jobTitle: "Marketing Specialist",
      company: "MarketGen",
      location: "Australia",
      salary: "45k - 60k",
      tags: ["Contract", "Urgent"],
      logoUrl: "https://via.placeholder.com/50",
    },
    {
      jobTitle: "Data Scientist",
      company: "DataX Solutions",
      location: "Canada",
      salary: "95k - 120k",
      tags: ["Full Time", "Remote"],
      logoUrl: "https://via.placeholder.com/50",
    },
  ];
  return (
    <div>
      <h3>My Applied jobs</h3>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className=" shadow-md bg-bgLightBlue hover:-translate-y-1 duration-200 rounded-lg p-6 "
          >
            <div className="   ">
              <div className="flex items-center">
                <img
                  src={job.logoUrl}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <h5 className="">{job.jobTitle}</h5>
                  <div className="flex flex-wrap text-12 text-gray">
                    <span className="flex items-center mr-4 ">
                      <FaWarehouse className="mr-1 text-lightBlue" />{" "}
                      {job.company}
                    </span>
                    <span className="flex items-center mr-4">
                      <FaMapMarkerAlt className="mr-1 text-lightBlue" />{" "}
                      {job.location}
                    </span>
                    <span>
                      <span className="text-lightBlue">$ </span> {job.salary}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="text-12 flex space-x-2">
                <span className="bg-red-100 text-red-500  px-3 py-1 rounded-full">
                  {job.tags[0]}
                </span>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                  {job.tags[1]}
                </span>
                <span className="bg-lightText text-lightBlue px-3 py-1 rounded-full">
                  {job.tags[2]}
                </span>
              </div>

              <div className="flex space-x-4 text-gray">
                <FaTrash className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
