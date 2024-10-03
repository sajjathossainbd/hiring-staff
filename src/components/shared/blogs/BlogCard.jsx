/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  const { _id } = blog || {};

  return (
    <div>
      <Link
        to={`/blog-details/${blog?._id}`}
        key={_id}
        className=" border-lightGray hover:border-blue rounded-lg px-1 py-3  hover:-translate-y-1 transition duration-300 h-[600px] md:h-[500px] lg:h-[611px] w-full"
      >
        <figure className="p-4">
          <img
            className="rounded-lg size-48 w-full"
            src={blog?.url}
            alt="Blog"
          />
        </figure>
        <div className="card-body p-4 gap-1 mt-3">
          <h4 className="hover:text-blue line-clamp-2">{blog?.title}</h4>
          <p className="mt-1 text-14">{blog?.content.slice(0, 100)}</p>

          <div className="flex justify-between items-end mt-6">
            <div className="flex items-center gap-4">
              <img
                className="lg:w-12 w-8 lg:h-12 h-8 rounded-full"
                src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                alt=""
              />
              <div>
                <h5 className="lg:text-14 text-xs">
                  {blog?.author}
                </h5>
                <p className="lg:text-12 text-[11px] lg:mt-1">
                  {blog?.date_published}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
