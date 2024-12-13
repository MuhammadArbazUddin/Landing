import React from "react";
import {
  FaMedium,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <p className="mb-4">
              <span role="img" aria-label="USA Flag">
                🇺🇸
              </span>{" "}
              30 N Gould St Ste R, Sheridan, WY 82801
            </p>
            <p className="mb-4">
              <span role="img" aria-label="Estonia Flag">
                🇪🇪
              </span>{" "}
              Vesivärava tn 50 201, Tallinn, 10152
            </p>
            <p className="mb-2">hi@upsilonit.com</p>
            <p>+1 (650) 995-5553</p>
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
            <h4 className="font-bold mb-4 text-xl">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Discovery phase services
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  For early stage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  For growth stage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Slack bot development
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  CTO as a service
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-gray-400 font-bold last-of-type:underline text-sm"
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
                <a href="/" className="text-xl font-bold hover:text-gray-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-bold hover:text-gray-400">
                  Tech due diligence
                </a>
              </li>
              <li>
                <a href="/" className="text-xl font-bold hover:text-gray-400">
                  MVP calculator
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-xl font-bold hover:text-gray-400">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-400">
                  Studio approach
                </a>
              </li>
              <li>
                <a href="/" className="text-sm hover:text-gray-400">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-xl">Case studies</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Insights
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Best startup tools
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Startup FAQs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-base text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2024 Upsilon LLC. All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-white">
              Terms of Service
            </a>
            <a href="/" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
