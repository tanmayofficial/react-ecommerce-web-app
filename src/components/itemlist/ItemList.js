import React from "react";
import { useAppContext } from "../../utilities/AppProvider";
import { Link } from "react-router-dom";
import nikeImage from "../../assets/nike_air_max.jpg";

const ItemList = () => {
  const { products, addToCart } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 ml-7">Item List</h2>
      <div className="grid grid-cols-2 gap-4 mx-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 mb-4 flex">
            <div className="flex-1">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <div className="self-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 my-2 rounded hover:text-gray-300"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-sky-500/50 text-white px-4 py-2 m-2 rounded hover:text-gray-300">
                  <Link to={`/product/${product.id}`} className="">
                    View Details
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src={nikeImage} alt={product.name} className="w-56 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
