/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import MiniBtn from "../../ui/MiniBtn";
import BookmarkBtn from "../../ui/BookmarkBtn";
import PrimaryBtnBlue from "../../ui/PrimaryBtnBlue";

function BlogCard({ blog }) {
  const { url, date_published, short_description, title } = blog || {};

  // data formate
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = formatDate(date_published);

  return (
    <div className="boxBorderHoverBlue dark:bg-darkBlue  shadow-sm bg-white dark:text-white">
      <div className="flex flex-col justify-between">
        <figure className="w-full flex items-center justify-center py-4">
          <img
            className="rounded-md size-48 object-cover "
            src={url}
            alt="Blog"
          />
        </figure>
        <div className="px-6">
          <div className="">
            {/* Category and bookmark */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <MiniBtn
                  value={"Tech"}
                  icon=""
                  style="bg-softGreen text-green"
                />
                <MiniBtn
                  value={"Career"}
                  icon=""
                  style="bg-softGreen text-blue"
                />
              </div>
              <BookmarkBtn />
            </div>

            {/* Title and Contnet */}
            <h4 className="line-clamp-2 ">{title}</h4>
            <p className="mt-1 text-14 ">
              {short_description?.slice(0, 100)}...
            </p>

            {/* Author */}
            <div className="flex justify-between items-end mt-6 ">
              <div className="flex flex-col gap-1">
                <h5 className="font-bold lg:text-14 text-xs">Admin</h5>
                <p className="lg:text-12 text-[11px] lg:mt-1">
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>
          {/* Read More */}
          <Link
            to={`/blog-details/${blog?._id}`}
            className="mt-6 mb-4 flex items-end justify-end"
          >
            <PrimaryBtnBlue title={"Read More"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
