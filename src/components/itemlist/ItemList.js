import React from 'react';
import { useAppContext } from '../../utilities/AppProvider';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const { products, addToCart } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 ml-7">Item List</h2>
      <div className="grid grid-cols-2 gap-4 ml-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 mb-4 mx-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                {product.name}
              </h3>
            </Link>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:text-gray-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className="block mt-2 text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
