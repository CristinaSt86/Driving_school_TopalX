import React from "react";
import { Helmet } from "react-helmet";
import AboutPage from "./AboutPage";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import ContactPage from "./ContactPage";

const HomePage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Școala de Șoferi TopalX - Acasă</title>
        <meta
          name="description"
          content="Aflați mai multe despre Școala de Șoferi TopalX. Oferim cursuri de conducere auto și moto cu instructori profesioniști. Înscrie-te acum!"
        />
        <meta
          name="keywords"
          content="școală de șoferi, cursuri de conducere, permis auto, permis moto, instructori auto, "
        />
      </Helmet>
      <div className="bg-custom-home bg-center bg-cover bg-fixed text-white p-24 text-center mt-40 mb-8 h-auto">
        <h1 className="text-4xl font-extrabold mb-10 leading-normal backdrop-blur ">
          Bine ați venit la <span className="text-secondary">Școala de Șoferi</span> TopalX!
        </h1>
        <p className="mt-4 text-4xl line leading-normal -tracking-wide">
          Alegeți excelența în formarea șoferilor competenți și responsabili. Cu
          o experiență vastă în domeniu, TopalX vă oferă cele mai bune
          programe de instruire teoretică și practică, adaptate nevoilor dvs.
          Echipa noastră de instructori profesioniști este aici pentru a vă
          ghida pe drumul spre succes.
        </p>

        <button className="mt-24 bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-150 hover:shadow-lg">
          Află mai multe &darr;
        </button>
        {/* <button className="mt-24 bg-white text-textColor py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-110 hover:shadow-lg">
          Află mai multe &darr;
        </button> */}
      </div>
      <AboutPage />
      <Services />
      <Testimonials />
      <Gallery />
      <ContactPage />
    </div>
  );
};

export default HomePage;
