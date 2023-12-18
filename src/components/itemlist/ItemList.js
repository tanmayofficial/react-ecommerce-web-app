import React, { useState } from "react";
import { useAppContext } from "../../utilities/AppProvider";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const images = require.context("../../assets/images", false, /\.(jpg)$/);
const imagePaths = images.keys().map(images);

const ItemList = () => {
  const { products, addToCart } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (product) => {
    setSelectedImage(product.image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const getImageByName = (imageName) => {
    const imagePath = imagePaths.find((path) => path.includes(imageName));
    return imagePath ? `.${imagePath}` : null;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    NotificationManager.success(`${product.name} added to cart`);
  };

  return (
    <div className="mx-4">
      <h2 className="text-3xl font-bold mb-4 sm:ml-2">Item List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 mb-4 flex flex-col">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                {product.name}
              </h3>
            </Link>
            <img
              src={getImageByName(product.image)}
              alt={product.name}
              className="w-full rounded cursor-pointer mb-2"
              onClick={() => handleImageClick(product)}
            />

            <div className="flex mt-auto justify-between">
              <span>
                <p className="text-gray-600 text-lg">
                  <b>Price:</b> ${product.price.toFixed(2)}
                </p>
                <Link to={`/product/${product.id}`} className="text-blue-800">
                  View Details
                </Link>
              </span>
              <button
                className="bg-gray-800 text-white px-4 py-2 my-2 rounded hover:text-gray-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute top-2 right-2 text-white text-3xl cursor-pointer mt-2 mr-2"
            onClick={handleCloseImage}
          >
            <span className="text-3xl">
              <IoCloseSharp />
            </span>
          </button>
          <div className="max-w-full sm:max-w-3xl w-full p-1 bg-white rounded-lg relative">
            <img
              src={getImageByName(selectedImage)}
              alt="Selected"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      )}
      <NotificationContainer />
    </div>
  );
};

export default ItemList;
