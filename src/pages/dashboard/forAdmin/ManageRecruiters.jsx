import RecruiterManagementTable from "../../../components/dashboard/RecruiterManagementTable";
import TinnyHeading from "../shared/TinnyHeading";


const ManageRecruiters = () => {
    return (
        <div>
            <TinnyHeading
                title={"Manage Recruiters"}
                path={"manage-recruiters"}
                pathName={"Manage Recruiters"}
            />
            <RecruiterManagementTable />
        </div>
    )
};

export default ManageRecruiters;