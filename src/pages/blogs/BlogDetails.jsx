import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollRestoration, useParams } from "react-router-dom";
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

  const {
    url,
    title,
    date_published,
    category,
    short_description,
    content: articleBody = [],
  } = blog || {};

  console.log(articleBody);

  useEffect(() => {
    dispatch(fetchBlogDetails(id));
  }, [dispatch, id]);

  // data formate
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = formatDate(date_published);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?._id) {
    content = <NoFoundData title={"No Blog Found!"} />;
  }

  if (!isLoading && !isError && blog?._id) {
    content = (
      <div>
        {/* banner img */}
        <div className="flex justify-center w-full">
          <img
            className="xl:h-96 lg:h-80 md:h-60 sm:h-40 h-28  object-cover rounded-2xl"
            src={url}
            alt=""
          />
        </div>

        {/* title and content */}
        <div className="">
          <h3 className="">{title}</h3>
          <div className="flex items-center gap-3 mt-2">
            <p className="font-bold">Category:</p>
            <p className="text-12 mt-1 border-solid border-[1px] inline-block rounded-full py-1 px-5 border-lightGray">
              {category}
            </p>
          </div>

          {/* article body */}
          <div className="mt-6">
            <p className="">{short_description}</p>
            <div className="">
              {articleBody.map((subSection, index) => (
                <div className="mt-3" key={index}>
                  <p className="font-bold text-16">{subSection.heading}</p>
                  <p>{subSection.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* blog tags */}
        <div className="mt-10 flex gap-6">
          <p className="font-bold text-16">Tags:</p>
          <div>
            {blog.tags.map((topic, index) => (
              <p
                key={index}
                className="text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7] dark:bg-blue dark:text-white space-y-3 m-auto mr-4"
              >
                {topic}
              </p>
            ))}
          </div>
        </div>

        {/* author inofr */}
        <div className="mt-4">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
              alt=""
            />
            <div className="">
              <h5 className="text-14">Admin</h5>
              <p className="text-12">
                <span className="font-semibold">Published: </span>
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
        <BlogCommentSection />
      </div>
    );
  }

  return (
    <div className="container">
      {/* Blog blog Content */}
      {content}
      <ScrollRestoration />
    </div>
  );
}

export default Blogblog;
