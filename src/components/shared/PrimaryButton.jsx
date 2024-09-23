/* eslint-disable react/prop-types */
function PrimaryButton({ title, icon, logout, formSubmit, onClickBtn }) {
  return (
    <button
      onClick={onClickBtn}
      className={`flex items-center justify-center gap-3 btn bg-blue hover:bg-darkBlue dark:hover:bg-white dark:hover:text-blue ${
        logout ? "bg-red-500 hover:bg-red-700" : ""
      } hover:-translate-y-1 transition-all duration-300 text-white px-4 ${
        formSubmit ? "w-full" : ""
      }`}
    >
      {icon} {title}
    </button>
  );
}

export default PrimaryButton;
