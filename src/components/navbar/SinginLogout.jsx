import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { PiSignInFill } from "react-icons/pi";
function SinginLogout() {
  const { user, logOut } = useAuth();

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


  return (
    <div>
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
                    src={user?.
                      photoURL}
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
              <li>
                <Link className="text-16 py-2">Settings</Link>
              </li>
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
          <button className="btn-primary text-blue bg-white font-medium py-2 px-8 rounded-md text-18 tracking-wide flex items-center gap-2 mt-1">
            Sign in <PiSignInFill />
          </button>
        </Link>
      )}
    </div>
  );
}

export default SinginLogout;
