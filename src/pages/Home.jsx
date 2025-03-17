import Comunidad from "../components/Comunidad";
import Valores from "../components/Valors";
import LinkPreview from "../components/LinkPreview";
import DonateButton from "../components/DonateButton";


import React, { useState, useEffect } from "react";
import { FaHandHoldingMedical, FaUsers, FaDonate } from "react-icons/fa";
const Home = () => {
  const fotos = [
    "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587596/Copia_de_DSC_2756_npiiaz.jpg",
    "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587590/Copia_de_DSC_2763_hcyc0e.jpg",
    "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587573/Copia_de_DSC_2732_h0kpsc.jpg",
    "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587551/Copia_de_IMG_1697_gjezus.jpg",
    "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587583/Copia_de_DSC_2743_eh5he6.jpg",
  ];

  const [fotoActual, setFotoActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFotoActual((prev) => (prev + 1) % fotos.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [fotos.length]);

  return (
    <section className="relative">
      {/* Sección Hero Full Bleed */}
      <div className="relative w-screen min-h-[100vh] overflow-hidden left-1/2 ml-[-50vw] mr-[-50vw]">
        <img
          src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587959/Copia_de_DSC_2774_sef6ib.jpg"
          alt="Comunidad"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Degradado en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>

        {/* Contenedor del texto central, centrado vertical y horizontalmente */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold md:text-5xl">Fundación SMA</h1>
            <p className="text-lg md:text-xl mt-2">
              Juntos, fortalecemos vidas frente a la AME.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido normal */}
      <Valores />

      
      <Comunidad />

      <div className="container mb-15 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 mb-8">
            Noticias Recientes
          </h2>
          <LinkPreview />
        </div>
      <div className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Tu Ayuda Puede Cambiar Vidas
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            En la Fundación SMA, trabajamos incansablemente para apoyar a las
            personas y familias afectadas por la Atrofia Muscular Espinal (AME).
            Con tu donación, podemos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda: Financiar Tratamientos y Apoyar a las Familias */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FaHandHoldingMedical className="text-orange-600 text-3xl mr-4" />
                  <h3 className="text-xl font-bold text-orange-600">
                    Financiar Tratamientos
                  </h3>
                </div>
                <p className="text-gray-600">
                  Ayuda a cubrir los costos de terapias y medicamentos
                  esenciales para mejorar la calidad de vida de los pacientes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-orange-600 text-3xl mr-4" />
                  <h3 className="text-xl font-bold text-orange-600">
                    Apoyar a las Familias
                  </h3>
                </div>
                <p className="text-gray-600">
                  Proporcionamos recursos y apoyo emocional a las familias que
                  enfrentan los desafíos de la AME.
                </p>
              </div>
            </div>

            {/* Columna derecha: Fotos y Botón de Donar */}
            <div className="relative">
              <div className="relative h-[320px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src={fotos[fotoActual]}
                  alt="Fotos de la fundación"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                />
              </div>
              <a
                className="absolute bottom-4 right-4 flex items-center"
              >
               <DonateButton />

              </a>
            </div>
          </div>          
        </div>
      </div>
      
      
      
          <div className="mt-20">
            <div className="bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg">
              <div className="border-4 border-white p-8 rounded-lg text-center">
                <blockquote className="text-2xl md:text-3xl font-bold text-white">
                  "Cada donación es un paso más hacia una vida mejor."
                </blockquote>
                <p className="mt-4 text-lg text-white opacity-80">
                  - Fundación SMA
                </p>
              </div> 
            </div>            
          </div>

        
          

    </section>
  );
};

export default Home;