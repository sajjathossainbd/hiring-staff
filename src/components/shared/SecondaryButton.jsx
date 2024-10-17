/* eslint-disable react/prop-types */
function SecondaryButton({ title, icon }) {
  return (
    <button className="bg-bgDeepBlue hover:bg-blue hover:text-white py-3 px-4 rounded-md text-blue font-medium  transition-all duration-500 text-14 flex gap-1 items-center">
      {title} <div className="text-lg">{icon}</div>
      
    </button>
  );
}

export default SecondaryButton;
