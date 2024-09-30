import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';
import CheckoutForm from './CheckoutForm';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const PaymentForm = () => {
  const location = useLocation();
  const { category, price } = location.state || {};
  const { currentUser } = useCurrentUser();


  return (
    <>
      <Helmet>
        <title>Hiring Staff - Payment</title>
      </Helmet>
      <div className="flex items-center justify-center lg:p-6 p-2 xl:mt-16 lg:mt-10 md:mt-7">
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 mb-8">💳 Secure Payment</h2>
          {currentUser && (
            <div className="mb-6 lg:p-4 p-2 bg-blue-50 border-l-4 border-blue-400 rounded-lg shadow-md">
              <p className="text-lg">Welcome, <span className="text-blue-700 font-bold">{currentUser.name}!</span></p>
              <strong className="text-gray-600">Email: {currentUser.email}</strong>
            </div>
          )}
          {category && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg">
              <p className="text-lg">You have selected the <span className="font-bold underline">{category}</span> plan.</p>
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
