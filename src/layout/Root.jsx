import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import SubNavbar from "../pages/shared/SubNavbar";

function Root() {
  return (
    <div className="dark:bg-darkBlue relative">
      <SubNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
