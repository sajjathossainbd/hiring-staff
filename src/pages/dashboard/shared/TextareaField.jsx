/* eslint-disable react/prop-types */
function TextareaField({ placeholder, label, name, value, onChange, icon }) {
  return (
    <div>
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

        <div className="lg:mb-6 md:mb-4 sm:mb-3 max-sm:mb-3">
          <textarea
            rows="4"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            id="input-group-1"
            className="bg-white border border-lightGray text-gray text-14 rounded-md focus:ring-blue focus:border-blue block w-full p-3 outline-none transition-all duration-500  
          dark:bg-softGreen dark:text-gray dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue dark:focus:border-blue"
          />
        </div>
      </div>
    </div>
  );
}

export default TextareaField;
