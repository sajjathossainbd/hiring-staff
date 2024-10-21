/* eslint-disable react/prop-types */
function PrimaryBtnBlue({ icon, title }) {
  return (
    <button
      className={`flex items-center justify-center gap-3 bg-blue hover:bg-darkBlue dark:hover:bg-white text-white px-7 py-4 rounded-md font-medium transition-all duration-500 ease-in-out `}
    >
      <p className="text-16 text-white">{title}</p>
      <div className="text-xl">{icon}</div>
    </button>
  );
}

export default PrimaryBtnBlue;
