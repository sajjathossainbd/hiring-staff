import { useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import CandidateCard from "./../../components/candidate/CandidateCard";
import { BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function CandidatesListing() {
  const candidates = [
    {
      name: "John Doe",
      language: "Python",
      ratings: 4.7,
      about_me:
        "Passionate Python developer with over 5 years of experience in building scalable applications.",
      skills: ["App Development", "Adobe XD", "Figma", "Django"],
      location: "New York, USA",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Sara White",
      language: "JavaScript",
      ratings: 4.5,
      about_me:
        "Expert in frontend development using React and backend with Node.js.",
      skills: ["App Development", "Figma", "Tailwind CSS", "Node.js"],
      location: "London, UK",
      charge_per_hour: 45,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Rahul Sharma",
      language: "Java",
      ratings: 4.9,
      about_me:
        "Senior Java developer with a deep understanding of enterprise-level applications.",
      skills: ["Spring Boot", "Adobe Illustrator", "Microservices"],
      location: "Bangalore, India",
      charge_per_hour: 60,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Davis",
      language: "PHP",
      ratings: 4.6,
      about_me:
        "Full-stack PHP developer with extensive knowledge of Laravel and modern web technologies.",
      skills: ["App Development", "Figma", "Adobe Photoshop", "Laravel"],
      location: "Sydney, Australia",
      charge_per_hour: 40,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Mohammed Ali",
      language: "C#",
      ratings: 4.8,
      about_me:
        "Experienced C# developer specializing in desktop applications and game development.",
      skills: ["App Development", "Unity 3D", "Adobe Premiere Pro"],
      location: "Dubai, UAE",
      charge_per_hour: 55,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Li Wei",
      language: "Python",
      ratings: 4.7,
      about_me:
        "Python and AI enthusiast with a focus on machine learning models and data science.",
      skills: ["App Development", "TensorFlow", "Figma", "Adobe XD"],
      location: "Shanghai, China",
      charge_per_hour: 52,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Olga Petrova",
      language: "Ruby",
      ratings: 4.6,
      about_me:
        "Ruby on Rails developer with over 6 years of experience in web app development.",
      skills: ["App Development", "Figma", "Adobe Illustrator", "PostgreSQL"],
      location: "Moscow, Russia",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Carlos Mendoza",
      language: "PHP",
      ratings: 4.4,
      about_me:
        "Backend PHP developer specializing in RESTful APIs and database management.",
      skills: ["App Development", "Adobe XD", "Laravel", "MySQL"],
      location: "Mexico City, Mexico",
      charge_per_hour: 42,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Akira Tanaka",
      language: "JavaScript",
      ratings: 4.5,
      about_me:
        "Frontend developer focused on creating engaging user interfaces using Vue.js and React.",
      skills: ["App Development", "Adobe XD", "Figma", "React", "Vue.js"],
      location: "Tokyo, Japan",
      charge_per_hour: 48,
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Fatima Hassan",
      language: "Python",
      ratings: 4.9,
      about_me:
        "Python developer with expertise in data analysis, visualization, and automation.",
      skills: ["App Development", "Pandas", "Figma", "Adobe Premiere Pro"],
      location: "Cairo, Egypt",
      charge_per_hour: 50,
      img: "https://via.placeholder.com/150",
    },
  ];

  const alphabets = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
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
    <div className="container mx-auto px-2">
      <div className="bg-bgLightBlue p-12 py-12 space-y-6">
        <SectionTitle
          title={"Browse Candidates"}
          subTitle={
            "Browse top-rated professionals across various skills and locations, tailored to meet your project needs"
          }
        />
        <div className="bg-white border border-lightGray rounded-md p-2 flex flex-wrap justify-center">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`m-1 w-8 h-8 text-14 rounded-full hover:bg-softLightBlue ${
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

      <div className="flex justify-end mt-10 gap-2">
        <select
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="border border-lightGray px-2 py-1 rounded"
        >
          <option value="3">3 per page</option>
          <option value="6">6 per page</option>
          <option value="9">9 per page</option>
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
      <hr className="text-lightGray mt-1" />

      {/* Candidate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
        {displayedCandidates.length > 0 ? (
          displayedCandidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
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
