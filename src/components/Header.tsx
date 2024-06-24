import React from "react";
import Navigation from "./Navigation";
import logo from '../images/logo.jpg'
import '../index.css'
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return <header className="bg-secondary flex items-center justify-between p-4">
    <Link to="/">
    <img src={logo} alt="logo" className="w-16 h-auto" />
    </Link>
    <Navigation />
  </header>;
};

export default Header;
