/* eslint-disable no-unused-vars */
import { Trans, useTranslation } from "react-i18next";
import ReviewForm from "./ReviewForm";
import Lottie from "lottie-react";
import reviewImg from "./../../../public/review-3.json";

const reviews = () => {
  const { t } = useTranslation();

  return (
    <section className="container rounded-xl">
      <div className=" text-white rounded-xl">
        <div className="flex flex-col xl:flex-row justify-around items-center">
          <div className="flex flex-col w-full p-10">
            <Lottie animationData={reviewImg}></Lottie>
          </div>
          <div className="flex flex-col w-full justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full xl:px-4 px-0">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <ReviewForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default reviews;
