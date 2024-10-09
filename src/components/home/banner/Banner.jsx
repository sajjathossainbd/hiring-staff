import { Link } from "react-router-dom";
import SearchByFilter from "../../shared/SearchByFilter";
import BannerImg from "../../../SVG/BannerImg";

const Banner = () => {
  const popularSearches = [
    "Content Writer",
    "Finance",
    "Human Resource",
    "Management",
  ];

  return (
    <section className="">
      {/* Banner Image Backround set class name - bg-banner-image bg-center bg-cover  */}
      <div className="dark:bg-darkBlue px-4 lg:pb-10">
        <div className="container ">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-20">
            <div className="lg:w-1/2 w-full flex flex-col gap-8">
              <h2>
                Accelerate <br className="lg:block hidden" /> Your Hiring with
                Our
                <br className="lg:block hidden" />
                <span className="text-blue"> Job Search </span>
                Solutions
              </h2>
              <p className="text-18">
                Every month, 3 million job seekers use our platform, submitting
                over 140,000 applications daily to explore new opportunities and
                connect with potential employers.
              </p>
              {/* search by filter */}
              <SearchByFilter />
              {/* popular researches */}
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
            </div>
            <div className="lg:w-1/2 w-10/12 flex justify-center">
                <BannerImg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
