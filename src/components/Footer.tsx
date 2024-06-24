import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-75 text-white text-center py-2">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-2 space-x-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-gray-400"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          {/* <a
            href="https://twitter.com"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter className="w-6 h-6" />
          </a> */}
          <a
            href="mailto:someone@example.com"
            className="text-white hover:text-gray-400"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm mb-2">&copy; 2024 TopalX. Toate drepturile rezervate.</p>
        <nav>
          <ul className="flex justify-center space-x-4 text-sm">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
