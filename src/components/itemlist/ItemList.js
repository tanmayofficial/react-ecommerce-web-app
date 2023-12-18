import React, { useState } from "react";
import { useAppContext } from "../../utilities/AppProvider";
import { Link } from "react-router-dom";
import nikeImage from "../../assets/nike_air_max.jpg";
import { IoCloseSharp } from "react-icons/io5";

const ItemList = () => {
  const { products, addToCart } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (product) => {
    setSelectedImage(product.image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

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
              <br />
              <div className="self-end">
                <button
                  className="bg-gray-800 text-white px-4 py-2 my-2 rounded hover:text-gray-300"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 m-2 rounded hover:text-gray-300">
                  <Link to={`/product/${product.id}`} className="">
                    View Details
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={nikeImage}
                alt={product.name}
                className={`w-56 rounded cursor-pointer ${
                  selectedImage === product.image && "scaled-image"
                }`}
                onClick={() => handleImageClick(product)}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-3xl w-full p-1 bg-white rounded-lg relative">
            <img
              src={nikeImage}
              alt="Selected"
              className="w-full h-full object-contain rounded"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl cursor-pointer mt-2 mr-2"
              onClick={handleCloseImage}
            >
              <span className="text-3xl">
                <IoCloseSharp />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
