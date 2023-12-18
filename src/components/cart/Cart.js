import React from "react";
import { useAppContext } from "../../utilities/AppProvider";
import { Link } from "react-router-dom";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

const Cart = () => {
  const { cart, removeFromCart, calculateTotal } = useAppContext();

  const images = require.context("../../assets/images/", false, /\.(jpg)$/);
  const imagePaths = images.keys().map(images);

  const getImageByName = (imageName) => {
    const imagePath = imagePaths.find((path) => path.includes(imageName));
    return imagePath || null;
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    NotificationManager.warning(`${item.name} removed from cart`);
  };

  return (
    <div className="">
      <h2 className="text-3xl font-bold mx-4 mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-3 gap-4 mx-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 flex flex-col items-center"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)} each</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <img
              src={getImageByName(item.image)}
              alt={item.name}
              className="w-24 h-auto object-cover rounded my-4"
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="col-span-3 flex justify-between">
          <p className="text-2xl font-bold mt-4">Total: ${calculateTotal()}</p>
          <Link to="/checkout">
            <button className="bg-gray-800 text-white px-4 py-2 my-2 rounded hover:text-gray-300">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Cart;
