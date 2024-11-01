import { Helmet } from "react-helmet-async";
import CandidatesManagementTable from "../../../components/dashboard/CandidatesManagementTable";
import TinnyHeading from "../shared/TinnyHeading";

const ManageCandidates = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Manage Candidates</title>
      </Helmet>
      <TinnyHeading
        title={"Manage Candidates"}
        path={"manage-candidates"}
        pathName={"Manage Candidates"}
      />
      <CandidatesManagementTable />
    </div>
  );
};

export default ManageCandidates;
