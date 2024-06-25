import React from "react";
import { Helmet } from "react-helmet";
import "../index.css";
import CarCard from "../components/CarCard";
import fiat from "../images/fiat1.jpg";
import mercedes from "../images/mercedes2.jpg";
import skoda from "../images/skoda1.jpg";
import volvo from "../images/volvo1.jpg";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s5 from "../images/s5.jpg";
import s6 from "../images/s6.jpg";
import logo from "../images/logo.jpg";

const AboutPage: React.FC = () => {
  const images = [s1, s2, s3, s4, s5, s6];
  return (
    <>
      <Helmet>
        <title>Despre Noi - Școala de Șoferi</title>
        <meta
          name="description"
          content="Aflați mai multe despre compania noastră și echipa dedicată educației auto de înaltă calitate în București."
        />
      </Helmet>
      <div className="flex flex-col-reverse items-center justify-center sm:flex-col">
        <div className=" mt-36 flex flex-wrap justify-center items-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-52 h-52 rounded-full object-cover m-2 border-8 border-solid border-white"
            />
          ))}
        </div>
        <div className=" mt-8">
          <header className=" text-center py-4 text-textColor mx-auto p-4  mt-16 container">
            <h1 className="text-4xl font-bold m-4 ">Cine suntem?</h1>
          </header>
          <main className=" border-solid border-b container mx-auto p-6 flex items-center justify-center gap-3 ">
            <section className="backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-8 p-4 shadow-2xl w-fit">
              <h2 className="text-3xl mb-2">Informații cheie</h2>
              <ul className="list-disc pl-5 font-bold">
                <li>Fondată: 2022</li>
                <li>Angajați: 5</li>
                <li>Locație: București, România</li>
              </ul>
            </section>
            <section className="backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-8 p-4 shadow-2xl">
              <h2 className="text-3xl mb-2">Misiunea Noastră</h2>
              <p className="from-neutral-100 font-bold">
                Ne propunem să formăm șoferi responsabili și încrezători, care
                să contribuie la siguranța rutieră prin cursuri de conducere de
                înaltă calitate, personalizate, folosind metode moderne de
                predare și vehicule actualizate.
              </p>
            </section>

            <section className="backdrop-blur rounded-2xl mb-4 border-l border-r border-b border-8 p-4 shadow-2xl">
              <h2 className="text-3xl mb-2">Cunoașteți Echipa</h2>
              <p className="font-bold">
                Echipa noastră este formată din profesioniști cu experiență,
                pasionați de educația auto. Cunoașteți persoanele care fac
                posibil totul.
              </p>
            </section>
          </main>
        </div>
      </div>

      <div className="border-8 rounded-2xl border-solid border-white bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 p-5 container mx-auto mt-8 ">
        <h1 className="text-4xl font-bold text-center mb-8">Despre Noi</h1>
        <section className=" container text-lg text-left mb-5 p-6 mx-auto">
          <p>
            Fondată de un instructor auto cu peste 15 ani de experiență,{" "}
            <strong>TopalX</strong> este rezultatul pasiunii partajate cu soția
            sa pentru educația auto de calitate. Numele școlii provine din
            numele de familie, aducând cu sine o tradiție și o dedicare pentru
            siguranța și educația rutieră. Dedicația fondatorului, datorată
            decadelor de experiență în domeniul instruirii auto, este profund
            ancorată în fiecare aspect al cursurilor oferite.
          </p>
          <br />
          <p>
            Scopul școlii <strong>TopalX</strong> nu este doar de a pregăti
            cursanți pentru a trece examenul de conducere, ci de a cultiva
            responsabilitate și respect profund pentru regulile de circulație.
            Fiecare program de instruire este meticulos planificat pentru a
            asigura că fiecare cursant înțelege nu doar mecanicile conducerei,
            ci și importanța unei conduite preventive pe drumurile publice. Prin
            utilizarea unor metode de predare adaptate nevoilor individuale ale
            cursanților și prin folosirea unui parc auto modern, echipat la
            standarde înalte, școala se asigură că fiecare nou șofer este
            complet pregătit să navigheze diversele situații de trafic în
            siguranță și încrezător.
          </p>
          <br />
          <p>
            În plus, <strong>TopalX</strong> pune un accent deosebit pe formarea
            unui comportament etic la volan, promovând valori de respect și
            prudență, esențiale pentru coexistența armonioasă în trafic. Cu un
            colectiv de instructori pasionați și dedicați, proveniți din diverse
            ramuri ale domeniului auto, școala garantează o experiență de
            învățare completă și profund umană, orientată spre formarea unor
            șoferi responsabili și conștienți de impactul lor asupra
            comunității.
          </p>
        </section>
        <h1 className="text-2xl font-bold text-center mt-8 mb-8">
          Faceti cunostinta cu autoturismele noastre  <span className="bounce inline-block">&darr;</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <CarCard name="Mercedes" nickname="Topul Mare" image={mercedes} />
          <CarCard name="Volvo V40" nickname="Topul Mic" image={volvo} />
          <CarCard name="Skoda Fabia" nickname="Bombonica" image={skoda} />
          <CarCard name="Fiat 500" nickname="Gargarita" image={fiat} />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
