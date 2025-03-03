import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Order Confirmation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your order has been placed successfully! Thank you for shopping with
          ShoppyGlobe.
        </p>

        <button
          onClick={handleGoHome}
          className="bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
