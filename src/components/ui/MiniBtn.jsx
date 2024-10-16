/* eslint-disable react/prop-types */
function MiniBtn({ style, icon, value }) {
  return (
    <p
      className={`flex items-center p-2 gap-x-1 text-12 rounded-md hover:-translate-y-[1px] transition-all duration-500 dark:text-blue ${style}`}
    >
      <div className="text-base">{icon}</div>
      {value}
    </p>
  );
}

export default MiniBtn;
