import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import useCurrentUser from '../../hooks/useCurrentUser';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const PaymentForm = () => {
  const location = useLocation();
  const { category, price } = location.state || {};
  const { currentUser } = useCurrentUser();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Secure Payment</h2>
        {currentUser && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p>Welcome, <span className="text-blue font-semibold">{currentUser.name}!</span></p>
            <strong>Email: {currentUser.email}</strong>
          </div>
        )}
        {category && (
          <div className="mb-6 p-4 bg-blue-500 text-white rounded-md">
            <p className="text-lg">You have selected the <span className="font-bold">{category}</span> plan.</p>
          </div>
        )}
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentForm;
