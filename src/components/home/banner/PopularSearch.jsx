import { Link } from "react-router-dom";

function PopularSearch() {
  const popularSearches = [
    "Content Writer",
    "Finance",
    "Human Resource",
    "Management",
  ];

  return (
    <div>
      <strong className="text-14 text-darkBlue dark:text-lightText">
        Popular Researches:{" "}
      </strong>
      {popularSearches.map((searches, index) => (
        <Link
          className="text-14 hover:underline text-darkBlue dark:text-lightText"
          key={index}
          to={""}
        >
          {searches} ,
        </Link>
      ))}
    </div>
  );
}

export default PopularSearch;
