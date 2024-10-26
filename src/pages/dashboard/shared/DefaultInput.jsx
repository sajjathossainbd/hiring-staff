/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const DefaultInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  icon,
}) => {
  return (
    <div>
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-14 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative lg:mb-6 md:mb-4 sm:mb-3 max-sm:mb-3">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-18 dark:text-blue">
          {icon}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          id="input-group-1"
          className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full ps-10 p-2.5 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
        />
      </div>
    </div>
  );
};

DefaultInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default DefaultInput;
