import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsListing } from "../../features/blogs/blogsListing/blogsListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import BlogCard from "../../components/shared/blogs/BlogCard";
import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";

function BlogsPage() {
  const dispatch = useDispatch();

  const {
    blogsListing: blogs,
    isLoading,
    isError,
    error,
    currentPage,
    totalPages
  } = useSelector((state) => state.blogsListing);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTags, setSearchTags] = useState("");

  useEffect(() => {
    dispatch(fetchBlogsListing({ page, limit, title: searchTitle, tags: searchTags }));
  }, [dispatch, page, limit, searchTitle, searchTags]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(fetchBlogsListing({ page, limit, title: searchTitle, tags: searchTags }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && blogs?.blogs?.length === 0) {
    content = <NoFoundData title="No Blogs Found!" />;
  }

  // if (!isLoading && !isError && blogs?.blogs?.length > 0) {
  if (!isLoading && !isError && blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-10">
        {/* {blogs?.blogs?.map((blog) => ( */}
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

  // console.log(blogs);
  return (
    <>
      <Helmet>
        <title>Hiring Staff - Blogs</title>
      </Helmet>
      <TinnyBanner
        title={"Blogs"}
        subTitle={"Explore our latest tech articles and insights."}
        currentPath={"blogs"}
      />
      <div className="container">
        {/* Search and Filter Form */}
        <form onSubmit={handleSearch} className="my-4 flex gap-2">
          <input
            type="text"
            placeholder="Search by Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Filter by Tags"
            value={searchTags}
            onChange={(e) => setSearchTags(e.target.value)}
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
        </form>
        {/* Blog Card Content*/}
        {content}

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 ${index + 1 === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogsPage;
