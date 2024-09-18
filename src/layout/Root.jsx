import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Root;
