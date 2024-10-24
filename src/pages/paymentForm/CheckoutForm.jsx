/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../utils/axios";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price, category }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (price > 0) {
      axiosInstance
        .post("/create-payment-intent", { price })
        .then((res) => {
          if (res.data && res.data.clientSecret) {
            setClientSecret(res.data.clientSecret);
          } else {
            console.error("Invalid clientSecret received:", res.data);
            setError(
              "Failed to retrieve payment configuration. Please try again."
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
          setError("Error initializing payment. Please try again later.");
        });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // Check if clientSecret is valid before proceeding
    if (!clientSecret || clientSecret === "") {
      setError("Invalid payment configuration. Please try again later.");
      return;
    }

    setLoading(true); // Start loading

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false); // Stop loading
      return;
    } else {
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false); // Stop loading
    } else if (paymentIntent.status === "succeeded") {
      const paymentDetails = {
        name: user?.name,
        email: user?.email,
        photo: user?.photo_URL,
        category: category,
        date: new Date().toLocaleDateString(),
        status: "pending",
        price: price,
        paymentType: "Stripe",
        transactionId: paymentIntent.id,
      };

      try {
        const res = await axiosInstance.post(
          "/payment-history",
          paymentDetails
        );
        if (res.data.insertedId) {
          Swal.fire({
            title: "Payment Complete",
            text: "Your payment was successful!",
            icon: "success",
          });
          elements.getElement(CardElement).clear();
          setClientSecret("");
        } else if (res.data.error) {
          Swal.fire({
            title: "Payment Failed",
            text: res.data.error,
            icon: "error",
          });
        }
      } catch (error) {
        setError("You already have a plan in this category.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="lg:p-4 p-2 border-2 border-gray-300 rounded-md shadow-sm">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "14px",
                color: "#000",
                "::placeholder": { color: "#000" },
              },
              invalid: { color: "#FF6347" },
            },
          }}
        />
      </div>
      <button
        className={`w-full py-3 px-6 text-white bg-gradient-to-r from-blue to-purple-500 rounded-lg hover:from-blue-500 hover:to-purple-400 transition-transform transform hover:scale-105 disabled:opacity-50 ${loading ? "hover:scale-100" : ""
          }`}
        type="submit"
        disabled={!stripe || !clientSecret || loading}
      >
        {loading ? "Processing..." : `Pay $${price}`}
      </button>
      {error && <p className="text-sm text-red-600 my-2">{error}</p>}
    </form>
  );
};

export default CheckoutForm;
