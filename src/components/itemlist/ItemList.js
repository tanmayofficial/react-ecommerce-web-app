import React from 'react';
import { useAppContext } from '../../App';

const ItemList = () => {
  const { products, addToCart } = useAppContext();

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
