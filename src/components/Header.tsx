import React from "react";
import Navigation from "./Navigation";
import logo from "../images/logo.jpg";
import "../index.css";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <TopHeader />
      <header className="bg-secondary flex items-center justify-between p-4 shadow-2xl fixed top-12 left-0 right-0 z-50 ">
        <Link to="/" className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-auto border rounded-full"
          />
          <p className="tracking-widest font-extrabold">- scoala de soferi -</p>
        </Link>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
