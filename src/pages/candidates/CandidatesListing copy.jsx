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
      experience_years: 5,
      expected_salary: "$80k - $90k",
      education_level: "Bachelor's Degree in Computer Science",
      phone: "+1 555-1234",
      email: "johndoe@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-1.svg",
      skills_percentage: {
        "App Development": "90%",
        "Adobe XD": "80%",
        Figma: "85%",
        Django: "92%",
      },
      experience: [
        {
          company: "TechCorp",
          role: "Senior Python Developer",
          duration: "3 years",
          description:
            "Led a team of developers in building scalable backend systems.",
        },
        {
          company: "Innovatech",
          role: "Junior Developer",
          duration: "2 years",
          description: "Worked on multiple Python-based applications.",
        },
      ],
      connections: [
        {
          name: "Sara White",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Rahul Sharma",
          relation: "Mentor",
          connection_date: "2021-02-10",
        },
      ],
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
      experience_years: 4,
      expected_salary: "$70k - $80k",
      education_level: "Master's Degree in Software Engineering",
      phone: "+44 20 7946 0958",
      email: "sarawhite@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-2.svg",
      skills_percentage: {
        "App Development": "85%",
        Figma: "75%",
        "Tailwind CSS": "80%",
        "Node.js": "78%",
      },
      experience: [
        {
          company: "WebSolutions",
          role: "Frontend Developer",
          duration: "2 years",
          description: "Created responsive web applications using React.",
        },
        {
          company: "CodeBase",
          role: "Intern",
          duration: "2 years",
          description: "Assisted in developing backend services with Node.js.",
        },
      ],
      connections: [
        {
          name: "John Doe",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Rahul Sharma",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
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
      experience_years: 7,
      expected_salary: "$85k - $95k",
      education_level: "Bachelor's Degree in Information Technology",
      phone: "+91 9876543210",
      email: "rahulsharma@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-3.svg",
      skills_percentage: {
        "Spring Boot": "90%",
        "Adobe Illustrator": "75%",
        Microservices: "80%",
      },
      experience: [
        {
          company: "GlobalTech",
          role: "Lead Java Developer",
          duration: "5 years",
          description:
            "Architected and developed large-scale Java applications.",
        },
        {
          company: "Innovatech",
          role: "Java Developer",
          duration: "2 years",
          description: "Worked on developing RESTful services.",
        },
      ],
      connections: [
        { name: "John Doe", relation: "Mentor", connection_date: "2019-05-15" },
        {
          name: "Sara White",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
      ],
    },
    {
      id: 4,
      name: "Emily Davis",
      language: "PHP",
      ratings: 4.6,
      about_me:
        "Full-stack PHP developer with extensive knowledge of Laravel and modern web technologies.",
      skills: ["App Development", "Figma", "Adobe Photoshop", "Laravel"],
      area: "Sydney, Australia",
      charge_per_hour: 40,
      experience_years: 4,
      expected_salary: "$60k - $70k",
      education_level: "Bachelor's Degree in Computer Engineering",
      phone: "+61 412 345 678",
      email: "emilydavis@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-4.svg",
      skills_percentage: {
        "App Development": "85%",
        Figma: "75%",
        "Adobe Photoshop": "70%",
        Laravel: "80%",
      },
      experience: [
        {
          company: "CreativeSolutions",
          role: "PHP Developer",
          duration: "4 years",
          description: "Developed full-stack web applications using Laravel.",
        },
        {
          company: "DesignLab",
          role: "Intern",
          duration: "1 year",
          description: "Assisted in UI/UX design and development.",
        },
      ],
      connections: [
        {
          name: "John Doe",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Rahul Sharma",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
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
      experience_years: 6,
      expected_salary: "$75k - $85k",
      education_level: "Bachelor's Degree in Computer Science",
      phone: "+971 50 123 4567",
      email: "mohammedali@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-5.svg",
      skills_percentage: {
        "App Development": "90%",
        "Unity 3D": "85%",
        "Adobe Premiere Pro": "80%",
      },
      experience: [
        {
          company: "GameStudio",
          role: "Game Developer",
          duration: "4 years",
          description: "Developed games using Unity 3D and C#.",
        },
        {
          company: "TechVision",
          role: "Software Developer",
          duration: "2 years",
          description: "Worked on desktop applications using C#.",
        },
      ],
      connections: [
        {
          name: "Emily Davis",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Sara White",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
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
      experience_years: 5,
      expected_salary: "$82k - $92k",
      education_level: "Master's Degree in Data Science",
      phone: "+86 21 1234 5678",
      email: "liwei@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-6.svg",
      skills_percentage: {
        "App Development": "88%",
        TensorFlow: "90%",
        Figma: "75%",
        "Adobe XD": "80%",
      },
      experience: [
        {
          company: "DataSolutions",
          role: "Data Scientist",
          duration: "3 years",
          description: "Developed machine learning models for data analysis.",
        },
        {
          company: "AI Innovations",
          role: "Intern",
          duration: "2 years",
          description: "Assisted in AI model development.",
        },
      ],
      connections: [
        {
          name: "Mohammed Ali",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Rahul Sharma",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
    },
    {
      id: 7,
      name: "Mia Thompson",
      language: "Swift",
      ratings: 4.6,
      about_me:
        "Skilled iOS developer with a knack for creating beautiful, user-friendly applications.",
      skills: ["App Development", "Swift", "Figma", "Sketch"],
      area: "San Francisco, USA",
      charge_per_hour: 58,
      experience_years: 5,
      expected_salary: "$90k - $100k",
      education_level: "Bachelor's Degree in Software Engineering",
      phone: "+1 415-555-0123",
      email: "miathompson@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-7.svg",
      skills_percentage: {
        "App Development": "90%",
        Swift: "85%",
        Figma: "80%",
        Sketch: "75%",
      },
      experience: [
        {
          company: "AppMasters",
          role: "iOS Developer",
          duration: "4 years",
          description: "Created and maintained iOS applications.",
        },
        {
          company: "TechHouse",
          role: "Intern",
          duration: "1 year",
          description: "Worked on app design and development.",
        },
      ],
      connections: [
        {
          name: "John Doe",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Emily Davis",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
    },
    {
      id: 8,
      name: "Oliver Brown",
      language: "Go",
      ratings: 4.9,
      about_me:
        "Go developer with expertise in cloud computing and microservices architecture.",
      skills: ["App Development", "Microservices", "Docker"],
      area: "Berlin, Germany",
      charge_per_hour: 62,
      experience_years: 6,
      expected_salary: "$95k - $105k",
      education_level: "Bachelor's Degree in Computer Science",
      phone: "+49 30 123456",
      email: "oliverbrown@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-8.svg",
      skills_percentage: {
        "App Development": "90%",
        Microservices: "88%",
        Docker: "85%",
      },
      experience: [
        {
          company: "CloudTech",
          role: "Senior Go Developer",
          duration: "4 years",
          description: "Developed cloud-based solutions using Go.",
        },
        {
          company: "DevHub",
          role: "Software Engineer",
          duration: "2 years",
          description: "Worked on microservices architecture.",
        },
      ],
      connections: [
        {
          name: "Li Wei",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Sara White",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
    },
    {
      id: 9,
      name: "Sophia Johnson",
      language: "Ruby",
      ratings: 4.8,
      about_me:
        "Ruby on Rails developer with a strong focus on building web applications.",
      skills: ["Ruby on Rails", "JavaScript", "HTML/CSS"],
      area: "Toronto, Canada",
      charge_per_hour: 54,
      experience_years: 5,
      expected_salary: "$70k - $80k",
      education_level: "Bachelor's Degree in Web Development",
      phone: "+1 416-123-4567",
      email: "sophiajohnson@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-9.svg",
      skills_percentage: {
        "Ruby on Rails": "90%",
        JavaScript: "85%",
        "HTML/CSS": "88%",
      },
      experience: [
        {
          company: "WebDevelopers Inc.",
          role: "Ruby on Rails Developer",
          duration: "3 years",
          description:
            "Developed and maintained web applications using Ruby on Rails.",
        },
        {
          company: "Frontend Masters",
          role: "Web Developer",
          duration: "2 years",
          description: "Created responsive web interfaces.",
        },
      ],
      connections: [
        {
          name: "Oliver Brown",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Emily Davis",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
    },
    {
      id: 10,
      name: "Liam Smith",
      language: "C++",
      ratings: 4.4,
      about_me:
        "C++ developer with experience in game development and embedded systems.",
      skills: ["C++", "Unreal Engine", "OpenGL"],
      area: "Los Angeles, USA",
      charge_per_hour: 56,
      experience_years: 6,
      expected_salary: "$80k - $90k",
      education_level: "Bachelor's Degree in Computer Engineering",
      phone: "+1 213-555-0199",
      email: "liamsmith@example.com",
      img: "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/candidate-10.svg",
      skills_percentage: {
        "C++": "90%",
        "Unreal Engine": "85%",
        OpenGL: "80%",
      },
      experience: [
        {
          company: "GameDev Studios",
          role: "C++ Developer",
          duration: "4 years",
          description: "Designed and implemented games using C++.",
        },
        {
          company: "Embedded Solutions",
          role: "Software Engineer",
          duration: "2 years",
          description: "Worked on embedded systems applications.",
        },
      ],
      connections: [
        {
          name: "Liam Smith",
          relation: "Colleague",
          connection_date: "2020-08-12",
        },
        {
          name: "Mia Thompson",
          relation: "Friend",
          connection_date: "2021-02-10",
        },
      ],
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
        <div className="bg-bgLightWhite dark:bg-darkBlue rounded-md p-1 md:p-3 flex flex-wrap justify-center">
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`m-1 w-8 h-8 text-18 rounded-full hover:bg-softLightBlue ${
                selectedLetter === letter
                  ? "bg-bgLightBlue text-blue dark:bg-blue dark:text-white"
                  : " text-lightGray bg-white"
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
