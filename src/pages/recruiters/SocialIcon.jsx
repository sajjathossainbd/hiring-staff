const SocialIcon = ({ link, mediaName }) => {
  return (
    <a
      className="btn btn-outline btn-secondary bg-bgLightWhite border-none text-xl"
      href={link}
      target="_blank"
    >
      {mediaName}
    </a>
  );
};

export default SocialIcon;
