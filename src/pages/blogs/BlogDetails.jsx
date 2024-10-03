import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlogDetails } from "../../features/blogs/blogDetails/blogDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";

function BlogDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    blogDetails: blog,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.blogDetails);

  // data destructuring
  const { title } = blog || {};

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

  if (!isLoading && !isError && blog?.id) {
    content = (
      <div>
        {/* 
    
        1. blog juto data acche database thake,shob akhane rakhben
        2. judi bashi boro hy jai tahole alada compoent create korte paren
        
        */}
      </div>
    );
  }

  console.log(blog);
  return (
    <div className="container">
      <h1>Blog Details</h1>

      {/* Blog Details Content */}
      {content}
    </div>
  );
}

export default BlogDetails;
