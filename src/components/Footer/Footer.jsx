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
              <span role="img" aria-label="USA Flag"></span> Toronto, Ontario
              Canada
            </p>
            {/* <p className="mb-4 font-sans">
              <span role="img" aria-label="Estonia Flag">
                🇪🇪
              </span>{" "}
              Vesivärava tn 50 201, Tallinn, 10152
            </p> */}
            <p className="mb-2 font-sans">info@sociallywired.com</p>
            <p className="font-sans">+1 519 697 8425</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons */}
              <a
                href="https://www.instagram.com/sociallywiredinc/profilecard/?igsh=MTNnMnFzdWx1YW5pZQ%3D%3D"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
                <FaInstagram />
              </a>
              {/* <a href="/" className="hover:text-gray-400 text-xl">
                <FaTwitter />
              </a> */}
              <a
                href="https://www.linkedin.com/company/socially-wired-inc/"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/people/Socially-wired-Inc/61565652324656/?mibextid=LQQJ4d&rdid=3xRLjcFFVTLi7Uot&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCh4GsGhjoMJXrrVo%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
                className="hover:text-gray-400 text-xl"
              >
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
                  Youtube
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Meta
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Snapchat
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-400 font-sans">
                  Tictok
                </a>
              </li>
              {/* <li>
                <a
                  href="/"
                  className="hover:text-gray-400 font-bold last-of-type:underline text-sm font-sans"
                >
                  All services
                </a>
              </li> */}
            </ul>
          </div>

          {/* Pricing & Company */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#our-work"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#our-offers"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Our Offers
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="text-xl font-bold hover:text-gray-400 font-sans"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <ul className="space-y-2"> */}

            {/* <li>
                <a href="/" className="text-sm hover:text-gray-400 font-sans">
                  Studio approach
                </a>
              </li> */}
            {/* <li>
                <a href="/" className="text-sm hover:text-gray-400 font-sans">
                  About us
                </a>
              </li> */}
            {/* </ul> */}
          </div>

          {/* Resources */}
          {/* <div>
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
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-base text-gray-400 flex flex-col md:flex-row justify-between">
          <p className="font-sans">©Techxudo All Rights Reserved</p>
          <div className="flex space-x-4">
            <NavLink
              to="/privacy-policy"
              className="hover:text-white font-sans"
            >
              Privacy Policy
            </NavLink>
            {/* <a href="/" className="hover:text-white font-sans">
              Terms of Service
            </a>
            <a href="/" className="hover:text-white font-sans">
              Cookie Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
