/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  // Convert rating to a number and ensure it's between 1 and 5
  const validRating = Math.min(5, Math.max(0, Math.floor(Number(rating))));

  return (
    <div className="rating flex gap-1">
      {/* Render filled stars */}
      {[...Array(validRating)].map((_, index) => (
        <FaStar key={index} className="lg:h-5 h-4 text-yellow-500" />
      ))}
      {/* Render empty stars */}
      {[...Array(5 - validRating)].map((_, index) => (
        <FaStar key={index + validRating} className="lg:h-5 h-4 text-gray-300" />
      ))}
    </div>
  );
};

export default Rating;
