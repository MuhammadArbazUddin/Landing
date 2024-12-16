import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <span className="font-bold text-2xl">upsilon</span>
        <span className="text-yellow-500 text-2xl">*</span>
      </div>

      {/* Menu Items */}
      <div className="hidden md:block">
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
        <button className="hidden md:block button-54">Get In Touch</button>
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
        <div
          className={`sm:p-16 absolute top-full left-0 right-0 bg-white shadow-md md:z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 text-gray-700 text-sm font-medium">
            {/* Left Section */}
            <div>
              <h3 className="font-bold text-2xl mb-2">Services</h3>
              <ul className="space-y-2 text-lg">
                <li>Discovery phase services</li>
                <li>For early-stage startups</li>
                <li>For growth-stage startups</li>
                <li>Slack bot development</li>
                <li>CTO as a service</li>
                <li>All services</li>
              </ul>
              <h3 className="font-bold mt-6 mb-2 text-2xl">Products</h3>
            </div>

            {/* Center Section */}
            <div>
              <h3 className="font-bold text-2xl mb-2">Pricing</h3>
              <h3 className="font-bold text-2xl mb-2">Tech Due Diligence</h3>
              <h3 className="font-bold text-2xl mb-2">MVP Calculator</h3>
              <h3 className="font-bold text-2xl mt-6 mb-2">Company</h3>
              <ul className="space-y-2 text-lg">
                <li>Studio approach</li>
                <li>About us</li>
              </ul>
            </div>

            {/* Center Section */}
            <div>
              <h3 className="font-bold text-xl mb-2">Pricing</h3>
              <h3 className="font-bold text-xl mb-2">Tech Due Diligence</h3>
              <h3 className="font-bold text-xl mb-2">MVP Calculator</h3>
              <h3 className="font-bold text-xl mb-2">Pricing</h3>
              <h3 className="font-bold text-xl mb-2">Tech Due Diligence</h3>
              <h3 className="font-bold text-xl mb-2">MVP Calculator</h3>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="font-bold text-2xl mb-2">Contact</h3>
              <ul className="text-lg space-y-2">
                <li>hi@upsilonit.com</li>
                <li>+1 (650) 995-5553</li>
                <li>30 N Gould St Ste R, Sheridan, WY, USA</li>
                <li>Vesivärava tn 50 201, Tallinn, Estonia</li>
              </ul>
              <div className="flex space-x-4 mt-4 text-xl">
                <span className="cursor-pointer">M</span>
                <span className="cursor-pointer">T</span>
                <span className="cursor-pointer">F</span>
                <span className="cursor-pointer">In</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
