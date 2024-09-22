import { useState } from "react";
import teslaimage from "/src/assets/recruiter/tasla.svg";
import fireworksImage from "/src/assets/recruiter/firework.svg";
import Banner from "/src/assets/pricing/pricing-page-banner.png";
import RecruiterCard from "../../components/recruiter/RecruiterCard";

const RecruitersListing = () => {
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

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredRecruiters = selectedLetter
    ? recruiters.filter((recruiter) =>
        recruiter.brandName.toUpperCase().startsWith(selectedLetter)
      )
    : recruiters;

  return (
    <div className="container">
      <div
        className="bg-cover bg-center py-10 rounded-lg mt-4"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="relative container mx-auto flex flex-col lg:flex-col gap-3 items-center justify-center">
          <div>
            <h3 className="flex justify-center">Browse Recruiters</h3>
            <p>Browse through recruiters by name and see whos hiring</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded text-14">
            <div className="flex flex-wrap gap-4 justify-center space-x-2 mt-4">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  className={`px-4 py-2 rounded-lg ${
                    selectedLetter === letter
                      ? "bg-blue text-white"
                      : "bg-lightGray text-gray-800 hover:bg-gray-300"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {filteredRecruiters.map((recruiter, index) => (
          <RecruiterCard key={index} {...recruiter} />
        ))}
      </div>
    </div>
  );
};

export default RecruitersListing;
