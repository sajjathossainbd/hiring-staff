// RecruiterBrowser.js
import React from 'react';

const RecruiterBrowser = ({ alphabet, selectedLetter, setSelectedLetter, setCurrentPage }) => {
  return (
    <div>
      <div className="bg-cover bg-center mb-14 rounded-lg bg-[#F8FAFF]">
        <div className="relative container mx-auto flex flex-col lg:flex-col gap-3 items-center justify-center">
          <div>
            <h3 className="flex justify-center">Browse Recruiters</h3>
            <p>Browse through recruiters by name and see who's hiring</p>
          </div>
          <div className="flex flex-wrap justify-center bg-white p-3 rounded-md">
            {alphabet.map((letter) => (
              <button
                key={letter}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-full md:text-base ${
                  selectedLetter === letter
                    ? 'bg-[#F8FAFF] text-blue'
                    : 'bg-white text-lightGray hover:text-blue'
                }`}
                onClick={() => {
                  setSelectedLetter(letter);
                  setCurrentPage(1); // Reset to the first page after filtering
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
