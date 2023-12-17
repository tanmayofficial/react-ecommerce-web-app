import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/itemList/ItemList';
import ProductDetails from './components/productDetails/ProductDetails';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Navbar from './components/navbar/Navbar';

const App = () => {

  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </Router>
  );
};

export default App;
