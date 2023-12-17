import React from 'react';
import { useAppContext } from '../../utilities/AppProvider';


const Cart = () => {
  const { cart, removeFromCart, total } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="border p-4 mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
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
      <p className="text-2xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
