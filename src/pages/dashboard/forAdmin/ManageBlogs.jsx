import { Helmet } from "react-helmet-async";
import BlogsManagementTable from "../../../components/dashboard/BlogsManagementTable";
import TinnyHeading from "../shared/TinnyHeading";

const ManageBlogs = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Manage Blogs</title>
      </Helmet>
      <TinnyHeading
        title={"Manage Blogs"}
        path={"manage-all-blogs"}
        pathName={"Manage Blogs"}
      />
      <BlogsManagementTable />
    </div>
  );
};

export default ManageBlogs;
