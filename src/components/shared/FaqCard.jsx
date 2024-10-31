/* eslint-disable react/prop-types */


const FaqCard = ({ title, description }) => {
    return (
        <div className='lg:p-8 p-4 boxBorderHoverBlue'>
            <h4>{title}</h4>
            <p>
                {description}
            </p>
        </div>
    );
};

export default FaqCard;