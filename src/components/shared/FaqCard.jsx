/* eslint-disable react/prop-types */
import { IoMdArrowForward } from "react-icons/io";


const FaqCard = ({ title, description }) => {
    return (
        <div className='lg:p-8 p-4 boxBorderHoverBlue'>
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