/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const CardPagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currentPage - 1);

  useEffect(() => {
    setPageNumber(currentPage - 1);
  }, [currentPage]);

  const updatePageNumber = (num) => {
    if (num < 0 || num >= totalPages) return;
    setPageNumber(num);
    onPageChange(num + 1);
  };

  return (
    <div className="mx-auto flex w-full max-w-lg select-none items-center justify-center overflow-hidden rounded-sm border border-lightGray">
      {/* Previous Button */}
      <div
        onClick={() => updatePageNumber(pageNumber - 1)}
        className={`dark:text-white flex-1 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 ${
          pageNumber === 0 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {"<<"}
      </div>

      {/* Page Numbers */}
      <div className="flex gap-1 items-center justify-center divide-x divide-zinc-500 flex-wrap m-2">
        {[...Array(totalPages).keys()].map((item) => (
          <div
            key={item}
            onClick={() => updatePageNumber(item)}
            className={`cursor-pointer px-2 py-1  text-sm transition-all duration-200 border-none rounded-sm text-gray ${
              pageNumber === item
                ? "bg-blue text-white"
                : "hover:bg-blue hover:text-white"
            } font-semibold`}
          >
            {item + 1}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div
        onClick={() => updatePageNumber(pageNumber + 1)}
        className={`dark:text-white flex-1 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 ${
          pageNumber === totalPages - 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {">>"}
      </div>
    </div>
  );
};
