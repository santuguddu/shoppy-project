import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // To get cart items
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { clearCart } from "../redux/reducers/cartSlice";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "creditCard",
  });

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items); // Cart items from Redux store
  console.log(cart);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here

    // ----------- If valid, proceed with order confirmation -----------
    alert("Order placed successfully!");
    dispatch(clearCart());

    // ----------- Redirect to confirmation page -----------
    navigate("/orderConfirmation");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <BackButton />

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* ZIP Code Field */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Payment Method Field */}
        <div className="mb-4 col-span-1 md:col-span-2">
          <label className="block text-gray-600 mb-2">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </form>

      {/* Order Summary */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-700">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} - {item.quantity} x ${item.price}
            </span>
            <span>${item.quantity * item.price}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Total:</span>
          <span>
            ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
