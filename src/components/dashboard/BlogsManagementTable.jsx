import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";
import { CardPagination } from "../shared/CardPagination";
import SecondaryButton from "../shared/SecondaryButton";


const BlogsManagementTable = () => {
    const navigate = useNavigate();
    const { page = 1 } = useParams();
    const limit = 6;

    // Fetch blogs with pagination
    const fetchBlogs = async (currentPage, limit) => {
        const response = await axiosInstance.get(
            `/blogs?page=${currentPage}&limit=${limit}`
        );
        return response.data;
    };

    const {
        data: blogsData,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["blogs", page],
        queryFn: () => fetchBlogs(page, limit),
        enabled: !!page, // Ensure it only runs when page is defined
    });

    if (isError) return <div>Error loading blogs.</div>;
    if (isLoading) return <Loading />;

    // Log blogsData to debug the structure
    console.log("Fetched Blogs Data:", blogsData);

    // Use optional chaining to avoid errors
    const currentPage = blogsData?.currentPage || 1;
    const totalDocuments = blogsData?.totalDocuments || 0;
    const totalPages = Math.ceil(totalDocuments / limit) || 1;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/blogs/delete/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Blog has been deleted.", "success");
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
            <div className="flex justify-between">
            <h5>Manage Blogs</h5>
            <Link to={`/dashboard/manage-all-blogs/${currentPage}/create-blogs`}>
            <SecondaryButton title={"Cretae Blogs + "}/>
            </Link>
            
            </div>
            <hr className="my-6 text-lightGray" />
            <div className="overflow-x-auto flex flex-col justify-between lg:h-[550px]">
                <table className="table text-sm">
                    <thead>
                        <tr className="text-base dark:text-white">
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date Published</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogsData?.blogs?.length > 0 ? (
                            blogsData.blogs.map((blog) => (
                                <tr key={blog._id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.author}</td>
                                    <td>{new Date(blog.date_published).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            className="btn rounded-full text-red-600 hover:text-white hover:bg-blue"
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No blogs found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <CardPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(newPage) => navigate(`/dashboard/manage-all-blogs/${newPage}`)}
                />
            </div>
        </div>
    );
};

export default BlogsManagementTable;
