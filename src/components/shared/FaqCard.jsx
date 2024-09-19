/* eslint-disable react/prop-types */
import { IoMdArrowForward } from "react-icons/io";


const FaqCard = ({ title, description }) => {
    return (
        <div className='lg:p-8 p-4 border border-lightGray rounded-lg space-y-4 group hover:-translate-y-1 transition-all hover:shadow-sm'>
            <h4>{title}</h4>
            <p>
                {description}
            </p>
            <p className='flex gap-2 items-center group-hover:text-blue cursor-pointer'>
                Keep Reading
                <IoMdArrowForward />
            </p>
        </div>
    );
};

export default FaqCard;