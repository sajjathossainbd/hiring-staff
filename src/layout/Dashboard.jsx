import { CgProfile } from "react-icons/cg";
import {
  FaArrowUpShortWide,
  FaBlogger,
  FaCheck,
  FaUserGroup,
} from "react-icons/fa6";
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
import { FaUserTie } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import { BsChatLeftTextFill } from "react-icons/bs";
import useCurrentUser from "../hooks/useCurrentUser";

const Dashboard = () => {
  const { logOut } = useAuth();
  const { currentCandidate, currentRecruiter } = useCurrentUser();

  return (
    <div className="flex lg:flex-row flex-col inter h-screen">
      <Helmet>
        <title>Hiring Staff - Dashboard</title>
      </Helmet>
      {/* Sidebar */}
      <div className="relative lg:w-64 w-full shadow-lg">
        <div className="drawer lg:drawer-open z-20">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn bg-blue drawer-button lg:hidden mt-2 text-white rounded px-4 py-2"
            >
              Open Dashboard
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu inter p-4 w-64 h-full dark:bg-darkBlue bg-white text-black fixed top-0 overflow-y-auto font-bold space-y-2">
              {/* Logo Section */}
              <div className="flex items-center justify-center my-6">
                <Link to={"/"} className="flex items-center gap-1">
                  <HiOutlineBriefcase className={`text-3xl text-blue`} />
                  <h3
                    className={`xl:text-3xl lg:text-2xl text-xl font-semibold text-blue`}
                  >
                    Hiring Staff
                  </h3>
                </Link>
              </div>

              {/* Admin Links */}
              {!currentCandidate && !currentRecruiter && (
                <>
                  <SidebarLink
                    to="/dashboard/dashboard-main"
                    icon={<ImProfile />}
                    text="Overview"
                  />
                  <SidebarLink
                    to="/dashboard/manage-all-jobs"
                    icon={<MdPostAdd />}
                    text="Jobs"
                  />
                  <SidebarLink
                    to="/dashboard/manage-all-blogs"
                    icon={<FaBlogger />}
                    text="Blogs"
                  />
                  <SidebarLink
                    to="/dashboard/all-payment-history"
                    icon={<MdOutlinePayment />}
                    text="Payments"
                  />
                  <SidebarLink
                    to="/dashboard/manage-recruiters"
                    icon={<FaUserTie />}
                    text="Recruiters"
                  />
                  <SidebarLink
                    to="/dashboard/manage-candidates"
                    icon={<FaUserGroup />}
                    text="Candidates"
                  />
                </>
              )}

              {/* Recruiter Links */}
              {currentRecruiter && (
                <>
                  <SidebarLink
                    to="/dashboard/dashboard-main"
                    icon={<ImProfile />}
                    text="Overview"
                  />
                  <SidebarLink
                    to="/dashboard/post-job"
                    icon={<MdPostAdd />}
                    text="Post Job"
                  />
                  <SidebarLink
                    to="/dashboard/manage-jobs"
                    icon={<MdManageHistory />}
                    text="Posted Jobs"
                  />
                  <SidebarLink
                    to="/dashboard/shortlist"
                    icon={<MdPlaylistAddCheck />}
                    text="Shortlisted"
                  />
                  <SidebarLink
                    to="/dashboard/interview-candidates"
                    icon={<MdPlaylistAddCheck />}
                    text="Interview"
                  />
                </>
              )}

              {/* Links for Candidates */}
              {currentCandidate && (
                <>
                  <SidebarLink
                    to="/dashboard/dashboard-main"
                    icon={<ImProfile />}
                    text="Overview"
                  />
                  <SidebarLink
                    to="/dashboard/my-resume"
                    icon={<RxResume />}
                    text="My Resume"
                  />
                  <SidebarLink
                    to="/dashboard/applied-jobs"
                    icon={<VscGitStashApply />}
                    text="Applied Jobs"
                  />
                  <SidebarLink
                    to="/dashboard/shortlisted-jobs"
                    icon={<FaArrowUpShortWide />}
                    text="Shortlisted Jobs"
                  />
                  {/* <SidebarLink
                    to="/dashboard/selected-jobs"
                    icon={<FaCheck />}
                    text="Selected Jobs"
                  /> */}
                </>
              )}

              {/* For all users */}
              <div className="divider" />
              {currentCandidate && (
                <SidebarLink
                  to="/dashboard/my-profile"
                  icon={<CgProfile />}
                  text="Candidate Profile"
                />
              )}
              {currentRecruiter && (
                <SidebarLink
                  to="/dashboard/recruiter-profile"
                  icon={<ImProfile />}
                  text="Recruiter Profile"
                />
              )}
              <SidebarLink
                to="/dashboard/my-payments"
                icon={<MdOutlinePayment />}
                text="My Payments"
              />
              <SidebarLink
                to="/dashboard/ai-assistant"
                icon={<BsChatLeftTextFill />}
                text="AI Assistant"
              />
              <SidebarLink to="/" icon={<IoHomeOutline />} text="Home" />
              <li>
                <button
                  onClick={logOut}
                  className="flex items-center gap-2 px-4 hover:bg-red-600 hover:text-white text-red-600 py-2 rounded"
                >
                  <IoIosLogOut /> Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-100 z-10 flex-1 xl:p-5 lg:p-4 md:p-3 p-2 dark:bg-darkBlue overflow-y-auto">
        <Outlet />
        <DashboardFooter />
      </div>
    </div>
  );
};

// SidebarLink Component
const SidebarLink = ({ to, icon, text }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
          isActive ? "bg-blue text-white" : ""
        }`
      }
    >
      {icon} <span>{text}</span> {/* Removed hidden class for visibility */}
    </NavLink>
  </li>
);

export default Dashboard;
