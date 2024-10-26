import BlogsManagementTable from "../../../components/dashboard/BlogsManagementTable";
import TinnyHeading from "../shared/TinnyHeading";


const ManageBlogs = () => {
    return (
        <div>
            <TinnyHeading
                title={"Manage Candidates"}
                path={"manage-candidates"}
                pathName={"Manage Candidates"}
            />
            <BlogsManagementTable />
        </div>
    );
};

export default ManageBlogs;