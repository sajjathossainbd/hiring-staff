import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="dark:bg-darkBlue">
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root;
