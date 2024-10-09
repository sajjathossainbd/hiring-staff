/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const CardPagination = ({ currentPage, totalPages, onPageChange }) => {
    const [pageNumber, setPageNumber] = useState(currentPage - 1);

    useEffect(() => {
        setPageNumber(currentPage - 1); // Sync pageNumber with currentPage prop
    }, [currentPage]);

    const updatePageNumber = (num) => {
        if (num < 0 || num >= totalPages) return; // Prevent out-of-bounds
        setPageNumber(num);
        onPageChange(num + 1); // Pass page number back to parent (1-indexed)
    };

    return (
        <div className='flex select-none justify-center items-center gap-3'>
            {/* Left Arrow */}
            <div
                onClick={() => updatePageNumber(pageNumber - 1)}
                className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${pageNumber === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
            >
                <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Page Numbers */}
            <div className='flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full'>
                {[...Array(totalPages).keys()].map((item) => (
                    <div
                        key={item}
                        onClick={() => updatePageNumber(item)}
                        className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${pageNumber === item ? 'bg-sky-500 text-white' : 'bg-white'} border-sky-300 font-semibold text-gray-700 py-[6px] rounded-full`}
                    >
                        {item + 1}
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <div
                onClick={() => updatePageNumber(pageNumber + 1)}
                className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${pageNumber === totalPages - 1 ? 'cursor-not-allowed opacity-50' : ''}`}
            >
                <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};
