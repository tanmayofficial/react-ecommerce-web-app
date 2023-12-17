import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../utilities/AppProvider';

const ProductDetails = () => {
  const { products } = useAppContext();
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className='mx-4 border p-4'>
      <h2 className="text-3xl font-bold mb-4">Product Details</h2>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
