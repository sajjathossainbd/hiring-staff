/* eslint-disable react/prop-types */

const DashboardCard = ({ logo, title, quantity }) => {

  const bgColorMap = {
    Users: 'bg-blue',
    Message: 'bg-blue',
    Jobs: 'bg-green-500',
    Applications: 'bg-red-500',
    Recruiters: 'bg-purple-500',
    Shortlisted: 'bg-yellow-500',
  };

  const logoBg = bgColorMap[title] || 'bg-gray-300';


  return (
    <div className="bg-bgDeepBlue dark:bg-blue py-3 px-3 flex xl:flex-row lg:flex-col md:flex-col flex-row items-center gap-3 rounded-lg">
      <div className={`p-4 rounded-lg ${logoBg}`}>
        <h3 className="text-white">
          {logo}
        </h3>
      </div>
      <div>
        <h5>{title}</h5>
        <h5 className="text-lightBlue">{quantity}</h5>
      </div>
    </div>
  );
};

export default DashboardCard;
