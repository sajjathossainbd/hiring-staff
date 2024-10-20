/* eslint-disable react/prop-types */
function PrimaryOutlineBtn({ icon, title }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-blue transition-all duration-500 ease-in-out hover:bg-bgDeepBlue hover:px-7 py-4 rounded-md font-medium `}
    >
      <p className="text-16 text-blue">{title}</p>
      <div className="text-xl">{icon}</div>
    </div>
  );
}

export default PrimaryOutlineBtn;
