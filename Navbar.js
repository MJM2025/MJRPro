import React, { useState } from 'react';
import logo from '../assets/mjrpro-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-mjrpro-light p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="MJRPro Logo" className="h-10 mr-2" />
          <div className="text-mjrpro-dark text-2xl font-bold">MJRPro</div>
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-mjrpro-dark focus:outline-none hover:bg-mjrpro-accent hover:text-mjrpro-light px-3 py-2 rounded"
          >
            Menu
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#shops" className="block px-4 py-2 text-mjrpro-dark hover:bg-mjrpro-accent hover:text-mjrpro-light">Shops</a>
              <a href="#products" className="block px-4 py-2 text-mjrpro-dark hover:bg-mjrpro-accent hover:text-mjrpro-light">Products</a>
              <a href="#orders" className="block px-4 py-2 text-mjrpro-dark hover:bg-mjrpro-accent hover:text-mjrpro-light">Orders</a>
              <a href="#webhooks" className="block px-4 py-2 text-mjrpro-dark hover:bg-mjrpro-accent hover:text-mjrpro-light">Webhooks</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
