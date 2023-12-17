import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/itemList/ItemList';
import ProductDetails from './components/productDetails/ProductDetails';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import AppProvider, { useAppContext } from './utilities/AppProvider';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const { total } = useAppContext();
  console.log("total", total)

  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <div className="mt-8 text-center">
            <p className="text-gray-600">Total: ${total.toFixed(2)}</p>
          </div>
      </Router>
  );
};

export default App;
