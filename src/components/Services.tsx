import React from "react";
import CarPackages from "./CarPackages";
import poza1 from "../images/canDoIt.jpg";
import poza2 from "../images/salaClasa.jpg";
import poza3 from "../images/flyer.jpg";

type Service = {
  name: string;
  description: string;
  available: boolean;
};

const services: Service[] = [
  {
    name: "Cursuri pregătire teoretică",
    description:
      "Oferim module complete de teorie ce acoperă toate aspectele necesare pentru a reuși la examenul teoretic.",
    available: true,
  },
  {
    name: "Cursuri pregătire practică",
    description:
      "Sesiuni de conducere practică cu instructori experimentați, adaptate nivelului fiecărui cursant.",
    available: true,
  },
  {
    name: "Analize medicale",
    description:
      "Facilităm realizarea tuturor analizelor medicale necesare obținerii sau reînnoirii permisului de conducere.",
    available: true,
  },
  {
    name: "Testul psihologic",
    description:
      "Teste psihologice efectuate de specialiști, esențiale pentru profilul unui conducător auto responsabil.",
    available: true,
  },
  {
    name: "Rezervarea mașinii în data examenului",
    description:
      "Asigurăm disponibilitatea mașinii școlii pentru examenul practic, facilitând o experiență fără griji.",
    available: true,
  },
  {
    name: "Ședințe suplimentare de conducere",
    description:
      "Oferim posibilitatea de a programa ședințe suplimentare de conducere pentru pregătire intensivă.",
    available: true,
  },
  {
    name: "Dosar programare D.R.P.C.I.V.",
    description:
      "Organizăm și gestionăm întregul dosar necesar pentru programarea examenului, simplificând procedurile administrative.",
    available: true,
  },
  {
    name: "Combustibil",
    description:
      "Toate costurile de combustibil sunt incluse în tarifele cursurilor, fără taxe ascunse.",
    available: true,
  },
  {
    name: "Mașini performante",
    description:
      "Folosim mașini moderne și bine întreținute, echipate cu cele mai noi tehnologii, pentru a asigura siguranța și confortul cursanților.",
    available: true,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="p-6  bg-blue rounded-2xl  mt-8 mb-8">
        <h1 className="text-3xl font-bold text-center mb-20">
          Servicii Oferite
        </h1>
        <div className="flex ">
          <ul>
            {services.map((service, index) => (
              <li
                key={index}
                className=" w-fit bg-white rounded-r-full shadow-md p-4 mb-4 roun"
              >
                <h2 className="text-xl font-semibold underline">
                  {service.name}
                </h2>
                <p>{service.description} </p>
                <span
                  className={
                    service.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {service.available ? "Disponibil" : "Indisponibil"}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <img
              src={poza1}
              alt=""
              className="w-40 h-60 object-cover border-white-6"
            />
            <img src={poza2} alt="" className="w-96 h-80 object-cover border-white-6" />
            <img src={poza3} alt="" className="w-40 h-60 object-cover border-white-6"/>
          </div>
        </div>
      </div>

      <div>
        <CarPackages />
      </div>
    </>
  );
};

export default Services;
