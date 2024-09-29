import { useLocation } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";

const PaymentForm = () => {

    const location = useLocation();
    const { category } = location.state || {};

    const { currentUser } = useCurrentUser();

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Payment Form</h2>

            {/* Display User Information */}
            {currentUser && (
                <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded">
                    <p className="text-lg">
                        Welcome, <span className="font-bold">{currentUser.name}</span>!
                    </p>
                    <p>Email: {currentUser.email}</p>
                </div>
            )}

            {/* Display Selected Plan Category */}
            {category && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
                    <p className="text-lg">
                        You have selected the <span className="font-bold">{category}</span> plan.
                    </p>
                </div>
            )}

            {/* Payment Form Fields */}
            <form>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="cardNumber">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="1234 5678 9012 3456"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="cardName">
                        Cardholder Name
                    </label>
                    <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="expiryDate">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="cvc">
                            CVC
                        </label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="123"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Make Payment
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;
