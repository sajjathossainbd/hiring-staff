import { Link } from "react-router-dom";
import BlogSection from "../../components/home/BlogSection";
import NewsLetter from "../../components/home/NewsLetter";
import JobCard from "../../components/shared/JobCard";
import SearchByFilter from "../../components/shared/SearchByFilter";

function JobsListing() {
  const jobPostArray = [
    {
      id: 1,
      position: "Frontend Developer",
      type: "Part Time",
      posted: "2 years ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      company: "Jthemes Team",
      skills: ["Figma", "Photoshop", "Illustrator"],
      experience: "5+ years",
      education: "Bachelor's Degree in Design",
      image:
        "https://t4.ftcdn.net/jpg/05/14/20/47/360_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg",
    },
    {
      id: 2,
      position: "Backend Developer",
      type: "Full Time",
      posted: "1 year ago",
      description: "Experience with Node.js and Express required.",
      company: "Tech Innovators",
      skills: ["Node.js", "Express", "MongoDB"],
      experience: "3+ years",
      education: "Bachelor's in Computer Science",
      image:
        "https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg",
    },
    {
      id: 3,
      position: "UI/UX Designer",
      type: "Contract",
      posted: "3 months ago",
      description:
        "Strong visual design skills with a good understanding of user-centered design.",
      company: "Creative Solutions",
      skills: ["Adobe XD", "Sketch", "Wireframing"],
      experience: "2+ years",
      education: "Bachelor's Degree in Design",
      image:
        "https://c8.alamy.com/comp/KEHEHH/portrait-of-diverse-business-people-in-office-KEHEHH.jpg",
    },
    {
      id: 4,
      position: "Full Stack Developer",
      type: "Freelance",
      posted: "6 months ago",
      description: "Proficient in both frontend and backend technologies.",
      company: "DevX Studio",
      skills: ["React", "Node.js", "MongoDB"],
      experience: "4+ years",
      education: "Bachelor's in Software Engineering",
      image:
        "https://c8.alamy.com/comp/2RME2PB/smiling-business-people-talking-against-wall-in-office-2RME2PB.jpg",
    },
    {
      id: 5,
      position: "Product Manager",
      type: "Full Time",
      posted: "1 year ago",
      description:
        "Experience in managing teams and developing product roadmaps.",
      company: "Digital Ventures",
      skills: ["Agile", "Scrum", "Product Roadmap"],
      experience: "6+ years",
      education: "MBA",
      image:
        "https://c8.alamy.com/comp/2BR87BW/group-of-business-executives-tired-of-long-meeting-in-office-2BR87BW.jpg",
    },
    {
      id: 6,
      position: "Data Analyst",
      type: "Part Time",
      posted: "4 months ago",
      description: "Proficient in data visualization and statistical analysis.",
      company: "Insight Analytics",
      skills: ["Python", "Tableau", "SQL"],
      experience: "3+ years",
      education: "Bachelor's in Statistics",
      image:
        "https://c8.alamy.com/comp/BP6K22/business-executives-in-a-training-class-BP6K22.jpg",
    },
    {
      id: 7,
      position: "DevOps Engineer",
      type: "Full Time",
      posted: "8 months ago",
      description: "Expertise in CI/CD pipelines and cloud services.",
      company: "CloudTech",
      skills: ["AWS", "Docker", "Kubernetes"],
      experience: "5+ years",
      education: "Bachelor's in IT",
      image:
        "https://c8.alamy.com/comp/2J0X1Y7/smiling-young-workers-sitting-at-office-desk-talking-and-discussing-ideas-at-briefing-at-workplace-2J0X1Y7.jpg",
    },
    {
      id: 8,
      position: "Mobile App Developer",
      type: "Contract",
      posted: "2 weeks ago",
      description:
        "Proficient in developing cross-platform mobile applications.",
      company: "App Masters",
      skills: ["React Native", "Flutter", "Swift"],
      experience: "2+ years",
      education: "Bachelor's in Computer Science",
      image:
        "https://c8.alamy.com/comp/KTH7PA/director-of-company-having-business-meeting-with-his-staff-KTH7PA.jpg",
    },
    {
      id: 9,
      position: "Project Manager",
      type: "Full Time",
      posted: "9 months ago",
      description: "Experience in managing large-scale software projects.",
      company: "Enterprise Solutions",
      skills: ["JIRA", "Project Planning", "Risk Management"],
      experience: "7+ years",
      education: "PMP Certification",
      image:
        "https://c8.alamy.com/comp/2CF5FYT/successful-team-leader-and-business-owner-leading-informal-in-business-meeting-2CF5FYT.jpg",
    },
    {
      id: 10,
      position: "Software Tester",
      type: "Full Time",
      posted: "5 months ago",
      description: "Expert in manual and automated testing.",
      company: "Quality Assurance Inc.",
      skills: ["Selenium", "Test Automation", "Jenkins"],
      experience: "4+ years",
      education: "Bachelor's in Information Technology",
      image:
        "https://c8.alamy.com/comp/2BWE72D/serious-confident-african-american-businesswoman-leading-corporate-meeting-2BWE72D.jpg",
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
              <Link key={index} to={`/job-details/${job.id}}`}>
                {" "}
                <JobCard
                  job_title={job.position}
                  job_type={job.type}
                  job_post_time={job.posted}
                  job_description={job.description}
                />
              </Link>
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
