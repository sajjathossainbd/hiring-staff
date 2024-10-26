import CandidatesManagementTable from "../../../components/dashboard/CandidatesManagementTable";
import TinnyHeading from "../shared/TinnyHeading";


const ManageCandidates = () => {
    return (
        <div>
            <TinnyHeading
                title={"Manage Candidates"}
                path={"manage-candidates"}
                pathName={"Manage Candidates"}
            />
            <CandidatesManagementTable/>
        </div>
    );
};

export default ManageCandidates;