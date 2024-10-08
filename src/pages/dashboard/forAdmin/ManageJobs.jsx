import JobsManagementTable from "../../../components/dashboard/JobsManagementTable";
import TinnyHeading from "../shared/TinnyHeading";


const ManageJobs = () => {
    return (
        <div>
            <TinnyHeading
                title={"Manage jobs"}
                path={"manage-jobs"}
                pathName={"Manage jobs"}
            />
            <JobsManagementTable />
        </div>
    );
};

export default ManageJobs;