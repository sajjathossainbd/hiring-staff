import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// array

const array = [
  {
    id: 1,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-11.svg",
    location: "Bangladesh",
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
    id: 2,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-14.svg",
    location: "Bangladesh",
    position: "Wordpress Developer",
    type: "Part Time",
    posted: "2 years ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    company: "Jthemes Team",
    skills: ["Figma", "Photoshop", "Illustrator"],
    experience: "5+ years",
    education: "Bachelor's Degree in Design",
  },
  {
    id: 3,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-11.svg",
    location: "Bangladesh",
    position: "Full Stack Developer",
    type: "Part Time",
    posted: "2 years ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    company: "Jthemes Team",
    skills: ["Figma", "Photoshop", "Illustrator"],
    experience: "5+ years",
    education: "Bachelor's Degree in Design",
  },
  {
    id: 4,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-14.svg",
    location: "Bangladesh",
    position: "Shopify Developer",
    type: "Part Time",
    posted: "2 years ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    company: "Jthemes Team",
    skills: ["Figma", "Photoshop", "Illustrator"],
    experience: "5+ years",
    education: "Bachelor's Degree in Design",
  },
  {
    id: 5,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-11.svg",
    location: "Bangladesh",
    position: "Mern Stack Developer",
    type: "Part Time",
    posted: "2 years ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    company: "Jthemes Team",
    skills: ["Figma", "Photoshop", "Illustrator"],
    experience: "5+ years",
    education: "Bachelor's Degree in Design",
  },
  {
    id: 6,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-14.svg",
    location: "Bangladesh",
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
    id: 7,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-11.svg",
    location: "Bangladesh",
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
    id: 8,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-14.svg",
    location: "Bangladesh",
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
    id: 9,
    brandImage:
      "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2022/09/recruiter-11.svg",
    location: "Bangladesh",
    position: "Frontend Developer",
    type: "Part Time",
    posted: "2 years ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    company: "Jthemes Team",
    skills: ["Figma", "Photoshop", "Illustrator"],
    experience: "5+ years",
    education: "Bachelor's Degree in Design",
  },
];

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const JobDetails = () => {
  const { id } = useParams();
  const jobId = parseInt(id);

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
        "h4 visual design skills with a good understanding of user-centered design.",
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

  const dynamicJob = jobPostArray.find((item) => item.id === jobId);

  if (!dynamicJob) {
    return <p>Job not found</p>;
  }

  const center = [23.8103, 90.4125]; // Example coordinates (Dhaka)

  return (
    <div className="container">
      <div>
        <img
          className=" lg:h-[400px] rounded-3xl object-cover w-full mb-10 overflow-hidden"
          src={dynamicJob.image}
          alt={dynamicJob.position}
        />
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="lg:w-8/12 w-full">
            <h3 className="pt-4">{dynamicJob.position}</h3>
            <div className="flex gap-16 text-sm">
              <p>Type: {dynamicJob.type}</p>
              <p>Posted: {dynamicJob.posted}</p>
            </div>
            <hr className="border-0 h-px bg-lightGray mt-3 mb-12" />
            <h3 className="py-4">{`Welcome to the ${dynamicJob.company}`}</h3>
            <p>
              The <h4 className="inline-block">AliStudio Design team</h4>{" "}
              envisions creating a trusted platform that fosters productive and
              healthy enterprises in an ever-evolving digital landscape. As work
              patterns shift and the demand for organizational resilience grows,
              we seek a <h4 className="inline-block">{dynamicJob.position}</h4>{" "}
              who embodies creativity and a passion for illustrative design and
              typography.
            </p>
            <h3 className="py-4">Ideal Candidate Profile</h3>
            <ul>
              <li>
                Portfolio showcasing polished end-to-end customer journeys.
              </li>
              <li>
                5+ years of industry experience in interactive and/or visual
                design.
              </li>
              <li>
                Excellent interpersonal skills and a collaborative spirit.
              </li>
              <li>
                Aware of trends in mobile, communications, and collaboration.
              </li>
              <li>
                Ability to produce highly polished design prototypes, mockups,
                and communication artifacts.
              </li>
              <li>
                Proficiency in scoping, estimating efforts, and prioritizing
                tasks independently.
              </li>
              <li>
                Proven history of influencing product delivery and user
                experiences.
              </li>
              <li>
                A Bachelor’s Degree in Design (or a related field) or equivalent
                professional experience.
              </li>
              <li>
                Proficiency in design tools such as Figma, Photoshop,
                Illustrator, and Sketch.
              </li>
            </ul>
            <h3 className="py-4">Preferred Experience</h3>
            <ul>
              <li>
                Designing user experiences for enterprise software/services.
              </li>
              <li>
                Applying established design principles and interaction patterns.
              </li>
              <li>
                Influencing design thinking across diverse teams and
                geographies.
              </li>
            </ul>
            <h3 className="py-4">Key Responsibilities</h3>
            <ul>
              <li>
                <h4 className="inline-block">Product Knowledge:</h4> Gain a deep
                understanding of the technology and features relevant to your
                assigned product area.
              </li>
              <li>
                <h4 className="inline-block">Research:</h4> Provide insights
                that demonstrate human and business impact for our products.
              </li>
              <li>
                <h4 className="inline-block">Deliverables:</h4> Create essential
                deliverables (competitive analyses, user flows, low-fidelity
                wireframes, high-fidelity mockups, prototypes, etc.) that
                effectively solve user problems.
              </li>
              <li>
                <h4 className="inline-block">Communication:</h4> Clearly convey
                the results of UX activities to the design team and
                cross-functional partners, simplifying complex concepts.
              </li>
            </ul>
            <p>
              Join us in shaping the future of digital design and enhancing user
              experiences at Jthemes!
            </p>
          </div>
          <div className="lg:w-4/12 flex flex-col gap-10 w-full">
            <div className="border border-lightGray p-6 rounded-xl z-0">
              <MapContainer
                center={center}
                zoom={10}
                style={{ height: "200px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                  <Popup>
                    {dynamicJob.company}
                    <br />
                    {dynamicJob.position}
                  </Popup>
                </Marker>
              </MapContainer>
              <div className="contact-info">
                <h3 className="mb-6 mt-2">Contact Us</h3>
                <p>
                  <h5 className="inline-block">Address:</h5>
                  <br />
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
                <p>
                  <h5 className="inline-block">Phone:</h5> (123) 456-7890
                </p>
                <p>
                  <h5 className="inline-block">Email:</h5>{" "}
                  <a href="mailto:contact@Evara.com">contact@Evara.com</a>
                </p>
              </div>
            </div>
            <div className="border border-lightGray p-6 rounded-xl">
              <h4 className="pb-7">Similar Jobs</h4>
              {array.map((arr, index) => (
                <div
                  className="border-t-[1px] border-t-lightGray py-4"
                  key={index}
                >
                  <div className="flex gap-5 items-center">
                    <img
                      className="h-14 w-14 object-cover"
                      src={arr.brandImage}
                      alt=""
                    />
                    <div>
                      <h4 className="pb-2">{arr.position}</h4>
                      <div className="flex justify-between">
                        <p className="text-sm">{arr.type}</p>
                        <p className="text-sm">{arr.posted}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-end pt-2">{arr.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
