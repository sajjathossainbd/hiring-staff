/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import axios from "axios";
import Swal from "sweetalert2";

const CheckoutForm = ({ price }) => {
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const { currentUser } = useCurrentUser();
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (price > 0) {
            axios.post('http://localhost:5000/create-payment-intent', { price })
                .then(res => {
                    console.log("Payment Intent Response:", res.data); // Verify the response format
                    if (res.data && res.data.clientSecret) {
                        setClientSecret(res.data.clientSecret);
                    } else {
                        console.error("Invalid clientSecret received:", res.data);
                        setError("Failed to retrieve payment configuration. Please try again.");
                    }
                })
                .catch(error => {
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
        if (!clientSecret || clientSecret === '') {
            setError("Invalid payment configuration. Please try again later.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                email: currentUser?.email || 'anonymous',
                name: currentUser?.name || 'anonymous',
            },
        });

        if (error) {
            setError(error.message);
            return;
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethod.id,
        });

        if (confirmError) {
            setError(confirmError.message);
        } else if (paymentIntent.status === 'succeeded') {
            Swal.fire({
                title: "Payment Complete",
                text: "Your payment was successful!",
                icon: "success",
            });
        }
    };


    useEffect(() => {
        console.log("Current Client Secret:", clientSecret); // This should show the correct client secret
    }, [clientSecret]);



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': { color: '#aab7c4' },
                        },
                        invalid: { color: '#9e2146' },
                    },
                }}
            />
            <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay ${price}
            </button>
            {error && <p className="text-sm text-red-700 my-2">{error}</p>}
        </form>
    );
};

export default CheckoutForm;
