import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo/Title */}
      <Link to="/" className="text-lg font-bold flex items-center">
        E-Commerce App
      </Link>

      {/* Cart Icon with Quantity */}
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          {/* Add your mobile menu icon or button here */}
          <button className="text-white">☰</button>
        </div>

        {/* Cart Link */}
        <Link to="/cart" className="relative flex items-center">
          🛒
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
            {totalItems}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
