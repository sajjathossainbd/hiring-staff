import { Link } from "react-router-dom";

function PopularSearch() {
  const popularSearches = [
    "React JS Developer",
    "Mobile App Developer",
    "Java Developer",
  ];

  return (
    <div>
      <strong className="text-14 text-darkBlue dark:text-lightText">
        Popular Keywords:{" "}
      </strong>
      {popularSearches.map((searches, index) => (
        <Link
          className="text-14 hover:underline text-darkBlue dark:text-lightText"
          key={index}
        >
          {searches} ,
        </Link>
      ))}
    </div>
  );
}

export default PopularSearch;
