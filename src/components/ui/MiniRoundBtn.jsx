/* eslint-disable react/prop-types */
function MiniRoundBtn({ style, icon, value, colorClass }) {
  return (
    <div
      className={`flex items-center py-3 px-6 gap-x-1 text-12 rounded-full  dark:text-gray ${style} ${colorClass}`}
    >
      <div className="text-16">{icon}</div>
      {value}
    </div>
  );
}

export default MiniRoundBtn;
