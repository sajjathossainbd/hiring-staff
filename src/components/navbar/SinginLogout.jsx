import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BsPerson } from "react-icons/bs";
import useCurrentUser from "../../hooks/useCurrentUser";
function SinginLogout() {
  const { user, logOut } = useAuth();

  const { role, currentCandidate, currentRecruiter } = useCurrentUser();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  console.log(role);

  return (
    <div className="xl:block hidden">
      {user ? (
        <div className="dropdown dropdown-end" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="rounded-full">
              <div className="relative">
                <div className="w-30 h-30 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full rounded-full h-full object-cover"
                    src={
                      (role === "candidate" && currentCandidate?.photo_url) ||
                      (role === "candidate" && currentRecruiter?.logo) ||
                      user?.photoURL
                    }
                    alt="User photo"
                  />
                </div>
              </div>
            </div>
          </div>

          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white dark:bg-darkBlue rounded-md px-4 py-6 z-[1] mt-3 w-52 shadow gap-1 "
            >
              <li>
                <Link
                  to={"dashboard/dashboard-main"}
                  className="justify-between text-16 py-2"
                >
                  Dashboard
                </Link>
              </li>
              {/* <li>
                <Link className="text-16 py-2">Settings</Link>
              </li> */}
              <li>
                <Link
                  className="justify-between text-16 py-2F"
                  onClick={logOut}
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <Link to="/sign-in">
          <button className="bg-white py-[4px] px-8 rounded-md  flex items-center justify-start gap-2 mt-1">
            <div className="text-blue text-3xl">
              <BsPerson />
            </div>
            <div className="flex flex-col gap-0 relative mb-[18px] ">
              <p className="text-[10px] dark:text-gray">Account</p>
              <p className="text-14 font-medium absolute mt-[18px] dark:text-gray">
                Login
              </p>
            </div>
          </button>
        </Link>
      )}
    </div>
  );
}

export default SinginLogout;
