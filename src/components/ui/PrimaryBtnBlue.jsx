/* eslint-disable react/prop-types */
function PrimaryBtnBlue({ icon, title }) {
  return (
    <button className="flex items-center justify-center bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue text-white px-4 py-3 sm:px-4 sm:py-3  md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-md font-medium transition-all duration-500 ease-in-out gap-2">
      <div className="text-xl text-white">{icon}</div>
      <p className="text-12 text-white">{title}</p>
    </button>
  );
}

export default PrimaryBtnBlue;
