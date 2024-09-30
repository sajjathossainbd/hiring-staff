import UsersManagementTable from "../../../components/dashboard/UsersManagementTable";
import TinnyHeading from "../shared/TinnyHeading";

const ManageUsers = () => {

    return (
        <div>
            <TinnyHeading
                title={"Manage Users"}
                path={"manage-users"}
                pathName={"Manage Users"}
            />
            <UsersManagementTable />
        </div>
    );
};

export default ManageUsers;