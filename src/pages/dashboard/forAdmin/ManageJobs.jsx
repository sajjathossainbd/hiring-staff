import { Helmet } from "react-helmet-async";
import JobsManagementTable from "../../../components/dashboard/JobsManagementTable";
import TinnyHeading from "../shared/TinnyHeading";

const ManageJobs = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Manage Jobs</title>
      </Helmet>
      <TinnyHeading
        title={"Manage jobs"}
        path={"manage-jobs"}
        pathName={"Manage jobs"}
      />

      {/* Manage Jobs Table */}
      <JobsManagementTable />
    </div>
  );
};

export default ManageJobs;
