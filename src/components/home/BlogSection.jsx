import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "../shared/SectionTitle";
import Blogs from "../shared/blogs/Blogs";
import { useEffect } from "react";
import { fetchBlogsListing } from "../../features/blogs/blogsListing/blogsListingSlice";
import Loading from "../ui/Loading";
import NoFoundData from "../ui/NoFoundData";

const BlogSection = () => {
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

  if (!isLoading && !isError && blogs?.length === 0) {
    content = <NoFoundData title="No Blogs Found!" />;
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = <Blogs blogs={blogs} />;
  }
  return (
    <section className="container">
      <div>
        <SectionTitle
          title={"News and Blog"}
          subTitle={"Get the latest news, updates and tips"}
        />

        {/* All Blogs */}
        {content}
      </div>
    </section>
  );
};

export default BlogSection;
