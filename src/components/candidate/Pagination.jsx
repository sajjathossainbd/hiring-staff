import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
      navigate(`/candidates-listing/${newPage}`);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`join-item btn dark:bg-white rounded-r-none ${
          currentPage <= 1 ? "btn-disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous Page"
      >
        «
      </button>

      <button className="join-item  btn rounded-none disabled">
        {`${currentPage} of ${totalPages}`}
      </button>

      <button
        className={`join-item btn dark:bg-white rounded-l-none ${
          currentPage >= totalPages ? "btn-disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next Page"
      >
        »
      </button>
    </div>
  );
}

export default Pagination;
