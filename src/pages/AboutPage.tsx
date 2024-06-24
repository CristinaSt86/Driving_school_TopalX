import React from "react";
import { Helmet } from "react-helmet";
import "../index.css"; // Ensure you import the CSS file where TailwindCSS and custom styles are applied

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Despre Noi - Scoala de Soferi</title>
        <meta
          name="description"
          content="Află mai multe despre compania și echipa noastră."
        />
      </Helmet>
      <header>
        <h1 className="text-4xl">Despre Noi</h1>
      </header>
      <aside className="bg-gray-200 p-4">
        <h2>Informații rapide</h2>
        <ul>
          <li>Fondat: 2021</li>
          <li>Angajați: 5</li>
          <li>Locație: Bucuresti, Romania</li>
        </ul>
      </aside>
      <main className="p-4">
        <section className="mb-4">
          <h2>Misiunea Noastră</h2>
          <p>
            Misiunea noastră este să formăm șoferi responsabili și încrezători,
            care să contribuie la siguranța rutieră. Oferim cursuri de conducere
            de înaltă calitate, adaptate nevoilor fiecărui cursant, utilizând
            metode moderne de predare și vehicule de ultimă generație.
          </p>

          <ul>
            Obiectivele Noastre
            <li>
              Educație de Calitate: Asigurăm o educație temeinică și
              cuprinzătoare, atât teoretică, cât și practică, pentru a pregăti
              cursanții pentru toate situațiile de trafic.
            </li>
            <li>
              Siguranța Rutieră: Promovăm siguranța rutieră prin instruirea
              cursanților în respectarea regulilor de circulație și adoptarea
              unui comportament preventiv la volan.
            </li>
            <li>
              Instructori Calificați: Echipa noastră de instructori este formată
              din profesioniști cu experiență, dedicați să ofere suport și
              ghidare pe parcursul întregului proces de învățare.
            </li>
            <li>
              Infrastructură Modernă: Dispunem de vehicule echipate
              corespunzător și săli de clasă dotate cu tehnologie modernă pentru
              a asigura cele mai bune condiții de învățare.
            </li>
            <li>
              Satisfacția Cursanților: Ne străduim să oferim o experiență
              plăcută și eficientă de învățare, adaptată nevoilor și ritmului
              fiecărui cursant.
            </li>
          </ul>
        </section>
        <section>
          <h2>Echipa</h2>
          <p>
            Echipa noastră este formată din profesioniști experimentați, care
            sunt pasionați de ceea ce fac. Cunoașteți oamenii care fac totul
            posibil.
          </p>
          
        </section>
      </main>
    </>
  );
};

export default AboutPage;
