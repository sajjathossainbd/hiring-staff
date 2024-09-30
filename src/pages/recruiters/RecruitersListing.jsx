import { useEffect, useState } from "react";
import RecruiterCard from "../../components/recruiter/RecruiterCard";
import { Helmet } from "react-helmet-async";
import RecruiterBrowser from "../../components/recruiter/RecruiterBrowser";
import Filters from "../../components/recruiter/Filters";
import Pagination from "../../components/recruiter/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRecruiters } from "../../features/recruiters/allRecruiters/allRecruitersSlice";
const RecruitersListing = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [showCount, setShowCount] = useState(16); // show count
  const [sortOrder, setSortOrder] = useState("default"); //sort order
  const [currentPage, setCurrentPage] = useState(1); // Tracking current page

  const dispatch = useDispatch();
  const { recruiters, isLoading, isError, error } = useSelector(
    (state) => state.recruiters
  );
  useEffect(() => {
    dispatch(fetchAllRecruiters());
  }, [dispatch]);

  console.log(recruiters, isLoading);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Sorting logic
  const sortRecruiters = () => {
    if (sortOrder === "latest") {
      return [...filteredRecruiters].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (sortOrder === "title") {
      return [...filteredRecruiters].sort((a, b) =>
        a.brandName.localeCompare(b.brandName)
      );
    }
    return filteredRecruiters;
  };

  const filteredRecruiters = selectedLetter
    ? recruiters.filter((recruiter) =>
        recruiter.brandName.toUpperCase().startsWith(selectedLetter)
      )
    : recruiters;

  const sortedRecruiters = sortRecruiters();

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedRecruiters.length / showCount);

  // Slice recruiters for the current page
  const recruitersToShow = sortedRecruiters.slice(
    (currentPage - 1) * showCount,
    currentPage * showCount
  );

  // Pagination change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Hiring Staff - Recruiters</title>
      </Helmet>
      {/* Banner Section & Recruiter Browser */}
      <RecruiterBrowser
        alphabet={alphabet}
        selectedLetter={selectedLetter}
        setSelectedLetter={setSelectedLetter}
        setCurrentPage={setCurrentPage}
      />

      {/* Filter and Sorting Section */}
      <Filters
        showCount={showCount}
        setShowCount={setShowCount}
        setCurrentPage={setCurrentPage}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        currentPage={currentPage}
        sortedRecruiters={sortedRecruiters}
      />

      {/* Recruiter listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recruitersToShow.map((recruiter, index) => (
          <RecruiterCard key={index} recruiter={recruiter} />
        ))}
      </div>

      {/* Pagination*/}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default RecruitersListing;
