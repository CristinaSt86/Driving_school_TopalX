
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 

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
        <ul className={`gap-6 flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-primary  md:bg-transparent w-full md:w-auto left-0 md:left-auto top-28 md:top-auto ${isOpen ? 'flex items-center' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Acasa |
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Despre noi |
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Servicii |
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Testimoniale |
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Galerie |
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:scale-125 hover:-rotate-6 hover:text-secondary block md:inline-block p-2 md:p-0 transition-transform duration-200">
              Contact |
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
