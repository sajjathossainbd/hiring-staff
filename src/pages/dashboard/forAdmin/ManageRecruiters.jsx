import { Helmet } from "react-helmet-async";
import RecruiterManagementTable from "../../../components/dashboard/RecruiterManagementTable";
import TinnyHeading from "../shared/TinnyHeading";

const ManageRecruiters = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Manage Recruiters</title>
      </Helmet>
      <TinnyHeading
        title={"Manage Recruiters"}
        path={"manage-recruiters"}
        pathName={"Manage Recruiters"}
      />
      <RecruiterManagementTable />
    </div>
  );
};

export default ManageRecruiters;
