const CompanyDetailsCard = ({ icon, title, titleAnswer }) => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl text-gray">{icon}</div>
      <p className="text-gray text-[13px] font-medium">{title}</p>
      <p className="font-semibold text-black text-14">{titleAnswer}</p>
    </div>
  );
};

export default CompanyDetailsCard;
