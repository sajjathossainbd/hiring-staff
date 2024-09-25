import { useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import CandidateCard from "./../../components/candidate/CandidateCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Helmet } from "react-helmet-async";

function CandidatesListing() {
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      language: "Python",
      ratings: 4.7,
      about_me:
        "Passionate Python developer with over 5 years of experience in building scalable applications.",
      skills: ["App Development", "Adobe XD", "Figma", "Django"],
      area: "New York, USA",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Sara White",
      language: "JavaScript",
      ratings: 4.5,
      about_me:
        "Expert in frontend development using React and backend with Node.js.",
      skills: ["App Development", "Figma", "Tailwind CSS", "Node.js"],
      area: "London, UK",
      charge_per_hour: 45,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      language: "Java",
      ratings: 4.9,
      about_me:
        "Senior Java developer with a deep understanding of enterprise-level applications.",
      skills: ["Spring Boot", "Adobe Illustrator", "Microservices"],
      area: "Bangalore, India",
      charge_per_hour: 60,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Davis",
      language: "PHP",
      ratings: 4.6,
      about_me:
        "Full-stack PHP  developer with extensive knowledge of Laravel and modern web technologies.",
      skills: ["App Development", "Figma", "Adobe Photoshop", "Laravel"],
      area: "Sydney, Australia",
      charge_per_hour: 40,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Mohammed Ali",
      language: "C#",
      ratings: 4.8,
      about_me:
        "Experienced C# developer specializing in desktop applications and game development.",
      skills: ["App Development", "Unity 3D", "Adobe Premiere Pro"],
      area: "Dubai, UAE",
      charge_per_hour: 55,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Li Wei",
      language: "Python",
      ratings: 4.7,
      about_me:
        "Python and AI enthusiast with a focus on machine learning models and data science.",
      skills: ["App Development", "TensorFlow", "Figma", "Adobe XD"],
      area: "Shanghai, China",
      charge_per_hour: 52,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Olga Petrova",
      language: "Ruby",
      ratings: 4.6,
      about_me:
        "Ruby on Rails developer with over 6 years of experience in web app development.",
      skills: ["App Development", "Figma", "Adobe Illustrator", "PostgreSQL"],
      area: "Moscow, Russia",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Carlos Mendoza",
      language: "PHP",
      ratings: 4.4,
      about_me:
        "Backend PHP developer specializing in RESTful APIs and database management.",
      skills: ["App Development", "Adobe XD", "Laravel", "MySQL"],
      area: "Mexico City, Mexico",
      charge_per_hour: 42,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Akira Tanaka",
      language: "JavaScript",
      ratings: 4.5,
      about_me:
        "Frontend developer focused on creating engaging user interfaces using Vue.js and React.",
      skills: ["App Development", "Adobe XD", "Figma", "React", "Vue.js"],
      area: "Tokyo, Japan",
      charge_per_hour: 48,
      img: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Fatima Hassan",
      language: "Python",
      ratings: 4.9,
      about_me:
        "Python developer with expertise in data analysis, visualization, and automation.",
      skills: ["App Development", "Pandas", "Figma", "Adobe Premiere Pro"],
      area: "Cairo, Egypt",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
  ];

  const alphabets = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("default");
  const [selectedLetter, setSelectedLetter] = useState("");

  const sortedCandidates = (() => {
    let filteredCandidates = candidates;

    if (selectedLetter) {
      filteredCandidates = candidates.filter((candidate) =>
        candidate.name.startsWith(selectedLetter)
      );
    }

    switch (sortBy) {
      case "latest":
        return [...filteredCandidates].sort((a, b) => b.ratings - a.ratings);
      case "title":
        return [...filteredCandidates].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      default:
        return filteredCandidates;
    }
  })();

  const pageCount = Math.ceil(sortedCandidates.length / itemsPerPage);
  const displayedCandidates = sortedCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Hiring Staff - Candidates</title>
      </Helmet>
      <div className="bg-bgLightBlue dark:bg-darkBlue p-4 md:px-24 md:py-8 space-y-6">
        <SectionTitle
          title={"Browse Candidates"}
          subTitle={
            "Browse top-rated professionals across various skills and locations, tailored to meet your project needs"
          }
        />
        <div className="bg-white rounded-md p-1 md:p-3 flex flex-wrap justify-center">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`m-1 w-8 h-8 text-18 rounded-full hover:bg-softLightBlue ${
                selectedLetter === letter
                  ? "bg-bgLightBlue text-blue"
                  : " text-lightGray"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row items-start md:items-center md:justify-between">
        <div>
          <p className="text-lightGray text-18">
            Showing{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              sortedCandidates.length
            )}
            – {Math.min(currentPage * itemsPerPage, sortedCandidates.length)} of{" "}
            {sortedCandidates.length} results
          </p>
        </div>
        <div className="flex md:justify-end mt-3 md:mt-0 gap-2">
          <select
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border border-lightGray px-2 py-1 rounded"
          >
            <option value="8">8 per page</option>
            <option value="16">16 per page</option>
            <option value="24">24 per page</option>
          </select>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-lightGray px-2 py-1 rounded "
          >
            <option value="default">Default</option>
            <option value="latest">Latest</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <hr className="text-lightGray mt-1" />

      {/* Candidate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
        {displayedCandidates.length > 0 ? (
          displayedCandidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} index={index} />
          ))
        ) : (
          <p className="text-center w-full">
            No candidates found for the selected letter.
          </p>
        )}
      </div>

      <div className="flex justify-between items-center py-4">
        <div className="flex">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-3 bg-bgLightBlue rounded-full mr-2"
          >
            <IoIosArrowBack className="text-blue" />
          </button>
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-3 hover:bg-bgLightBlue ml-2 rounded-full ${
                i + 1 === currentPage
                  ? "bg-bgLightBlue text-black"
                  : "text-gray"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="px-3 py-3 bg-bgLightBlue rounded-full ml-2"
          >
            <IoIosArrowForward className="text-blue" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidatesListing;
