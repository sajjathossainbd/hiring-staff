import TeamCard from "./TeamInfoCard";
import SectionTitle from "../shared/SectionTitle";

function MeetOurTeam() {
  const teamData = [
    {
      img: "https://i.ibb.co.com/M7nx1wy/sajjat-bro.jpg",
      name: "Sajjat Hossain",
      role: "Software Engineer",
      review: 4.8,
      location: "Dhaka, BD - 1209",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/dcnXzH3/kawser.jpg",
      name: "Kawser Rahman",
      role: "Backend Developer",
      review: 4.7,
      location: "Dhaka, BD - 1971",
      facebook: "https://www.facebook.com/kawserferdoussafi.03",
      instagram: "https://www.instagram.com/kawserferdoussafi_x",
      github: "https://github.com/dev-kawser",
      linkedin: "https://www.linkedin.com/in/kawser-ferdous-safi/",
    },
    {
      img: "https://i.ibb.co.com/61yLCPv/ayub.jpg",
      name: "Aybu Khan",
      role: "Full Stack Developer",
      review: 4.8,
      location: "Austin, TX",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/NS8JMWy/israfil.jpg",
      name: "Israfil Hossain",
      role: "Front End Enginner",
      review: 4.8,
      location: "Los Angeles, CA",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/pZmRm0T/mushfiq.jpg",
      name: "Mushfic Rahman",
      role: "Front End Developer",
      review: 4.9,
      location: "Chicago, IL",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/5RCh292/eliash.jpg",
      name: "Elias Ebrahim",
      role: "Back End Developer",
      review: 4.6,
      location: "Seattle, WA",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center text-center">
        <SectionTitle
          title={"Meet Our Team"}
          subTitle={
            "Explore our company and get to know the talented team that drives our success. Each member is dedicated to innovation, excellence, and achieving outstanding results in every project we undertake."
          }
          subHeading={"Our Company"}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 my-10">
        {teamData.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

export default MeetOurTeam;
