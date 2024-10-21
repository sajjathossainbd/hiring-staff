import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../shared/SectionTitle";
import { useEffect } from "react";
import { fetchBlogsListing } from "../../features/blogs/blogsListing/blogsListingSlice";
import Loading from "../ui/Loading";
import NoFoundData from "../ui/NoFoundData";
import BlogCard from "../shared/blogs/BlogCard";
import { Link } from "react-router-dom";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";

const BlogSection = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();

  const {
    blogsListing: blogs,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.blogsListing);

  useEffect(() => {
    dispatch(fetchBlogsListing({ page: 1, limit: 10, query: "" }));
  }, [dispatch]);

  const blogsData = blogs?.blogs?.slice(0, 3) || [];

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && blogsData.length === 0) {
    content = <NoFoundData title="No Blogs Found!" />;
  }

  if (!isLoading && !isError && blogsData.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 mt-10">
        {blogsData.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

  return (
    <section className="container">
      <div>
        <SectionTitle
          title={<Trans i18nKey={"newsandBlogs"}/>}
          subTitle={<Trans i18nKey={"newsandBlogsDescrip"}/>}
        />
        <div className="mt-10">
          <div className="">{content}</div>
          <Link
            to={"/blogs"}
            className="mt-16 flex items-center justify-center"
          >
            <PrimaryBtn title={<Trans i18nKey={"moreBlogs"}/>}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
