import React from 'react';
import { useAppContext } from '../../App';

const ProductDetails = () => {
  const {products} = useAppContext();
  return (
    <div>
      <h2>Product Details</h2>
      <h3>{products.name}</h3>
      <p>${products.price.toFixed(2)}</p>
      <p>{products.description}</p>
    </div>
  );
};

export default ProductDetails;
