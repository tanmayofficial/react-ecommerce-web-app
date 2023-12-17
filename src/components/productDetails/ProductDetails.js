import React from 'react';
import { useAppContext } from '../../utilities/AppProvider';

const ProductDetails = () => {
  const { products } = useAppContext();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <h3 className="text-xl font-semibold mb-2">{products.name}</h3>
      <p className="text-gray-600">${products.price.toFixed(2)}</p>
      <p className="mt-4">{products.description}</p>
    </div>
  );
};

export default ProductDetails;