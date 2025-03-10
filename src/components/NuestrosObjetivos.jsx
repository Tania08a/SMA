import React from "react";
import { FaUsers, FaBalanceScale, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";

const objetivos = [
  {
    titulo: "Empoderar a los padres",
    descripcion: [
      "Brindar información sobre la enfermedad",
      "Fomentar el cuidado y manejo de sus hijos",
      "Mejorar la calidad de vida de los pacientes",
    ],
    icono: <FaUsers />,
  },
  {
    titulo: "Promover políticas públicas",
    descripcion: [
      "Facilitar el acceso a medicamentos específicos",
      "Abordar el desafío de los altos costos",
      "Mejorar la calidad de vida mediante tratamientos efectivos",
    ],
    icono: <FaBalanceScale />,
  },
  {
    titulo: "Crear conciencia",
    descripcion: [
      "Crear conciencia pública sobre la AME",
      "Promover apoyo social y comprensión",
      "Fomentar empatía hacia los pacientes y sus familias",
    ],
    icono: <FaLightbulb />,
  },
  {
    titulo: "Formación y educación",
    descripcion: [
      "Proveer formación y recursos educativos",
      "Favorecer el diagnóstico temprano y atención adecuada",
      "Mejorar el manejo de la enfermedad",
    ],
    icono: <FaHandHoldingHeart />,
  },
];

const NuestrosObjetivos = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Nuestros Objetivos</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {objetivos.map((obj, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-8 rounded-2xl shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:rotate-1"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl text-orange-600">{obj.icono}</span>
              <h3 className="text-xl font-semibold text-gray-900">{obj.titulo}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              {obj.descripcion.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestrosObjetivos;
