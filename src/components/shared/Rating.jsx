import { FaStar } from "react-icons/fa";
const Rating = ({ rating }) => {
  //integer between 1 and 5
  const validRating = Math.min(5, Math.max(1, Math.floor(rating)));
  console.log(validRating);
  return (
    <div className="rating flex gap-0">
      {[...Array(validRating)].map((_, index) => (
        <span key={index} className="star full">
          <FaStar className="lg:h-5 h-4" />
        </span>
      ))}
      {[...Array(5 - validRating)].map((_, index) => (
        <span key={index + validRating} className="star empty">
          <FaStar className="lg:h-5 h-4" />
        </span>
      ))}
    </div>
  );
};

export default Rating;
