import React from "react";
import {
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <p className="mb-4 font-sans">
              <span role="img" aria-label="USA Flag">
                🇺🇸
              </span>{" "}
              30 N Gould St Ste R, Sheridan, WY 82801
            </p>
            <p className="mb-4 font-sans">
              <span role="img" aria-label="Estonia Flag">
                🇪🇪
              </span>{" "}
              Vesivärava tn 50 201, Tallinn, 10152
            </p>
            <p className="mb-2 font-sans">hi@upsilonit.com</p>
            <p className="font-sans">+1 (650) 995-5553</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a href="/" className="hover:text-gray-400 text-xl">
                <FaMedium />
              </a>
              <a href="/" className="hover:text-gray-400 text-xl">
                <FaInstagram />
              </a>
              <a href="/" className="hover:text-gray-400 text-xl">
                <FaTwitter />
              </a>
              <a href="/" className="hover:text-gray-400 text-xl">
                <FaLinkedin />
              </a>
              <a href="/" className="hover:text-gray-400 text-xl">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono font-bold mb-4 text-xl">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Discovery phase services
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  For early stage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  For growth stage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Slack bot development
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  CTO as a service
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 font-bold last-of-type:underline text-sm font-sans"
                >
                  All services
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing & Company */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Tech due diligence
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  MVP calculator
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-400 font-sans">
                  Studio approach
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-400 font-sans">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono font-bold mb-4 text-xl">Case studies</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Insights
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Best startup tools
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Startup FAQs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-base text-gray-400 flex flex-col md:flex-row justify-between">
          <p className="font-sans">© 2024 Upsilon LLC. All Rights Reserved</p>
          <div className="flex space-x-4">
            <NavLink
              to="/privacy-policy"
              className="hover:text-white font-sans"
            >
              Privacy Policy
            </NavLink>
            <a href="/" className="hover:text-white font-sans">
              Terms of Service
            </a>
            <a href="/" className="hover:text-white font-sans">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
