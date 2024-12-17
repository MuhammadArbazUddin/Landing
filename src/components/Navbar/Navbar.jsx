import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (event.target.closest(".navbar") === null) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between py-4 bg-[#fff] border-b sticky top-0 z-50 px-4 sm:px-16 navbar">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <a href="/" aria-label="Home">
          <img
            src="https://sociallywiredinc.com/wp-content/uploads/thegem-logos/logo_5ed0fad380d2d79934f28a88e69d3c71_1x.png"
            alt="Company Logo"
          />
        </a>
      </div>

      {/* Menu Items */}

      {/* Call to Action and Menu */}
      <div className="flex items-center space-x-10">
        <div className="hidden md:block">
          <ul className="flex items-center space-x-10 text-sm font-bold text-gray-700">
            <li className="relative group">
              <a
                href="#services"
                className="cursor-pointer"
                onClick={handleLinkClick}
              >
                Services
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <a href="#about-us" onClick={handleLinkClick}>
                About Us
              </a>
            </li>
            <li className="">
              <a href="#our-work" onClick={handleLinkClick}>
                Our Work
              </a>
            </li>
            <li className="relative group ">
              <a
                href="#our-offers"
                className="cursor-pointer"
                onClick={handleLinkClick}
              >
                Our Offers
              </a>
            </li>
          </ul>
        </div>
        {/* Get in Touch Button */}
        <a
          href="#contact-us"
          className="hidden md:block button-54"
          onClick={handleLinkClick}
        >
          Get In Touch
        </a>
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
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="font-mono font-bold text-2xl"
                    onClick={handleLinkClick}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about-us"
                    className="font-mono font-bold text-2xl"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#our-work"
                    className="font-mono font-bold text-2xl"
                    onClick={handleLinkClick}
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#our-offers"
                    className="font-mono font-bold text-2xl"
                    onClick={handleLinkClick}
                  >
                    Our Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="font-mono font-bold text-2xl"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="space-y-2 font-sans text-lg">
                <li>Discovery phase services</li>
                <li>CTO as a service</li>
                <li>All services</li>
              </ul>
              <h3 className="font-mono font-bold mt-6 mb-2 text-2xl">
                Products
              </h3>
            </div>

            {/* Center Section */}
            <div>
              <h3 className="font-mono font-bold text-2xl mb-2">Pricing</h3>
              <h3 className="font-mono font-bold text-2xl mb-2">
                Tech Due Diligence
              </h3>
              <h3 className="font-mono font-bold text-2xl mb-2">
                MVP Calculator
              </h3>
              <h3 className="font-mono font-bold text-2xl mt-6 mb-2">
                Company
              </h3>
              <ul className="space-y-2 font-sans text-lg">
                <li>Studio approach</li>
                <li>About us</li>
              </ul>
            </div>

            {/* Center Section */}
            <div>
              <h3 className="font-mono font-bold text-xl mb-2">Pricing</h3>
              <h3 className="font-mono font-bold text-xl mb-2">
                Tech Due Diligence
              </h3>
              <h3 className="font-mono font-bold text-xl mb-2">
                MVP Calculator
              </h3>
              <h3 className="font-mono font-bold text-xl mb-2">Pricing</h3>
              <h3 className="font-mono font-bold text-xl mb-2">
                Tech Due Diligence
              </h3>
              <h3 className="font-mono font-bold text-xl mb-2">
                MVP Calculator
              </h3>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="font-mono font-bold text-2xl mb-2">Contact</h3>
              <ul className="font-sans text-lg space-y-2">
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
