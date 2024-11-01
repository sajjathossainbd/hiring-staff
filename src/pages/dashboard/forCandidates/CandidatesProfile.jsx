import { useState } from "react";
import MyProfile from "./MyProfile";
import CandidatesProfileUI from "./CandidatesProfileUI";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import { LuClipboardEdit } from "react-icons/lu";
import TinnyHeading from "../shared/TinnyHeading";
import { Helmet } from "react-helmet-async";

function CandidatesProfile() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - My Profile</title>
      </Helmet>
      <TinnyHeading
        title={"Candidate profile"}
        path={"my-profile"}
        pathName={"Candidate profile"}
      />
      <div className="flex justify-end">
        <button onClick={handleFormOpen}>
          <PrimaryBtnBlue
            title="Change Information"
            icon={<LuClipboardEdit />}
          />
        </button>
      </div>

      {isFormOpen ? (
        <MyProfile setIsFormOpen={setIsFormOpen} />
      ) : (
        <CandidatesProfileUI />
      )}
    </div>
  );
}

export default CandidatesProfile;
