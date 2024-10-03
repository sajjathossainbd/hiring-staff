/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { _id, title } = blog || {};

  return (
    <Link to={`/blog-details/${_id}`}>
      <button className="btn">BlogCard</button>
    </Link>
  );
}

export default BlogCard;
