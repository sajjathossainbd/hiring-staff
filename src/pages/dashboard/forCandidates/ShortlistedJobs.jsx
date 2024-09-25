import {
  FaMapMarkerAlt,
  FaBookmark,
  FaEye,
  FaCheck,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { GoBookmark } from "react-icons/go";

const ShortlistedJobs = () => {
  const jobs = [
    {
      jobTitle: "Assistant Editor",
      company: "Segment",
      location: "United Kingdom",
      salary: "25k - 35k",
      tags: ["Full Time", "Urgent", "Private"],
      logoUrl: "https://via.placeholder.com/50",
    },
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
      <h3 className="">Shortlisted jobs</h3>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {jobs.map((job, idx) => (
          <div key={idx} className=" shadow-lg rounded-lg p-6 ">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <img
                  src={job.logoUrl}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-2">
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

              <GoBookmark className=" hover:text-blue cursor-pointer" />
            </div>

            <div className="mt-4 text-12 flex space-x-2">
              <span className="bg-red-100 text-red-500  px-3 py-1 rounded-full">
                {job.tags[0]}
              </span>
              <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full">
                {job.tags[1]}
              </span>
              <span className="bg-bgLightBlue text-lightBlue px-3 py-1 rounded-full">
                {job.tags[2]}
              </span>
            </div>

            <div className="mt-4 flex space-x-4 text-gray">
              <FaEye className="hover:text-blue cursor-pointer" />
              <FaCheck className="hover:text-green-500 cursor-pointer" />
              <FaTimes className="hover:text-red-500 cursor-pointer" />
              <FaTrash className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortlistedJobs;
