import { CgProfile } from "react-icons/cg";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import {
  MdManageHistory,
  MdOutlineAnalytics,
  MdOutlinePayment,
  MdPlaylistAddCheck,
  MdPostAdd,
} from "react-icons/md";
import { RxResume } from "react-icons/rx";
import { VscGitStashApply } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import DashboardFooter from "../pages/dashboard/shared/DashboardFooter";
import { FaUserCog } from "react-icons/fa";
import { useEffect, useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useAuth from "../hooks/useAuth";
import { IoIosLogOut } from "react-icons/io";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [admin, setAdmin] = useState(false);
  const [recruiter, setRecruiter] = useState(false);

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser?.role === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }

    if (currentUser?.role === "recruiter") {
      setRecruiter(true);
    } else {
      setRecruiter(false);
    }
  }, [currentUser]);

  return (
    <div>
      <div className="flex lg:flex-row flex-col inter">
        {/* Sidebar */}
        <div className="relative lg:w-64 w-full">
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
              <ul className="menu inter space-y-2 p-4 w-64 min-h-full bg-bgLightWhite dark:bg-darkBlue text-black font-semibold">
                {admin && (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/dashboard-main"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <ImProfile />
                          Dashboard
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-users"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <FaUserCog /> Manage User
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/all-payment-history"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <MdOutlinePayment /> All Payments
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/admin-analytics"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <MdOutlineAnalytics /> Admin Analytics
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}

                {recruiter && (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/dashboard-main"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <ImProfile />
                          Dashboard
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/company-profile"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <ImProfile /> Company Profile
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/post-job"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <MdPostAdd /> Post Job
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-jobs"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <MdManageHistory /> Manage Jobs
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/all-applicants"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <VscGitStashApply /> All Applicants
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/shortlist"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <MdPlaylistAddCheck /> Shortlist
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}
                {!admin && !recruiter && (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/dashboard-main"
                        className={({ isActive }) =>
                          `flex items-center gap-2 py-2 px-4 rounded-md ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <ImProfile />
                          Dashboard
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/my-resume"
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 hover:bg-transparent ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <RxResume /> My Resume
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/applied-jobs"
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 hover:bg-transparent ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          {" "}
                          <VscGitStashApply />
                          Applied Jobs
                        </span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/shortlisted-jobs"
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 hover:bg-transparent ${isActive
                            ? "border-l-4 border-blue text-blue dark:text-blue"
                            : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                          }`
                        }
                      >
                        <span className="flex gap-1 items-center">
                          <FaArrowUpShortWide /> Shortlisted Jobs
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}

                {/* For all */}
                <div className="divider divider-info" />

                <li>
                  <NavLink
                    to="/dashboard/my-profile"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 hover:bg-transparent ${isActive
                        ? "border-l-4 border-blue text-blue dark:text-blue"
                        : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                      }`
                    }
                  >
                    <span className="flex gap-1 items-center">
                      <CgProfile /> My Profile
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/my-payments"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 hover:bg-transparent ${isActive
                        ? "border-l-4 border-blue text-blue dark:text-blue"
                        : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                      }`
                    }
                  >
                    <span className="flex gap-1 items-center">
                      <MdOutlinePayment /> My Payments
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 px-4 hover:bg-transparent ${isActive
                        ? "border-l-4 border-blue text-blue dark:text-blue"
                        : "hover:border-l-4 hover:border-blue dark:hover:text-blue dark:text-bgDeepBlue"
                      }`
                    }
                  >
                    <span className="flex gap-1 items-center">
                      <IoHomeOutline /> Home
                    </span>
                  </NavLink>
                </li>
                <li>
                  <button onClick={logOut} className="text-red-500">
                    <IoIosLogOut /> Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="bg-white flex-1 xl:p-10 lg:p-8 md:p-5 p-3 dark:bg-darkBlue">
          <Outlet />
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
