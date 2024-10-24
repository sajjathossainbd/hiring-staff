/* eslint-disable react/prop-types */
import { TbCategoryPlus } from "react-icons/tb";

function SelectField({ label, name, options = [], onChange, value }) {
  return (
    <div>
      <label
        htmlFor="input-group-1"
        className="block mb-2 text-14 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex lg:mb-6 md:mb-4 sm:mb-3 max-sm:mb-3">
        <button
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-16 font-medium text-center bg-white border border-lightGray text-gray text-14 rounded-s-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-softGreen dark:text-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="button"
        >
          <TbCategoryPlus />
        </button>
        <label htmlFor="states" className="sr-only">
          Choose a state
        </label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="bg-white border border-lightGray text-gray text-14 rounded-e-md border-s-gray-100 dark:border-s-gray border-s-2 block w-full p-2.5 outline-none dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
