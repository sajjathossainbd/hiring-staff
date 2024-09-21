/* eslint-disable react/prop-types */
function PrimaryButton({ title, icon, formSubmit, onClickBtn }) {
  return (
    <button
      onClick={onClickBtn}
      className={`flex items-center justify-center gap-3 btn bg-blue hover:bg-darkBlue hover:-translate-y-1 transition-all duration-300 text-white px-4 ${formSubmit ? 'w-full' : ''}`}
    >
      {icon} {title}
    </button>
  );
}

export default PrimaryButton;
