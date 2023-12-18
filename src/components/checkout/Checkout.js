import React, { useState } from "react";
import { useAppContext } from "../../utilities/AppProvider";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Checkout = () => {
  const { cart, calculateTotal } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      isValid = false;
      errors.name = "Name is required";
    }

    if (!formData.address.trim()) {
      isValid = false;
      errors.address = "Address is required";
    }

    if (!formData.paymentMethod.trim()) {
      isValid = false;
      errors.paymentMethod = "Payment Method is required";
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      NotificationManager.success(
        "Success",
        "Your order has been placed successfully"
      );
      setFormData({
        name: "",
        address: "",
        paymentMethod: "",
      });
    } else {
      NotificationManager.error("Error", "Please fill out all required fields");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 border rounded shadow">
      <NotificationContainer />
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${
              formErrors.name ? "border-red-500" : ""
            }`}
            required
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-600"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${
              formErrors.address ? "border-red-500" : ""
            }`}
            required
          />
          {formErrors.address && (
            <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-semibold text-gray-600"
          >
            Payment Method:
          </label>
          <input
            type="text"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className={`w-full border rounded px-3 py-2 mt-1 ${
              formErrors.paymentMethod ? "border-red-500" : ""
            }`}
            required
          />
          {formErrors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">
              {formErrors.paymentMethod}
            </p>
          )}
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.name}</span>
                <span>
                  ${item.price.toFixed(2)} x {item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="text-2xl font-bold mt-4">Total: ${calculateTotal()}</p>

          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 my-2 rounded hover:text-gray-300"
          >
            Complete Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
