// import NewsBlog from "../../NewsBlog/NewsBlogCard";
// import NewsBlogCard from "../../NewsBlogSection/NewsBlogCard";
import NewsBlogSection from "../../NewsBlogSection/NewsBlogSection";
import JobDayCard from "../jobCard/JobDayCard";

function Home() {
  return (
    <div>
      <h2>
        The <span className="text-blue">Easiest Way </span>
        <br />
        to Get Your New Job
      </h2>
      <p className="text-sm">Location</p>
      <p className="text-lg">
        Each month, more than 3 million job seekers turn to website in their{" "}
        <br />
        search for work, making over 140,000 applications every single day
      </p>
      <p className="text-lightGray-12">0 Vacancies</p>
      <h3>Browse by category</h3>
      <strong>Content Writer</strong>

      {/* Jobs of the day*/}
      <JobDayCard></JobDayCard>
      {/* <NewsBlog></NewsBlog> */}
      {/* <NewsBlogCard></NewsBlogCard> */}
      <NewsBlogSection></NewsBlogSection>
    </div>
  );
}

export default Home;
