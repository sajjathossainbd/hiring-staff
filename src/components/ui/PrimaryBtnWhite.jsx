/* eslint-disable react/prop-types */
function PrimaryBtnWhite({ icon, title }) {
  return (
    <button className="flex items-center justify-center gap-2 bg-white group hover:bg-darkBlue dark:hover:bg-white text-blue rounded-md font-medium px-7 md:px-5 md:py-3  lg:px-6 lg:py-3  sm:px-4 sm:py-2 max-sm:px-3 max-sm:py-1  transition-all duration-500 ease-in-out">
      <div className="text-xl group-hover:text-white">{icon}</div>
      <p className="text-12 text-blue group-hover:text-white">{title}</p>
    </button>
  );
}

export default PrimaryBtnWhite;
