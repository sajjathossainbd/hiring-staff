import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { fetchBlogDetails } from "../../features/blogs/blogDetails/blogDetailsSlice";
import BlogCommentSection from "../../components/blogs/BlogCommentSection";

function Blogblog() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    blogDetails: blog,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.blogDetails);

  useEffect(() => {
    dispatch(fetchBlogDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?._id) {
    content = <NoFoundData title={"No Blog Found!"} />;
  }

  // data destructuring
  // const { _id, title } = blog || {};

  if (!isLoading && !isError && blog?._id) {
    content = (
      <div>
        <div className="flex justify-center">
          <img
            className="xl:h-96 lg:h-80 md:h-60 sm:h-40 h-28 w-full object-center rounded-2xl"
            src={blog?.url}
            alt=""
          />
        </div>
        <div className="mx-auto space-y-4 container">
          <div className="flex items-center flex-wrap px-4 gap-2 mt-2">
            {blog.tags.map((topic, index) => (
              <p
                key={index}
                className="text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7] dark:bg-blue dark:text-white space-y-3 m-auto"
              >
                {topic}
              </p>
            ))}
          </div>
          <h3 className="text-center lg:py-7 py-4">{blog?.title}</h3>
          <div className="flex items-center space-x-5 justify-center">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full"
                src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                alt=""
              />
              <h5 className="text-14 mt-4 ml-2">{blog?.author}</h5>
            </div>
            <p className="text-12 mt-4">
              <span className="font-semibold">Published: </span>
              {blog?.date_published}
            </p>
          </div>
          <p className="border-b-2 border-lightGray pb-8">{blog?.content}</p>
        </div>
        <BlogCommentSection />
      </div>
    );
  }

  return (
    <div className="container">
      {/* Blog blog Content */}
      {content}
    </div>
  );
}

export default Blogblog;
