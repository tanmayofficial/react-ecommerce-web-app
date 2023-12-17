import React from 'react'
import { useAppContext } from '../../utilities/AppProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useAppContext();

  return (
    <div className="container mx-auto mb-4">
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 text-white">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-gray-300">
                  Cart<span className="ml-1">{cart.length > 0 && `(${cart.length})`}</span>
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar