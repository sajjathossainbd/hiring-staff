import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
function CandidateDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { candidate } = location.state;
  const {
    
    name,
    language,
    ratings,
    about_me,
    skills,
    // location,
    charge_per_hour,
    img,
  } = candidate;
  const [activeTab, setActiveTab] = useState("about");
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="mb-4">
              Hello! I'm <strong>Floyd Miles</strong>, a Python Developer with
              over 10 years of experience. I specialize in developing scalable
              applications and have a passion for learning and improving my
              skills.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Programming</h3>
                <p>Python: 90%</p>
                <p>Django: 85%</p>
                <p>JavaScript: 75%</p>
              </div>
              <div>
                <h3 className="font-semibold">Design</h3>
                <p>Adobe XD: 75%</p>
                <p>Figma: 70%</p>
              </div>
            </div>
          </div>
        );
      case "recruitment":
        return <div>Recruitment Information Here</div>;
      case "people":
        return <div>People Information Here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto">
      {/* Header */}
      <div className="relative w-full h-48 md:h-64">
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-9 left-0 p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-20 h-20 rounded-full "
            />
            <div>
              <h1 className=" ">{name}</h1>
              <p className="">{language}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
          <FaDownload />
          <span>Download CV</span>
        </button>
      </div>

      {/* Tabs Navigation */}
      <div className="mt-6 border-b">
        <nav className="flex space-x-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "about"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About Us
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "recruitment"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("recruitment")}
          >
            Recruitments
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "people"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("people")}
          >
            People
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderTabContent()}</div>

      {/* Overview Section */}
      <div className="mt-10">
        <h3 className="font-semibold">Overview</h3>
        <div className="border p-4 rounded-lg">
          <p>
            <strong>Experience:</strong> 10 years
          </p>
          <p>
            <strong>Salary Expectation:</strong> $25k - $30k
          </p>
          <p>
            <strong>Languages:</strong> English, German
          </p>
          <p>
            <strong>Education Level:</strong> Master Degree
          </p>
          <p>
            <strong>Location:</strong> Chicago, IL
          </p>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetails;
