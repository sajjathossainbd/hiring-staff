import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import StarRatings from "react-star-ratings";

function TeamInfoCard(member) {
  const { img, name, role, review, location, facebook, instagram, github, linkedin } = member;

  return (
    <div className="rounded-xl border border-[#D2D4D7] hover:-translate-y-1 hover:shadow-md hover: shadow-[#D2D4D7] transition-all duration-200  lg:p-12 md:p-10 sm:p-8 max-sm:p-8 flex items-center justify-center flex-col text-center">
      <img className="h-[100px] w-[100px] rounded-full" src={img} alt="" />
      <div className="mt-3">
        <h5>{name}</h5>
        <p className="text-14">{role}</p>
      </div>
      <div className="mt-2 text-center">
        <div className="mt-1 flex gap-[1px] text-14 items-center">
          <StarRatings
            rating={review}
            starRatedColor="#ffd250"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="1px"
          />
          <p className="ml-2">{review}</p>
        </div>
        <p className="flex items-center gap-2 text-12">
          <CiLocationOn /> {location}
        </p>
      </div>
      <div className="mt-6 flex gap-3 text-lightGray">
        <a target="_blank" href={facebook}>
          <p className="socialBorder">
            <FaFacebookF />
          </p>
        </a>
        <a target="_blank" href={github}>
          <p className="socialBorder">
            <FaGithub />
          </p>
        </a>
        <a target="_blank" href={linkedin}>
          <p className="socialBorder">
            <FaLinkedinIn />
          </p>
        </a>
        <a target="_blank" href={instagram}>
          <p className="socialBorder">
            <FaInstagram />
          </p>
        </a>
      </div>
    </div>
  );
}

export default TeamInfoCard;
