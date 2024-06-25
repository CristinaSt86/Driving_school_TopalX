import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const TopHeader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white text-lg flex justify-between items-center p-3">
      <div>
        <span className="inline-flex items-center mr-4">
          <FaPhone className="text-black mr-2" />
          0736 470 629
        </span>
        <span className="inline-flex items-center">
          <FaEnvelope className="text-black mr-2" />
         topalxtrans@gmail.com
        </span>
      </div>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mr-4">
          <FaFacebook className="text-black" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <FaInstagram className="text-black" />
        </a>
      </div>
    </div>
  );
}

export default TopHeader;
