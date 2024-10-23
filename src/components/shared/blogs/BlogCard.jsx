/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import MiniBtn from "../../ui/MiniBtn";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PrimaryBtnBlue from "../../ui/PrimaryBtnBlue";

function BlogCard({ blog }) {
  const { url, content, title } = blog || {};

  return (
    <div className="boxBorderHoverBlue border-none shadow-sm bg-white">
      <div className="flex flex-col justify-between">
        <figure className="">
          <img
            className="rounded-md size-48 object-cover w-full"
            src={url}
            alt="Blog"
          />
        </figure>
        <div className="p-5">
          {/* Category and bookmark */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <MiniBtn value={"Tech"} icon="" style="bg-softGreen text-green" />
              <MiniBtn
                value={"Career"}
                icon=""
                style="bg-softGreen text-blue"
              />
            </div>
            <BookmarkBtn />
          </div>

          {/* Title and Contnet */}
          <h4 className="line-clamp-2">{title}</h4>
          <p className="mt-1 text-14">{content.slice(0, 100)}</p>

          {/* Author */}
          <div className="flex justify-between items-end mt-6">
            <div className="flex items-center gap-4">
              <img
                className="lg:w-12 w-8 lg:h-12 h-8 rounded-full"
                src="https://i.ibb.co.com/pZmRm0T/mushfiq.jpg"
                alt=""
              />
              <div>
                <h5 className="lg:text-14 text-xs">{blog?.author}</h5>
                <p className="lg:text-12 text-[11px] lg:mt-1">
                  {blog?.date_published}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Read More */}
        <Link
          to={`/blog-details/${blog?._id}`}
          className="mt-10 flex items-end justify-end"
        >
          <PrimaryBtnBlue title={"Read More"} />
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
