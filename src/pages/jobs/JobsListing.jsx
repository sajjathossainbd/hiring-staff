import BlogSection from "../../components/home/BlogSection";
import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import SearchByFilter from "../../components/shared/SearchByFilter";

function JobsListing() {
  const jobPostArray = [
    {
      position: "Frontend Developer",
      type: "Part Time",
      posted: "2 years ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      company: "Jthemes Team",
      skills: ["Figma", "Photoshop", "Illustrator"],
      experience: "5+ years",
      education: "Bachelor's Degree in Design",
    },
    {
      position: "Backend Developer",
      type: "Full Time",
      posted: "1 year ago",
      description: "Experience with Node.js and Express required.",
      company: "Tech Innovators",
      skills: ["Node.js", "Express", "MongoDB"],
      experience: "3+ years",
      education: "Bachelor's in Computer Science",
    },
    {
      position: "UI/UX Designer",
      type: "Contract",
      posted: "3 months ago",
      description:
        "Strong visual design skills with a good understanding of user-centered design.",
      company: "Creative Solutions",
      skills: ["Adobe XD", "Sketch", "Wireframing"],
      experience: "2+ years",
      education: "Bachelor's Degree in Design",
    },
    {
      position: "Full Stack Developer",
      type: "Freelance",
      posted: "6 months ago",
      description: "Proficient in both frontend and backend technologies.",
      company: "DevX Studio",
      skills: ["React", "Node.js", "MongoDB"],
      experience: "4+ years",
      education: "Bachelor's in Software Engineering",
    },
    {
      position: "Product Manager",
      type: "Full Time",
      posted: "1 year ago",
      description:
        "Experience in managing teams and developing product roadmaps.",
      company: "Digital Ventures",
      skills: ["Agile", "Scrum", "Product Roadmap"],
      experience: "6+ years",
      education: "MBA",
    },
    {
      position: "Data Analyst",
      type: "Part Time",
      posted: "4 months ago",
      description: "Proficient in data visualization and statistical analysis.",
      company: "Insight Analytics",
      skills: ["Python", "Tableau", "SQL"],
      experience: "3+ years",
      education: "Bachelor's in Statistics",
    },
    {
      position: "DevOps Engineer",
      type: "Full Time",
      posted: "8 months ago",
      description: "Expertise in CI/CD pipelines and cloud services.",
      company: "CloudTech",
      skills: ["AWS", "Docker", "Kubernetes"],
      experience: "5+ years",
      education: "Bachelor's in IT",
    },
    {
      position: "Mobile App Developer",
      type: "Contract",
      posted: "2 weeks ago",
      description:
        "Proficient in developing cross-platform mobile applications.",
      company: "App Masters",
      skills: ["React Native", "Flutter", "Swift"],
      experience: "2+ years",
      education: "Bachelor's in Computer Science",
    },
    {
      position: "Project Manager",
      type: "Full Time",
      posted: "9 months ago",
      description: "Experience in managing large-scale software projects.",
      company: "Enterprise Solutions",
      skills: ["JIRA", "Project Planning", "Risk Management"],
      experience: "7+ years",
      education: "PMP Certification",
    },
    {
      position: "Software Tester",
      type: "Full Time",
      posted: "5 months ago",
      description: "Expert in manual and automated testing.",
      company: "Quality Assurance Inc.",
      skills: ["Selenium", "Test Automation", "Jenkins"],
      experience: "4+ years",
      education: "Bachelor's in Information Technology",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="lg:py-16 lg:px-0 px-3 py-10 bg-bgLightWhite flex flex-col items-center rounded-3xl">
          <div className="text-center pb-6">
            <h3>
              <span className="text-blue">22 Jobs</span> Available Now
            </h3>
            <p className="max-w-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, atque delectus molestias quis
            </p>
          </div>
          {/* search filter */}
          <SearchByFilter />
        </div>
        <div className="pb-10 mt-20">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
            {jobPostArray.map((job, index) => (
              <JobCard
                key={index}
                job_title={job.type}
                job_type={job.position}
                job_post_time={job.posted}
                job_description={job.description}
              />
            ))}
          </div>
        </div>
        {/* pagination */}
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
      {/* news and blogs */}
      <BlogSection />
      <NewsLetter />
    </>
  );
}

export default JobsListing;
