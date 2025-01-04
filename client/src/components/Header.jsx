import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 p-4 w-full">
      <div className="text-white text-xl font-semibold flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="xxxx" alt="Logo" className="h-8 mr-2" />
        </Link>

        <div className="flex space-x-6 text-red-500">
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/products">Products</Link>
          <Link to="/supplier-orders">Supplier Orders</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
