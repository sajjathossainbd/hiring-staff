/* eslint-disable react/prop-types */


function SelectField({ label, name, options = [], onChange, value, icon }) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-2">
        <div className="text-18 dark:text-blue">{icon}</div>
        <label
          htmlFor="input-group-1"
          className="text-14 font-medium text-gray-900 dark:text-white flex items-center "
        >
          {label}
        </label>
      </div>
      <div className="flex lg:mb-6 md:mb-4 sm:mb-3 max-sm:mb-3">
        <label htmlFor="states" className="sr-only">
          Choose a state
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
        >
          {options.length > 0 ? (
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))
          ) : (
            <option value="">No options available</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default SelectField;
