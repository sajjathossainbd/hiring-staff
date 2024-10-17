/* eslint-disable react/prop-types */

const RecruiterBrowser = ({
  alphabet,
  selectedLetter,
  setSelectedLetter,
  setCurrentPage,
}) => {
  return (
    <div>
      <div className="bg-cover bg-center mb-14 rounded-lg bg-[#F8FAFF] dark:bg-darkBlue">
        <div className="relative container mx-auto flex flex-col lg:flex-col gap-3 items-center justify-center">
          <div>
            <h3 className="flex justify-center">Browse Recruiters</h3>
            <p>Browse through recruiters by name and see who&apos;s hiring</p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center bg-bgLightWhite dark:bg-darkBlue p-3 rounded-md">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full md:text-base ${
                  selectedLetter === letter
                    ? "bg-[#F8FAFF] dark:bg-blue dark:text-white text-blue"
                    : "bg-white text-lightGray hover:text-blue hover:bg-bgLightBlue"
                }`}
                onClick={() => {
                  setSelectedLetter(letter);
                  setCurrentPage(1);
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterBrowser;
