/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SocialIconButton = ({ icon, media }) => {
  return (
    <Link className="inline-block" to={""}>
      <button className="btn min-h-[2rem] h-[2rem] btn-outline border-lightGray btn-secondary flex items-center gap-2">
        {" "}
        {icon}
        {media}
      </button>
    </Link>
  );
};

export default SocialIconButton;
