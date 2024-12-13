import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <span className="text-xl font-bold">upsilon</span>
        <span className="text-yellow-500 text-2xl">*</span>
      </div>

      {/* Menu Items */}
      <div className=" md:block">
        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
          <li className="relative group">
            <span className="cursor-pointer">Services</span>
          </li>
          <li className="flex items-center space-x-1">
            <span>Products</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
          <li className="relative group">
            <span className="cursor-pointer">Company</span>
          </li>
        </ul>
      </div>

      {/* Call to Action and Menu */}
      <div className="flex items-center space-x-5">
        {/* Get in Touch Button */}
        <button className=" md:block button-54">Get In Touch</button>
        {/* Hamburger Menu */}
        <div
          className="flex items-center justify-center w-12 h-12 border border-black rounded-full cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <div
              className={`w-4 h-[2px] bg-black transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-4 h-[2px] bg-black transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-4 h-[2px] bg-black transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md: z-50">
          <ul className="flex flex-col py-4 px-6 space-y-4 text-sm font-medium text-gray-700">
            <li>
              <span className="cursor-pointer">Services</span>
            </li>
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span className="cursor-pointer">Company</span>
            </li>
            <li>
              <button className="button-54 w-full">Get In Touch</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
