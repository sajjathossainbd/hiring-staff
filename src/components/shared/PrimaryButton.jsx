/* eslint-disable react/prop-types */
function PrimaryButton({ title, icon, logout, formSubmit, onClickBtn }) {
  return (
    <button
      onClick={onClickBtn}
      className={`flex items-center justify-center bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue text-white px-4 py-3 sm:px-4 sm:py-3  md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-md font-medium transition-all duration-500 ease-in-out gap-2 ${
        logout ? "bg-red-500 hover:bg-red-700" : ""
      }  text-white px-4 ${formSubmit ? "w-full" : ""}`}
    >
      {title} {icon}
    </button>
  );
}

export default PrimaryButton;
