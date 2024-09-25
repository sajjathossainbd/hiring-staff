import PropTypes from "prop-types";

const DefaultInput = ({ label, type, placeholder }) => {
  return (
    <div className="mb-4 w-full">
      <div className="label">
        <span className="font-semibold">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-4 rounded-md bg-bgLightWhite text-14 outline-none px-3 
                   focus:bg-white border border-bgLightWhite 
                   focus:border-blue placeholder:opacity-100 focus:placeholder:opacity-0 transition-all duration-500"
      />
    </div>
  );
};

DefaultInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DefaultInput;
