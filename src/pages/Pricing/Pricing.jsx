import { IoHomeOutline } from 'react-icons/io5';
import './pricing.css'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PricingCard from '../../components/shared/PricingCard';

const Pricing = () => {
    return (
        <div>
            <div className="banner">
                <div className='container mx-auto flex lg:flex-row flex-col gap-3 items-center justify-between'>
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
            </div>
            <div className='max-w-6xl mx-auto lg:mt-20 mt-10 px-2'>
                <div className='text-center space-y-2'>
                    <h3>Pricing Table</h3>
                    <p className='text-18'>Choose The Best Plan That’s For You</p>
                </div>
                <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10'>
                    <PricingCard
                        category={"Basic"}
                        price={"19"}
                        description={"For most businesses that want to optimize web queries"}
                        service1={"Unlimited updates"}
                        service2={"Custom designs & features"}
                        service3={"Custom instructors"}
                        service4={"Custom permissions"}
                        service5={"Free support ticket"}
                    />
                    <PricingCard
                        category={"Basic"}
                        price={"29"}
                        description={"For most businesses that want to optimize web queries"}
                        service1={"Unlimited updates"}
                        service2={"Custom designs & features"}
                        service3={"Custom instructors"}
                        service4={"Custom permissions"}
                        service5={"Free support ticket"}
                    />
                    <PricingCard
                        category={"Basic"}
                        price={"39"}
                        description={"For most businesses that want to optimize web queries"}
                        service1={"Unlimited updates"}
                        service2={"Custom designs & features"}
                        service3={"Custom instructors"}
                        service4={"Custom permissions"}
                        service5={"Free support ticket"}
                    />

                </div>
            </div>
        </div>
    );
};

export default Pricing;