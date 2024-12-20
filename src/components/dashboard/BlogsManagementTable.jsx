import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CardPagination } from "../shared/CardPagination";
import SecondaryButton from "../shared/SecondaryButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    enabled: !!page,
  });

  if (isError) return <div>Error loading blogs.</div>;

  const currentPage = blogsData?.currentPage || 1;
  const totalDocuments = blogsData?.totalDocuments || 0;
  const totalPages = Math.ceil(totalDocuments / limit) || 1;

  const handleDelete = (id) => {
    Swal.fire({
      title: "<span style='color: red;'>Are you sure?</span>",
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

  const renderSkeletonRows = () =>
    Array.from({ length: limit }).map((_, index) => (
      <tr key={index}>
        <td>
          <Skeleton height={20} width="80%" />
        </td>
        <td>
          <Skeleton height={20} width="60%" />
        </td>
        <td>
          <Skeleton height={20} width="50%" />
        </td>
        <td>
          <Skeleton circle height={30} width={30} />
        </td>
      </tr>
    ));

  return (
    <div className="bg-softLightBlue dark:bg-darkBlue dark:text-white py-6 lg:px-6 px-2 rounded-md">
      <div className="flex justify-between">
        <h5>Manage Blogs</h5>
        <Link to={`/dashboard/manage-all-blogs/${currentPage}/create-blogs`}>
          <SecondaryButton title={"Create Blogs + "} />
        </Link>
      </div>
      <hr className="my-6 text-lightGray" />
      <div className="overflow-x-auto flex flex-col justify-between lg:h-[580px]">
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
            {isLoading
              ? renderSkeletonRows()
              : blogsData?.blogs?.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>
                      {new Date(blog.date_published).toLocaleDateString()}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="btn rounded-full text-red-600 hover:text-white hover:bg-blue"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <CardPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) =>
            navigate(`/dashboard/manage-all-blogs/${newPage}`)
          }
        />
      </div>
    </div>
  );
};

export default BlogsManagementTable;
