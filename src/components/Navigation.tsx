
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white p-4 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </div>
        <ul className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto ${isOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Acasa
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Despre noi
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Servicii
            </Link>
          </li>
          <li>
            <Link to="testimonials" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Testimoniale
            </Link>
          </li>
          <li>
            <Link to="/Gallery" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-secondary hover:underline block md:inline-block p-2 md:p-0">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
