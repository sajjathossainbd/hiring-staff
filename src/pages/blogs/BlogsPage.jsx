import { useEffect } from "react";
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
  } = useSelector((state) => state.blogsListing);

  useEffect(() => {
    dispatch(fetchBlogsListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && blogs?.blogs?.length === 0) {
    content = <NoFoundData title="No Blogs Found!" />;
  }

  if (!isLoading && !isError && blogs?.blogs?.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-10">
        {blogs?.blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

  console.log(blogs);
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
        {/* Blog Card Content*/}
        {content}
      </div>
    </>
  );
}

export default BlogsPage;
