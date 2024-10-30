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
    <div className="flex lg:flex-row flex-col inter">
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
              className="btn bg-blue drawer-button lg:hidden mt-2 text-white rounded"
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
            <ul className="menu inter p-4 w-64 xl:h-fit lg:h-fit md:h-full h-full dark:bg-darkBlue bg-white text-black fixed top-0 overflow-y-auto font-bold space-y-2">
              {/* Logo Section */}
              <div className="flex items-center justify-center my-6">
                <Link to={"/"} className="flex items-center gap-1">
                  <HiOutlineBriefcase className={`text-3xl text-blue`} />
                  <h3 className={`text-3xl font-semibold text-blue`}>
                    Hiring Staff
                  </h3>
                </Link>
              </div>

              {/* Admin Links */}
              {!currentCandidate && !currentRecruiter && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <ImProfile /> Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-all-jobs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdPostAdd /> Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-all-blogs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <FaBlogger /> Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/all-payment-history"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdOutlinePayment /> Payments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-recruiters"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <FaUserTie /> Recruiters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-candidates"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <FaUserGroup /> Candidates
                    </NavLink>
                  </li>
                </>
              )}

              {/* Recruiter Links */}
              {currentRecruiter && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <ImProfile /> Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/post-job"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdPostAdd /> Post Job
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-jobs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdManageHistory /> Posted Jobs
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/dashboard/shortlist"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdPlaylistAddCheck /> Shortlisted
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/interview-candidates"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdPlaylistAddCheck /> Interview
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink
                      to="/dashboard/selected-candidates"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <MdPlaylistAddCheck /> Selected
                    </NavLink>
                  </li> */}
                </>
              )}

              {/* Links for Candidates */}
              {currentCandidate && (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/dashboard-main"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <ImProfile /> Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/my-resume"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <RxResume /> My Resume
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/applied-jobs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <VscGitStashApply /> Applied Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/shortlisted-jobs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <FaArrowUpShortWide /> Shortlisted Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/selected-jobs"
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                          isActive ? "bg-blue text-white" : ""
                        }`
                      }
                    >
                      <FaCheck /> Selected Jobs
                    </NavLink>
                  </li>
                </>
              )}

              {/* For all users */}
              <div className="divider" />

              {currentCandidate && (
                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white ${
                        isActive ? "bg-blue text-white" : ""
                      }`
                    }
                  >
                    <CgProfile /> Candidate Profile
                  </NavLink>
                </li>
              )}
              {currentRecruiter && (
                <li>
                  <NavLink
                    to="/dashboard/recruiter-profile"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white rounded-md ${
                        isActive ? "bg-blue text-white" : ""
                      }`
                    }
                  >
                    <ImProfile /> Recruiter Profile
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/dashboard/my-payments"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white ${
                      isActive ? "bg-blue text-white" : ""
                    }`
                  }
                >
                  <MdOutlinePayment /> My Payments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/ai-assistant"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white ${
                      isActive ? "bg-blue text-white" : ""
                    }`
                  }
                >
                  <BsChatLeftTextFill /> AI Assistant
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 hover:bg-blue hover:text-white dark:text-white ${
                      isActive ? "bg-blue text-white" : ""
                    }`
                  }
                >
                  <IoHomeOutline /> Home
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="flex items-center gap-2 px-4 hover:bg-red-600 hover:text-white text-red-600 py-2"
                >
                  <IoIosLogOut /> Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-100 z-10 flex-1 xl:p-5 lg:p-4 md:p-3 p-2 dark:bg-darkBlue">
        <Outlet />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
