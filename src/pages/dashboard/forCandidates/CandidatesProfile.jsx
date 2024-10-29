import { useState } from "react";
import MyProfile from "./MyProfile";
import CandidatesProfileUI from "./CandidatesProfileUI";
import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import { LuClipboardEdit } from "react-icons/lu";
import TinnyHeading from "../shared/TinnyHeading";

function CandidatesProfile() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div>
      <TinnyHeading
        title={"Candidate Profiel"}
        path={"my-profile"}
        pathName={"Candidate Profiel"}
      />
      <div className="flex justify-end">
        <button onClick={handleFormOpen}>
          <PrimaryBtnBlue
            title="Change Information"
            icon={<LuClipboardEdit />}
          />
        </button>
      </div>

      {isFormOpen ? <MyProfile /> : <CandidatesProfileUI />}
    </div>
  );
}

export default CandidatesProfile;
