import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/register" className="hover:text-gray-200">
              Register
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-200">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
