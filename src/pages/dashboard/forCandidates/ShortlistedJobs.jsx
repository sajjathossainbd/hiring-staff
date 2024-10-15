import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { GoBookmark } from "react-icons/go";
import TinnyHeading from "../shared/TinnyHeading";

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
      <TinnyHeading
        title={"Shortlisted Jobs"}
        path={"shortlisted-jobs"}
        pathName={"Shortlisted Jobs"}
      />

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className=" shadow-md hover:-translate-y-1 duration-200 bg-bgLightBlue rounded-lg p-6 cursor-pointer"
          >
            <div className="flex justify-between items-start">
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

              <GoBookmark className="text-blue" />
            </div>

            <div className="mt-5 flex  flex-row   gap-5 items-center justify-between">
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
              <div className="  space-x-4 text-gray">
                <FaTrash className="hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortlistedJobs;
