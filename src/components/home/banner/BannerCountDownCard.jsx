/* eslint-disable react/prop-types */

function BannerCountDownCard({ data }) {
  const { icon, title, number } = data || {};
  return (
    <div className="boxBorderHoverBlue px-4 py-5 flex items-center gap-3 transition-transform duration-500 group hover:-translate-y-1">
      {/* Icon */}
      <div className="text-5xl font-normal text-blue bg-bgDeepBlue p-4 rounded-md group-hover:bg-blue group-hover:text-white transition-all duration-800">
        {icon}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2">
        <h4>{number} +</h4>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default BannerCountDownCard;
