import React from 'react';
import { useAppContext } from '../../utilities/AppProvider';

const ItemList = () => {
  const { products, addToCart } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 ml-4">Item List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
