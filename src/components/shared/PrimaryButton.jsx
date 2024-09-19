/* eslint-disable react/prop-types */
function PrimaryButton({ title, icon, onClickBtn }) {
  return (
    <button
      onClick={onClickBtn}
      className="flex items-center justify-center gap-3 btn bg-blue hover:bg-darkBlue hover:-translate-y-1 transition-all duration-300 text-white px-4"
    >
      {icon} {title}
    </button>
  );
}

export default PrimaryButton;
