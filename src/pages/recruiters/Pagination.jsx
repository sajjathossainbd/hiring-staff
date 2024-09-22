// Pagination.js


const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-start items-center mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-4 py-2 rounded-full mr-4 ${
            currentPage === i + 1
              ? "bg-[#F8FAFF] text-blue"
              : "bg-white text-lightGray hover:bg-[#F8FAFF] hover:text-blue"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
        className="px-4 py-2 rounded-full border border-blue bg-[#F8FAFF] text-lightGray"
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
