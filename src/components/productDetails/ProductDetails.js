import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../utilities/AppProvider";
import { IoArrowBackSharp } from "react-icons/io5";

const ProductDetails = () => {
  const { products } = useAppContext();
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const images = require.context("../../assets/images/", false, /\.(jpg)$/);
  const imagePaths = images.keys().map(images);

  const getImageByName = (imageName) => {
    const imagePath = imagePaths.find((path) => path.includes(imageName));
    return imagePath || null;
  };

  return (
    <div className="mx-4">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="flex border p-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
        </div>
        <div className="flex-shrink-0 mr-8">
          <img src={getImageByName(product.image)} alt={product.name} className="w-52" />
        </div>
      </div>
      <Link to="/" className="text-blue-500">
        <button className="mt-4 flex items-center">
          <span className="mr-2">
            <IoArrowBackSharp />
          </span>
          Back to Product List
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;
