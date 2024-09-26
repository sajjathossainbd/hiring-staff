import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function Root() {

  
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-darkBlue relative">
      <Navbar />
      <Outlet />
      <Footer />
      

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed xl:flex lg:flex md:flex sm:hidden hidden bottom-8 right-8 bg-blue text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default Root;
