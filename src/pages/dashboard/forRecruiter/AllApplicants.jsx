import { FaRegEye } from "react-icons/fa6";
import TinnyHeading from "../shared/TinnyHeading";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const AllApplicants = () => {
  const specialists = [
    {
      name: "Jonathon Ronan",
      title: "IT Specialist",
      country: "USA",
      type: "Part-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-4.jpg",
    },
    {
      name: "Emily Harrison",
      title: "Software Engineer",
      country: "Canada",
      type: "Full-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-6.jpg",
    },
    {
      name: "Michael Carter",
      title: "Web Developer",
      country: "UK",
      type: "Part-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-3.jpg",
    },
    {
      name: "Sophia Bennett",
      title: "Data Analyst",
      country: "Australia",
      type: "Full-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-1.jpg",
    },
    {
      name: "David Smith",
      title: "Network Administrator",
      country: "USA",
      type: "Part-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-8.jpg",
    },
    {
      name: "Linda Garcia",
      title: "UI/UX Designer",
      country: "Mexico",
      type: "Full-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-7.jpg",
    },
    {
      name: "Robert Johnson",
      title: "Cybersecurity Specialist",
      country: "USA",
      type: "Part-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-1.jpg",
    },
    {
      name: "Olivia Martinez",
      title: "Project Manager",
      country: "Spain",
      type: "Full-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-6.jpg",
    },
    {
      name: "James Wilson",
      title: "Cloud Engineer",
      country: "USA",
      type: "Part-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-5.jpg",
    },
    {
      name: "Ava Brown",
      title: "DevOps Engineer",
      country: "Germany",
      type: "Full-Time",
      image:
        "https://templates.envytheme.com/eeza/default/assets/images/applicants/applicants-2.jpg",
    },
  ];

  return (
    <div>
      <TinnyHeading
        title="All Applicants"
        path="all-applicants"
        pathName="All Applicants"
      />
      <div className="bg-softLightBlue py-6 lg:px-6 rounded-md">
        <h5>Applicants</h5>
        <hr className="my-6 text-lightGray" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {specialists.map((person, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col justify-between border border-lightGray rounded-lg hover:border-gray transition-all duration-200 lg:p-6 p-3 pb-6"
            >
              <div className="flex lg:flex-row flex-col gap-5">
                <img
                  className="lg:h-20 lg:w-20 rounded-md"
                  src={person.image}
                  alt={person.name}
                />
                <div className="flex flex-col gap-2 justify-center">
                  <span className="font-bold">{person.name}</span>
                  <span className="text-sm font-medium text-blue">
                    {person.title}
                  </span>
                  <div className="flex justify-between lg:gap-14 lg:pt-0 pt-1 items-center">
                    <span className="text-sm flex items-center gap-1">
                      <CiLocationOn />
                      {person.country}
                    </span>
                    <span className="text-sm flex gap-1 items-center">
                      <IoTimeOutline />
                      {person.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-2 lg:pt-0 pt-6">
                <div className="tooltip" data-tip="View">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <FaRegEye />
                  </button>
                </div>
                <div className="tooltip" data-tip="Approve">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <IoCheckmark />
                  </button>
                </div>
                <div className="tooltip" data-tip="Reject">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <RxCross2 />
                  </button>
                </div>
                <div className="tooltip" data-tip="Delete">
                  <button className="btn rounded-full text-blue hover:text-white hover:bg-blue">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApplicants;
