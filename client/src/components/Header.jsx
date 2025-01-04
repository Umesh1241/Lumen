import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineInventory } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-800 p-2 w-full">
      <div className="text-white text-xl font-semibold flex items-center justify-between">
        <Link to="/" className="">
        <div className='h-25 w-25 border-red-500 border-2 rounded-full p-2 ml-4'>
        <MdOutlineInventory className='text-5xl' />
        </div>
        </Link>

        <div className="flex space-x-6 text-red-500">
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
