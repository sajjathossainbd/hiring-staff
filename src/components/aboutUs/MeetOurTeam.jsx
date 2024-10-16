import TeamCard from "./TeamInfoCard";
import SectionTitle from "../shared/SectionTitle";

function MeetOurTeam() {
  const teamData = [
    {
      img: "https://i.ibb.co.com/M7nx1wy/sajjat-bro.jpg",
      name: "Sajjat Hossain",
      role: "Software Engineer",
      review: 4.8,
      location: "Dhaka, Bangladesh - 1209",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/gV882NV/me-real.png",
      name: "Kawser Rahman",
      role: "Backend Developer",
      review: 4.7,
      location: "Dhaka, Bangladesh - 1971",
      facebook: "https://www.facebook.com/kawserferdoussafi.03",
      instagram: "https://www.instagram.com/kawserferdoussafi_x",
      github: "https://github.com/dev-kawser",
      linkedin: "https://www.linkedin.com/in/kawser-ferdous-safi/",
    },
    {
      img: "https://i.ibb.co.com/BL5Gg20/ayub-khan-vai-modified.png",
      name: "Aybu Khan",
      role: "UX Designer",
      review: 4.8,
      location: "Austin, TX",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/K6TYsBJ/israfil.jpg",
      name: "Israfil Hossain",
      role: "Marketing Specialist",
      review: 4.6,
      location: "Los Angeles, CA",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/gVtYqj5/mushfic.jpg",
      name: "Mushfic Rahman",
      role: "Data Scientist",
      review: 4.9,
      location: "Chicago, IL",
      facebook: "",
      instagram: "",
      github: "",
      linkedin: "",
    },
    {
      img: "https://i.ibb.co.com/6nZJcqv/elias.jpg",
      name: "Elias Ebrahim",
      role: "DevOps Engineer",
      review: 4.3,
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
        <SectionTitle title={"Meet Our Team"} subTitle={"Explore our company and get to know the talented team that drives our success. Each member is dedicated to innovation, excellence, and achieving outstanding results in every project we undertake."} subHeading={"Our Company"} />
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
