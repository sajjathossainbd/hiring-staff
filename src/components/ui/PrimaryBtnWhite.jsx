/* eslint-disable react/prop-types */
function PrimaryBtnWhite({ icon, title }) {
  return (
    <button className="flex items-center justify-center gap-3 bg-white group hover:bg-darkBlue dark:hover:bg-white text-blue rounded-md font-mediumpx-7 py-4  transition-all duration-500 ease-in-out">
      <div className="text-xl group-hover:text-white">{icon}</div>
      <p className="text-16 text-blue group-hover:text-white">{title}</p>
    </button>
  );
}

export default PrimaryBtnWhite;
