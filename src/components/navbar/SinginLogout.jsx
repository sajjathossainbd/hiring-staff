import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
            <div className="">
              <div className="relative">
                <img className="w-30 rounded-full" src={user.photoURL} />
                <span className="top-[-1px] left-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </div>
          </div>

          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-md px-4 py-6 z-[1] mt-3 w-52 shadow gap-1 "
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
                <Link
                  to={"/dashboard/my-profile"}
                  className="justify-between text-16 py-2"
                >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a className="text-16 py-2">Settings</a>
              </li>
              <li>
                <a className="justify-between text-16 py-2F" onClick={logOut}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <Link to="/sign-in">
          <button className="text-blue bg-white font-semibold py-4 px-8 rounded-md text-18 tracking-wide">
            Sign in
          </button>
        </Link>
      )}
    </div>
  );
}

export default SinginLogout;
