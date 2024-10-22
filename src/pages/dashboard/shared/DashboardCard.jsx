/* eslint-disable react/prop-types */

const DashboardCard = ({ logo, title, quantity }) => {

  const bgColorMap = {
    "Total Users": 'bg-gradient-to-r from-green to-lime-400',
    "Total Message": 'bg-gradient-to-r from-cyan-600 to-pink-400',
    "Total Jobs": 'bg-gradient-to-r from-yellow-600 to-amber-400',
    "Total Applications": 'bg-gradient-to-r from-red-600 to-pink-400',
    "My Applications": 'bg-gradient-to-r from-red-600 to-pink-400',
    "Total Recruiters": 'bg-gradient-to-r from-blue to-teal-400',
    "Total Shortlisted": 'bg-gradient-to-r from-indigo-600 to-purple-400',
  };

  const logoBg = bgColorMap[title] || 'bg-blue';

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="700"
      className={`${logoBg} py-5 px-3 flex xl:flex-row lg:flex-col md:flex-col flex-row items-center justify-around rounded-md`}>
        
      <div className="space-y-1">
        <h3 className="text-white font-light">{quantity}</h3>
        <p className="text-white">{title}</p>
      </div>
      <div className='p-4 rounded-lg'>
        <h2 className="text-white">
          {logo}
        </h2>
      </div>

    </div>
  );
};

export default DashboardCard;
