import React from "react";
import skoda from "../images/sko.png";
import fiat from "../images/fia.png";
import mercedes from "../images/mer.png";
import volvo from "../images/vol.png";

// Define TypeScript interfaces if using TypeScript
interface CarPackage {
  name: string;
  price: number;
  transmission: string;
  fuelType: string;
  features: string[];
  note: string;
  image: string;
}

const carPackages: CarPackage[] = [
  {
    name: "PAKET PRESIDENT MERCEDES BENZ",
    price: 2900,
    transmission: "Cutie automată/diesel",
    fuelType: "Diesel",
    features: [
      "Analize medicale + aviz psihologic 150 lei + 150 lei",
      "Cursuri teoretice legislație rutieră",
      "Cursuri pregătire practică – 30 de ore didactice",
      "Combustibil",
      "Dosar programare D.R.P.C.I.V",
    ],
    note: "Analizele medicale și avizul psihologic nu sunt incluse în pachet!",
    image: mercedes,
  },
  {
    name: "PAKET SENSATION VOLVO",
    price: 2500,
    transmission: "Cutie manuală/diesel",
    fuelType: "Diesel",
    features: [
      "Analize medicale + aviz psihologic 150 lei + 150 lei",
      "Cursuri teoretice legislație rutieră",
      "Cursuri pregătire practică – 30 de ore didactice",
      "Combustibil",
      "Dosar programare D.R.P.C.I.V",
    ],
    note: "Analizele medicale și avizul psihologic nu sunt incluse în pachet!",
    image: volvo,
  },
  {
    name: "PAKET FIAT 500",
    price: 2350,
    transmission: "Cutie manuală – benzină",
    fuelType: "Benzină",
    features: [
      "Analize medicale + aviz psihologic 150 lei + 150 lei",
      "Cursuri teoretice legislație rutieră",
      "Cursuri pregătire practică – 30 de ore didactice",
      "Combustibil",
      "Dosar programare D.R.P.C.I.V",
    ],
    note: "Analizele medicale și avizul psihologic nu sunt incluse în pachet!",
    image: fiat,
  },
  {
    name: "PAKET CITY BREAK SKODA",
    price: 2500,
    transmission: "Cutie manuală/benzină",
    fuelType: "Benzină",
    features: [
      "Analize medicale + aviz psihologic 150 lei + 150 lei",
      "Cursuri teoretice legislație rutieră",
      "Cursuri pregătire practică – 30 de ore didactice",
      "Combustibil",
      "Dosar programare D.R.P.C.I.V",
    ],
    note: "Analizele medicale și avizul psihologic nu sunt incluse în pachet!",
    image: skoda,
  },
];

const CarPackages: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-20 mt-8 ">Pachete Auto</h1>
      {carPackages.map((pkg, index) => (
           <section className={`flex flex-col backdrop-blur p-4 border-black border-y-2 items-center md:items-start justify-around mb-10 md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
          <div key={index} className=" p-4 rounded-s-2xl shadow-2xl mb-4">
            <h2 className="text-2xl font-semibold">{pkg.name}</h2>
            <p>
              <strong>Preț:</strong> {pkg.price} Lei 
            </p>
            <p>
              <strong>Transmisie:</strong> {pkg.transmission}
            </p>
            <p>
              <strong>Tip Combustibil:</strong> {pkg.fuelType}
            </p>
            <ul>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}  &#10003;</li>
              ))}
            </ul>
            <p className="text-red-500">{pkg.note}</p>
          </div>
          <div>
            <img src={pkg.image} alt="" className="w-64 h-64 object-cover" />
          </div>
        </ section>
      ))}
    </div>
  );
};

export default CarPackages;
