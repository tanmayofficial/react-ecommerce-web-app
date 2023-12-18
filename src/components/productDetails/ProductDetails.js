import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../../utilities/AppProvider";
import image from "../../assets/nike_air_max.jpg";

const ProductDetails = () => {
  const { products } = useAppContext();
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="mx-4">
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <div className="flex border p-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4">{product.description}</p>
        </div>
        <div className="flex-shrink-0">
          <img src={image} alt={product.name} className="w-56" />
        </div>
      </div>
        <Link to="/" className="text-blue-500">
      <button className="mt-4">
          Back to Product List
      </button>
        </Link>
    </div>
  );
};

export default ProductDetails;
