import React, { useState } from "react";
import { CiLocationOn, CiViewBoard } from "react-icons/ci";
import {
  FaBriefcase,
  FaDollarSign,
  FaDownload,
  FaEnvelope,
  FaGraduationCap,
  FaLanguage,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { useLocation, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import PrimaryButton from "../../components/shared/PrimaryButton";
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
    area,
    charge_per_hour,
    img,
  } = candidate;
  const [activeTab, setActiveTab] = useState("about");
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h3 className=" text-gray mb-4">About Me</h3>
            <p className="mb-4">{about_me}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="">Programming</h4>

                <p>Python: 90%</p>
                <progress className="w-full" value="90" max="100"></progress>

                <p>Django: 85%</p>
                <progress className="w-full" value="85" max="100"></progress>

                <p>JavaScript: 75%</p>
                <progress className="w-full" value="75" max="100"></progress>
              </div>

              <div className="space-y-2">
                <h4 className="">Design</h4>

                <p>Adobe XD: 75%</p>
                <progress className="w-full" value="75" max="100"></progress>

                <p>Figma: 70%</p>
                <progress className="w-full" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        );
      case "recruitment":
        return (
          <div>
            <h3 className=" text-gray mb-4">Skills</h3>
            <p className="mb-4">
              Skills will be here <br />
              {skills}
            </p>
          </div>
        );
      case "people":
        return (
          <div>
            <h3 className=" text-gray mb-4">Work Experiencce</h3>
            <p className="mb-4">Experiences will be here</p>
          </div>
        );
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
          className="w-full h-full rounded-lg object-cover"
        />
        <div className="absolute -bottom-9 left-0 p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-20 h-20 border border-white rounded-full "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
        <div className="space-y-2">
          <div className="flex gap-6">
            <h3 className="">{name}</h3>
            <p className="flex text-18 items-center gap-2">
              <CiLocationOn /> <span className="">{area}</span>
            </p>
          </div>
          <h5 className="text-lightGray">{language}</h5>
          <div className="mt-1 flex gap-[1px] text-14 items-center">
            <StarRatings
              rating={ratings}
              starRatedColor="#ffd250"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="1px"
            />
            <p className="ml-2">{ratings}</p>
          </div>
        </div>
        <div>
          <button className="bg-blue text-white text-18 px-4 md:px-6 py-3 md:py-5 rounded flex items-center space-x-2">
            <FaDownload />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <nav className="flex space-x-4">
          <button
            className={`px-4 py-2 flex items-center gap-2 ${
              activeTab === "about"
                ? "border-2 border-gray text-black rounded-md"
                : "text-gray hover:text-black hover:border hover:border-gray rounded-md"
            }`}
            onClick={() => setActiveTab("about")}
          >
            <CiViewBoard /> About Us
          </button>
          <button
            className={`px-4 py-2 flex items-center gap-2 ${
              activeTab === "recruitment"
                ? "border-2 border-gray text-black rounded-md"
                : "text-gray hover:text-black hover:border hover:border-gray rounded-md"
            }`}
            onClick={() => setActiveTab("recruitment")}
          >
            <IoBagHandleOutline /> Recruitments
          </button>
          <button
            className={`px-4 py-2 flex items-center gap-2 ${
              activeTab === "people"
                ? "border-2 border-gray text-black rounded-md"
                : "text-gray hover:text-black hover:border hover:border-gray rounded-md"
            }`}
            onClick={() => setActiveTab("people")}
          >
            <IoPersonOutline /> People
          </button>
        </nav>
      </div>

      <hr className="text-lightGray mt-4" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1     mt-6">
        {/* Tab Content */}
        <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 bg-blue-200  ">
          {renderTabContent()}
        </div>

        {/* Overview Section */}
        <div className="lg:col-span-1 md:col-span-2 sm:col-span-1  mt-6 lg:mt-0 lg:pl-5">
          <div className=" border border-lightGray text-gray space-y-3 rounded-lg p-6 w-full">
            <h4 className=" ">Overview</h4>

            <hr className="text-lightGray" />

            <div className="flex items-center ">
              <FaBriefcase className="mr-2" />
              <div>
                <p className="">Experience</p>
                <p className="">12 Years</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaDollarSign className=" mr-2" />
              <div>
                <p className="">Expected Salary</p>
                <p className="">$26k - $30k</p>
              </div>
            </div>

            <div className="flex items-center ">
              <FaLanguage className="  mr-2" />
              <div>
                <p>Language</p>
                <p>English, German</p>
              </div>
            </div>

            <div className="flex items-center  ">
              <FaGraduationCap className="  mr-2" />
              <div>
                <p>Education Level</p>
                <p>Master Degree</p>
              </div>
            </div>

            <hr className="text-lightGray mt-4" />

            <div>
              <p className="mb-2">
                <FaMapMarkerAlt className="inline-block mr-2" />
                205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
              </p>
              <p className="mb-2">
                <FaPhoneAlt className="inline-block mr-2" />
                Phone: (123) 456-7890
              </p>
              <p className="mb-2">
                <FaEnvelope className="inline-block mr-2" />
                Email: contact@evara.com
              </p>
            </div>

            <PrimaryButton
              icon={<FaEnvelope className="mr-2" />}
              title={"Send Message"}
              className="px-4 py-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDetails;
