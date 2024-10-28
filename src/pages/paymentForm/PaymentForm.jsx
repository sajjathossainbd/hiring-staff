import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe(
  "pk_test_51PL8uBP0ShXafyXS5FODE9CyG33SubCyCZ0KOn2HjaW91HHuGUo6On1Sz6WYQRywehzSEMB1nenzn3CLB8IlISTy004zqTEhGT"
);

const PaymentForm = () => {
  const location = useLocation();
  const { category, price } = location.state || {};
  const { user } = useAuth();
  console.log(price);

  return (
    <>
      <Helmet>
        <title>Hiring Staff - Payment</title>
      </Helmet>
      <div className="flex items-center justify-center lg:p-6 p-2 xl:mt-16 lg:mt-10 md:mt-7">
        <div className="w-full max-w-lg bg-white dark:bg-lightGray shadow-2xl rounded-3xl p-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 mb-8">
            💳 Secure Payment
          </h2>
          {user && (
            <div className="mb-6 lg:p-4 p-2 dark:bg-lightGray border-l-4 border-blue rounded-lg shadow-md">
              <p className="text-lg">
                Welcome,{" "}
                <span className="text-blue-700 font-bold">
                  {user?.name}!
                </span>
              </p>
              <strong className="text-gray-600">
                Email: {user?.email}
              </strong>
            </div>
          )}
          {category && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
              <p className="text-lg">
                You have selected the{" "}
                <span className="font-bold text-blue underline">
                  {category}
                </span>{" "}
                plan.
              </p>
            </div>
          )}
          <Elements stripe={stripePromise}>
            <CheckoutForm category={category} price={price} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
