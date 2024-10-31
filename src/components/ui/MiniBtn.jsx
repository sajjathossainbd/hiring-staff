/* eslint-disable react/prop-types */
function MiniBtn({ style, icon, value }) {
  return (
    <div className="">
      <div
        className={`flex items-center p-2 gap-x-1 text-12 rounded-md dark:text-blue hover:text-blue ${style}`}
      >
        <div className="text-base">{icon}</div>
        {value}
      </div>
    </div>
  );
}

export default MiniBtn;
