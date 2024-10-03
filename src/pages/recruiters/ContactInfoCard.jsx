const ContactInfoCard = ({ icon, title, titleAnswer, link }) => {
  return (
    <div className="dark:text-white flex gap-4 items-center">
      <div className="text-3xl">{icon}</div>
      <div className="flex flex-col">
        <p className="font-medium text-[13px]">{title}</p>
        <a className="text-[13px] font-semibold" href={link} target="_blank">
          {titleAnswer}
        </a>
      </div>
    </div>
  );
};

export default ContactInfoCard;
