import { useState } from "react";
import teslaimage from "/src/assets/recruiter/tasla.svg";
import fireworksImage from "/src/assets/recruiter/firework.svg";
import Banner from "/src/assets/pricing/pricing-page-banner.png";

const RecruitersListing = () => {
  // State to track the selected alphabet
  const [selectedLetter, setSelectedLetter] = useState("");

  const recruiters = [
    {
      brandImage: teslaimage,
      brandName: "Tesla",
      ratings: 46,
      location: "Chicago, US",
      openJobs: 0,
    },
    {
      brandImage: fireworksImage,
      brandName: "Fireworks",
      ratings: 38,
      location: "Chicago, US",
      openJobs: 0,
    },
    {
      brandImage: teslaimage,
      brandName: "Aceable, Inc.",
      ratings: 50,
      location: "Chicago, US",
      openJobs: 0,
    },
    {
      brandImage: fireworksImage,
      brandName: "Ibotta, Inc.",
      ratings: 48,
      location: "Chicago, US",
      openJobs: 2,
    },
  ];

  // Alphabet array to display for filtering
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter recruiters based on selected letter
  const filteredRecruiters = selectedLetter
    ? recruiters.filter((recruiter) =>
        recruiter.brandName.toUpperCase().startsWith(selectedLetter)
      )
    : recruiters;

  return (
    <div className="container mx-auto p-4">
      {/* Alphabet Filter */}
      <div>
        <div
          className="bg-cover bg-center mx-8 my-10"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="relative container mx-auto flex flex-col lg:flex-col gap-3 items-center justify-center">
            <div>
              <h3 className="flex justify-center">Browse Recruiters</h3>
              <p>Browse through recruiters by name and see who's hiring</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded text-14">
              <div className="flex justify-center space-x-2 mb-4">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    className={`px-4 py-2 rounded-lg ${
                      selectedLetter === letter
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedLetter(letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display filtered recruiters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecruiters.map((recruiter, index) => (
          <div
            key={index}
            className="w-5/6 p-4 border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF] shadow-md rounded-lg mx-auto"
          >
            <img
              src={recruiter.brandImage}
              alt={recruiter.brandName}
              className="w-20 h-20 mx-auto mb-4 pt-8"
            />
            <h3 className="text-xl font-semibold text-center text-darkBlue hover:text-blue">
              {recruiter.brandName}
            </h3>
            <div className="flex justify-center items-center mt-2">
              <div className="text-yellow-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`text-xl ${
                      index < recruiter.ratings / 10
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">({recruiter.ratings})</span>
            </div>
            <p className="text-sm text-center text-gray-600 mt-2">
              {recruiter.location}
            </p>
            <div className="mt-8 flex justify-center mb-8">
              <button className="bg-[#E0E6F7] hover:text-blue p-3 rounded-md text-darkBlue font-medium transition-all duration-500 text-14">
                {recruiter.openJobs > 0
                  ? `${recruiter.openJobs} Open Jobs`
                  : "No Open Job"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitersListing;
