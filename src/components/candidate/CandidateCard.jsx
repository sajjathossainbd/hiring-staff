import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";

function CandidateCard({ candidate }) {
  const {
    name,
    language,
    ratings,
    about_me,
    skills,
    location,
    charge_per_hour,
    img,
  } = candidate;
  return (
    <div className=" border border-lightGray rounded-lg overflow-hidden shadow-sm bg-bgLightBlue hover:bg-white hover:-translate-y-1 duration-300">
      <div className="p-6">
        <div className="flex items-center">
          <img src={img} alt="Profile" className="w-16 h-16 rounded-full" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{language}</p>
          </div>
        </div>

        <div className="flex items-center mt-3">
          <div className="flex items-center">
            {/* rating deu */}
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635L15.878 18 10 15z" />
            </svg>
          </div>
          <span className="ml-2 text-sm text-gray-600">({ratings})</span>
        </div>

        <p className="mt-4 text-gray-700 text-sm">{about_me.slice(0, 80)}...</p>

        <div className="mt-4  flex flex-wrap">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="bg-softLightBlue m-1 py-1 px-3 rounded-sm text-12"
            >
              {skill}
            </button>
          ))}
        </div>
        <hr className="border-lightGray mt-2" />

        <div className="mt-4 text-12 flex justify-between items-center">
          <span className="flex items-center gap-1">
            <CiLocationOn />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <CiClock2 />${charge_per_hour}/hour
          </span>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
