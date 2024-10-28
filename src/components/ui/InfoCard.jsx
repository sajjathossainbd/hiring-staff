/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function InfoCard({ icon, label, name, link }) {
  const displayLink = link?.length > 20 ? `${link.slice(0, 20)}...` : link;

  return (
    <div className="flex gap-4">
      <div className="bg-bgDeepBlue p-3 text-blue rounded-md text-2xl inline-block">
        {icon}
      </div>
      <div>
        <p className="text-12">{label}</p>
        <p className="text-16 font-medium capitalize">{name}</p>
        <p className="text-16 font-medium">
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue hover:underline"
          >
            {displayLink}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
