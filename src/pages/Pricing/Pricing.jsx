import PricingCard from "../../components/shared/PricingCard";
import FaqCard from "../../components/shared/FaqCard";
import NewsLetter from "../../components/home/NewsLetter";
import TinnyBanner from "../../components/shared/TinnyBanner";
import Testimonial from "../../components/aboutUs/Testimonial";
import { Helmet } from "react-helmet-async";

const Pricing = () => {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - Pricing</title>
      </Helmet>
      <TinnyBanner
        title={"Pricing"}
        subTitle={"Pricing built to suit teams of all sizes."}
        currentPath={"Pricing Plan"}
      />
      <div className="max-w-6xl mx-auto lg:mt-20 mt-10 px-2 p-0">
        <div className="text-center space-y-2">
          <h3>Pricing Table</h3>
          <p className="text-18">Choose The Best Plan That’s For You</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10">
          <PricingCard
            category={"Basic"}
            price={"19"}
            description={"Perfect for individuals looking to start a small project."}
            service1={"Basic Support"}
            service2={"5 Projects Limit"}
            service3={"Single User Access"}
            service4={"Limited Analytics"}
            service5={"Email Support"}
            linkTo="/paymentForm"
          />
          <PricingCard
            category={"Standard"}
            price={"49"}
            description={"Ideal for small teams or startups to get things moving."}
            service1={"Priority Support"}
            service2={"Unlimited Projects"}
            service3={"Team Collaboration"}
            service4={"Advanced Analytics"}
            service5={"Phone & Email Support"}
            linkTo="/paymentForm"
          />
          <PricingCard
            category={"Premium"}
            price={"99"}
            description={"Best suited for large teams or enterprises."}
            service1={"24/7 Premium Support"}
            service2={"Unlimited Projects & Users"}
            service3={"Dedicated Account Manager"}
            service4={"Custom Integrations"}
            service5={"Advanced Security Features"}
            linkTo="/paymentForm"
          />
        </div>
      </div>
      <div className="container lg:mt-20 mt-10">
        <div className="text-center space-y-2">
          <h3>Frequently Asked Questions</h3>
          <p className="text-18 max-w-2xl inline-block">
            Have questions? Find answers to some common queries below.
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-8">
          <FaqCard
            title={"I have a promotional or discount code. How can I use it?"}
            description={
              "You can apply your discount code during the checkout process. Just enter the code in the 'Discount' field, and the applicable discount will be automatically applied to your total amount."
            }
          />
          <FaqCard
            title={"How can I track my order status?"}
            description={
              "Once your order is placed, you will receive a confirmation email with tracking details. You can also track your order in the 'My Orders' section of your account."
            }
          />
          <FaqCard
            title={"What is your return policy for digital products?"}
            description={
              "We offer a 14-day return policy for digital products. Please contact our support team to process your return if you are not satisfied with your purchase."
            }
          />
          <FaqCard
            title={"Do you offer custom packages?"}
            description={
              "Yes, we do offer custom packages tailored to your business needs. Please reach out to our sales team for more information."
            }
          />
          <FaqCard
            title={"What payment methods do you accept?"}
            description={
              "We accept all major credit cards, PayPal, and bank transfers. For enterprise plans, we also offer invoicing options."
            }
          />
          <FaqCard
            title={"Can I upgrade or downgrade my plan?"}
            description={
              "Absolutely! You can upgrade or downgrade your plan anytime through your account settings. Changes will be applied to your next billing cycle."
            }
          />
        </div>
      </div>
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Pricing;
