import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axios";
import { Trans } from "react-i18next";
import useAuth from "../../hooks/useAuth";

const ReviewForm = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [rating, setRating] = useState("");
  const { user } = useAuth();

  const handleRatingChange = (value) => {
    setValue("rating", value);
    setRating(value);
  };

  const onSubmit = (data) => {
    if (!data.message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    const reviewData = {
      email: user?.email,
      name: user?.displayName,
      image: user?.photo_URL,
      reviewData: {
        ...data,
        rating: rating,
      },
      date: new Date().toISOString().split("T")[0],
    };

    axiosInstance
      .post("/reviews", reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          setRating("");
          toast.success("Review added successfully");
        }
      })
      .catch(() => {
        toast.error("Failed to add review");
      });
  };

  return (
    <div className="flex flex-col p-4 shadow-sm rounded-xl xl:p-12 text-black  dark:bg-blue dark:text-white">
      <div className="flex flex-col items-center w-full">
        <h2 className="xl:text-3xl text-2xl font-semibold text-center dark:text-darkBlue">
          {<Trans i18nKey={"reviewRightCard"} />}
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">
            <Trans i18nKey={"reviewRightCard_1"} />
          </span>
          <div className="flex space-x-3">
            {Array.from({ length: 5 }, (_, index) => index + 1).map((star) => (
              <button
                type="button"
                title={`Rate ${star} stars`}
                aria-label={`Rate ${star} stars`}
                onClick={() => handleRatingChange(star.toString())}
                key={star}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-10 md:h-10 w-5 :h-5 ${
                    rating >= star ? "text-yellow-700" : "text-gray-400"
                  }`}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="6"
            required
            {...register("message")}
            placeholder="Message..."
            className="resize-none lightbg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-4 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
          ></textarea>
          {user ? (
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="py-4 my-8 flex items-center justify-center bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue text-white px-4 sm:px-4 sm:py-3  md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-md font-medium transition-all duration-500 ease-in-out gap-2"
            >
              <Trans i18nKey={"reviwBtn"} />
            </button>
          ) : (
            <button
              disabled
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="py-4 btn my-8 flex items-center justify-center bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue text-white px-4 sm:px-4 sm:py-3  md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-md font-medium transition-all duration-500 ease-in-out gap-2"
            >
              Please login first
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
