import React from "react";
import { useAppContext } from "../../utilities/AppProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, calculateTotal } = useAppContext();

  return (
    <div className="flex flex-col justify-between h-full mx-4">
      <div>
        <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="border p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <p className="text-2xl font-bold mt-4">Total: ${calculateTotal()}</p>
        <Link to="/checkout">
          <button className="bg-blue-500 text-white px-4 py-2 my-4 rounded mr-2 hover:text-gray-300">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
