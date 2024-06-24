import React from "react";
import Header from "../components/Header";
import AboutPage from "./AboutPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import ContactPage from "./ContactPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <AboutPage />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactPage />
    </div>
  );
};

export default HomePage;
