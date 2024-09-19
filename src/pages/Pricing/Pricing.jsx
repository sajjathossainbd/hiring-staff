import PricingCard from '../../components/shared/PricingCard';
import FaqCard from '../../components/shared/FaqCard';
import NewsLetter from '../../components/home/NewsLetter';
import TinnyBanner from '../../components/shared/TinnyBanner';
import Testimonial from "../aboutUs/Testimonial";

const Pricing = () => {
    return (
        <div>
            <TinnyBanner
            title={"Pricing"}
            subTitle={"Pricing built to suits teams of all sizes."}
            currentPath={"Pricing Plan"}
            />
            <div className='max-w-6xl mx-auto lg:mt-20 mt-10 px-2 p-0'>
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
            <div className='container mx-auto lg:mt-20 mt-10 px-2 p-0'>
                <div className='text-center space-y-2'>
                    <h3>Frequently Asked Questions</h3>
                    <p className='text-18 max-w-2xl inline-block'>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p>
                </div>
                <div className='mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8'>

                    <FaqCard
                        title={"I have promotional or discount code?"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                    <FaqCard
                        title={"Where is my order? Quisque molestie"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                    <FaqCard
                        title={"How can I return an item purchased online?"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                    <FaqCard
                        title={"What are the delivery types you use?"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                    <FaqCard
                        title={"How can I pay for my purchases?"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                    <FaqCard
                        title={"What are the delivery types you use?"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nibh vitae quam blandit venenatis. Duis vehicula magna ut neque tempus tristique. Nam venenatis turpis euismod arcu aliquet finibus. Vivamus nec vulputate ex, vitae condimentum ante. Suspendisse metus metus, laoreet nec arcu vel, venenatis cursus libero."}
                    />
                </div>
            </div>
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Pricing;