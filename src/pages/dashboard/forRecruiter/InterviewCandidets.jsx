import TinnyHeading from "../shared/TinnyHeading";
import JobPostCard from "./JobPostCard";
import interview from "./../../../../public/interview2.json";

function InterviewCandidets() {
  return (
    <div>
      <TinnyHeading
        title="Manage Interview Candidates"
        path="interview-candidates"
        pathName="Interview Candidates"
      />

      {/* shortlisted candidates list */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        {/* <JobPostCard
          Cardtitle="Interview Candidates"
          jobTitle="Fresher React Developer"
          statusTitle="Intvw"
          img={interview}
          style="gradient-3"
          link="/dashboard/interview-candidates-list"
        /> */}
      </div>
    </div>
  );
}

export default InterviewCandidets;
