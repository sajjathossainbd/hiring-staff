import TinnyHeading from "../shared/TinnyHeading";
import JobPostCard from "./JobPostCard";
import select from "./../../../../public/select3";

function SelectedCandidates() {
  return (
    <div>
      <TinnyHeading
        title="Manage Selected Candidates"
        path="selected-candidates"
        pathName="Selected Candidates"
      />

      {/* shortlisted candidates list */}
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <JobPostCard
          Cardtitle="Select Candidates"
          jobTitle="Fresher React Developer"
          statusTitle="Select"
          img={select}
          style="gradient-3"
          link="/dashboard/selected-candidates-list"
        />
      </div>
    </div>
  );
}

export default SelectedCandidates;
