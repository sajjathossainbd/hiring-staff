import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsListing } from "../../features/blogs/blogsListing/blogsListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import BlogCard from "../../components/shared/blogs/BlogCard";
import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import { CardPagination } from "../../components/shared/CardPagination";

function BlogsPage() {
  const dispatch = useDispatch();

  const {
    blogsListing: blogs,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.blogsListing);

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3;

  useEffect(() => {
    dispatch(fetchBlogsListing({ page, limit, query: searchQuery }));
  }, [dispatch, page, searchQuery]);

  const totalPages = blogs.totalPages;
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && blogs?.blogs?.length === 0) {
    content = <NoFoundData title="No Blogs Found!" />;
  }

  if (!isLoading && !isError && blogs?.blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 my-10">
        {blogs?.blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

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
      <div className="container flex flex-col items-center">
        {/* Search and Filter */}
        <div className="flex justify-center my-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* Blog Card Content */}
        {content}

        {/* Card Pagination Component */}
        {blogs?.blogs && (
          <CardPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage} // Directly set the page number
          />
        )}
      </div>
    </>
  );
}

export default BlogsPage;
