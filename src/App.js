import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemList from './components/itemlist/ItemList';
import ProductDetails from './components/productDetails/ProductDetails';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Nike Air Max 90',
      brand: 'Nike',
      price: 120.99,
      description: 'Iconic Nike sneakers with Air Max technology.',
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      brand: 'Adidas',
      price: 149.99,
      description: 'Comfortable and stylish running shoes from Adidas.',
    },
    {
      id: 3,
      name: 'Puma Future Rider',
      brand: 'Puma',
      price: 89.99,
      description: 'Retro-inspired sneakers with a modern twist from Puma.',
    }
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(updatedCart);
    setTotal(total - productToRemove.price);
  };

  return (
    <AppContext.Provider value={{ products, cart, total, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const App = () => {
  return (
    <Router>
      <AppProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};

export default App;
