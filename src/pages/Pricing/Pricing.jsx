import { IoHomeOutline } from 'react-icons/io5';
import './pricing.css'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <div className="banner py-14">
                <div className='container mx-auto flex items-center justify-between'>
                    <div>
                        <h3>
                            Pricing
                        </h3>
                        <p className='text-18 mt-3'>
                            Pricing built to suits teams of all sizes.
                        </p>
                    </div>
                    <div className='flex items-center gap-2 bg-white px-3 py-1 rounded text-14'>
                        <Link to={"/"} className='flex items-center gap-[3px] hover:text-darkBlue'>
                            <IoHomeOutline /> Hiring Stuff
                        </Link>
                        <p className='flex items-center gap-[2px]'>
                            <IoIosArrowForward /> Pricing Plan
                        </p>
                    </div>
                </div>
                <div className='max-w-4xl'>

                </div>
            </div>
        </div>
    );
};

export default Pricing;