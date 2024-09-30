import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function SinginLogout() {
  const { user, logOut } = useAuth();
  return (
    <div>
      
      {user ? (
        <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
          <button onClick={logOut} className="text-red-500 font-semibold">
            Sign out
          </button>
        </li>
      ) : (
        <li className="cursor-pointer px-6 py-2 text-darkBlue hover:bg-sky-600">
          <Link to="/sign-in">
            <button className="text-darkBlue font-semibold">Sign in</button>
          </Link>
        </li>
      )}
    </div>
  );
}

export default SinginLogout;
