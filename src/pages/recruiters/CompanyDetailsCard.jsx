/* eslint-disable react/prop-types */
const CompanyDetailsCard = ({ icon, title, titleAnswer }) => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl text-gray dark:text-white">{icon}</div>
      <p className="text-gray text-[13px] dark:text-white font-medium">{title}</p>
      <p className="font-semibold text-black dark:text-white text-14">{titleAnswer}</p>
    </div>
  );
};

export default CompanyDetailsCard;
