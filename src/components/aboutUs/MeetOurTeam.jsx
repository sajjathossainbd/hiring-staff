import TeamCard from "./TeamInfoCard";
import Team1 from "./../../assets/team/team1.svg";
import Team2 from "./../../assets/team/team2.svg";
import Team3 from "./../../assets/team/team3.svg";
import Team4 from "./../../assets/team/team4.svg";
import Team5 from "./../../assets/team/team5.svg";
import Team6 from "./../../assets/team/team6.svg";
import Team7 from "./../../assets/team/team7.svg";
import Team8 from "./../../assets/team/team8.svg";

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
        <h4 className="uppercase text-lightGray">Our Company</h4>
        <h3 className="mt-3 mb-2">Meet Our Team</h3>
        <p className="text-14">
          Uniquely leverage others seamless leadership skills through 24/365
          methods <br /> of empowerment. Conveniently target high-quality action
          items <br />
          with professional alignments.
        </p>
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
