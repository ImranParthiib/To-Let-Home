import React from "react";
import logo from "../assets/logo.png"; 

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Use the imported logo here */}
          <img
            src={logo}
            alt="To Let Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-2xl font-bold">To Let</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:underline">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
