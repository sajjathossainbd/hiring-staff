import TeamCard from "./TeamInfoCard";
import Team1 from "./../../assets/home/team/team1.svg";
import Team2 from "./../../assets/home/team/team2.svg";
import Team3 from "./../../assets/home/team/team3.svg";
import Team4 from "./../../assets/home/team/team4.svg";
import Team5 from "./../../assets/home/team/team5.svg";
import Team6 from "./../../assets/home/team/team6.svg";
import Team7 from "./../../assets/home/team/team7.svg";
import Team8 from "./../../assets/home/team/team8.svg";
import SectionTitle from "../shared/SectionTitle";

function MeetOurTeam() {
  const teamData = [
    {
      img: Team1,
      name: "John Doe",
      job: "Software Engineer",
      review: 4.7,
      location: "San Francisco, CA",
    },
    {
      img: Team2,
      name: "Jane Smith",
      job: "Product Manager",
      review: 4.5,
      location: "New York, NY",
    },
    {
      img: Team3,
      name: "Michael Johnson",
      job: "UX Designer",
      review: 4.8,
      location: "Austin, TX",
    },
    {
      img: Team4,
      name: "Emily Davis",
      job: "Marketing Specialist",
      review: 4.6,
      location: "Los Angeles, CA",
    },
    {
      img: Team5,
      name: "David Lee",
      job: "Data Scientist",
      review: 4.9,
      location: "Chicago, IL",
    },
    {
      img: Team6,
      name: "Sarah Wilson",
      job: "DevOps Engineer",
      review: 4.3,
      location: "Seattle, WA",
    },
    {
      img: Team7,
      name: "Kevin Brown",
      job: "Sales Manager",
      review: 4.4,
      location: "Miami, FL",
    },
    {
      img: Team8,
      name: "Olivia Garcia",
      job: "HR Specialist",
      review: 4.2,
      location: "Denver, CO",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center text-center">
        <SectionTitle title={"Meet Our Team"} subTitle={"Explore our company and get to know the talented team that drives our success. Each member is dedicated to innovation, excellence, and achieving outstanding results in every project we undertake."} subHeading={"Our Company"} />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 my-10">
        {teamData.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}

export default MeetOurTeam;
