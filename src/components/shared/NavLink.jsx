/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NavLink = ({ navTitle, to }) => {
  return (
    <Link
      to={to}
      className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all"
    >
      {navTitle}
    </Link>
  );
};

export default NavLink;
