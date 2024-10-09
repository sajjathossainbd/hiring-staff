import { CgProfile } from "react-icons/cg";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdManageHistory,
  MdOutlinePayment,
  MdPlaylistAddCheck,
  MdPostAdd,
} from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { VscGitStashApply } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardFooter from "../pages/dashboard/shared/DashboardFooter";
import { FaUserCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineBriefcase } from "react-icons/hi";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [admin, setAdmin] = useState(false);
  const [recruiter, setRecruiter] = useState(false);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    setAdmin(currentUser?.role === "admin");
    setRecruiter(currentUser?.role === "recruiter");
  }, [currentUser]);

  return (
    <div className="flex lg:flex-row flex-col inter bg-gray-100">
      {/* Sidebar */}
      <div className="relative lg:w-64 w-full shadow-lg">
        <div className="drawer lg:drawer-open z-20">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-blue drawer-button lg:hidden mt-2 text-white rounded"
            >
              Open Dashboard
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu inter space-y-2 p-4 w-64 h-full bg-white text-black fixed top-0 overflow-y-auto shadow-md font-bold">
              {/* Logo Section */}
              <div className="flex items-center justify-center my-6">
                <Link to={"/"} className="flex items-center gap-1">
                  <HiOutlineBriefcase className={`text-3xl text-blue`} />
                  <h3 className={`text-3xl font-semibold text-blue`}>Hiring Staff</h3>
                </Link>
              </div>

              {/* Admin Links */}
              {admin && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <ImProfile /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-users"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <FaUserCog /> Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-all-jobs"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <MdPostAdd /> Manage Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/all-payment-history"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <MdOutlinePayment /> All Payments
                    </NavLink>
                  </li>
                </>
              )}

              {/* Recruiter Links */}
              {recruiter && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <ImProfile /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/company-profile"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <ImProfile /> Company Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/post-job"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <MdPostAdd /> Post Job
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-jobs"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <MdManageHistory /> Manage Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/all-applicants"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <VscGitStashApply /> All Applicants
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/shortlist"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <MdPlaylistAddCheck /> Shortlist
                    </NavLink>
                  </li>
                </>
              )}

              {/* Links for Candidates */}
              {!admin && !recruiter && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white rounded-md ${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <ImProfile /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/my-resume"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <RxResume /> My Resume
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/applied-jobs"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <VscGitStashApply /> Applied Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/shortlisted-jobs"
                      className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white${isActive ? "bg-blue text-white" : ""}`}
                    >
                      <FaArrowUpShortWide /> Shortlisted Jobs
                    </NavLink>
                  </li>
                </>
              )}

              {/* For all users */}
              <div className="divider" />

              <li>
                <NavLink
                  to="/dashboard/my-profile"
                  className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white ${isActive ? "bg-blue text-white" : ""}`}
                >
                  <CgProfile /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-payments"
                  className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white ${isActive ? "bg-blue text-white" : ""}`}
                >
                  <MdOutlinePayment /> My Payments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `flex items-center gap-2 px-4 hover:bg-blue hover:text-white ${isActive ? "bg-blue text-white" : ""}`}
                >
                  <IoHomeOutline /> Home
                </NavLink>
              </li>
              <li>
                <button onClick={logOut} className="text-red-500 flex items-center gap-2 px-4 hover:bg-red-600 hover:text-white py-2">
                  <IoIosLogOut /> Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white z-10 flex-1 xl:p-10 lg:p-8 md:p-5 p-3 dark:bg-darkBlue">
        <Outlet />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
