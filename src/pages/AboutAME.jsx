import React, { useState } from "react";
import AmeInfo from "../components/ameTypes";
import { FaDna, FaMicroscope, FaClipboardList, FaSyringe, FaPills, FaLungs, FaHeart, FaStethoscope } from "react-icons/fa";
import DiagnosisSection from "../components/DiagnosisSection";


const AboutAME = () => {
  const [activeTab, setActiveTab] = useState("terapiaGenica");

  return (
    <>
      {/* Sección Hero: imagen de fondo a pantalla completa sin márgenes */}
      <div className="relative w-screen h-screen overflow-hidden left-1/2 ml-[-50vw] mr-[-50vw]">
        <img
          src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741224090/queEs_lti80x.jpg"
          alt="Fondo"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>

        {/* Título en la parte izquierda */}
        <div className="absolute top-1/3 left-0 bg-orange-500/65 text-white px-20 py-10 text-6xl font-bold rounded-r-3xl">
          <h1>Atrofia Muscular Espinal (AME)</h1>
        </div>
      </div>

      {/* Sección de contenido */}
      <div className="container mx-auto p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Título alineado verticalmente con el texto */}
        <h2 className="text-4xl font-bold text-purple-700 md:w-1/3 text-center md:text-left">
          Entendiendo la AME
        </h2>

        {/* Texto explicativo en la derecha */}
        <p className="text-gray-600 text-lg md:w-2/3">
          La atrofia muscular espinal (AME) es una enfermedad genética que afecta las neuronas motoras en la médula espinal y el tronco cerebral. Estas neuronas son esenciales para el control de los músculos voluntarios, es decir, aquellos que se utilizan para realizar movimientos como caminar, respirar y tragar. Cuando estas neuronas no funcionan adecuadamente, los músculos se debilitan y pueden llegar a atrofiarse. La gravedad varía según el tipo de AME, pero en todos los casos, el diagnóstico temprano y el tratamiento pueden mejorar la calidad de vida.
        </p>
      </div>

      {/* Sección Interactiva: Causa genética de la AME */}
      <div className="container mx-auto p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Sección Interactiva: Causa genética de la AME */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741295452/Causa_vjgcts.jpg"
            alt="Imagen 1"
            className="w-full rounded-xl shadow-lg mb-4 transform rotate-3"
          />
          <img
            src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741296500/atrofia-muscular-espinal_vrqovk.avif"
            alt="Imagen 2"
            className="w-full rounded-xl shadow-lg mb-4 transform -rotate-3 hidden sm:block"
          />
          <img
            src="https://osteopatiaatlas.com/wp-content/uploads/2021/02/escoliosis.jpg"
            alt="Imagen 3"
            className="w-full rounded-xl shadow-lg transform rotate-2 hidden md:block"
          />
          <img
            src="https://images.ecestaticos.com/3lXopGS0RP6o5ILQrda4-TiuXjA=/4x0:2024x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F88d%2Fd27%2F09f%2F88dd2709f33fe8869bdf688b32824da3.jpg"
            alt="Imagen 4"
            className="w-full rounded-xl shadow-lg mb-4 transform -rotate-3 hidden sm:block"
          />
        </div>

        {/* Tarjeta informativa sin efecto de zoom */}
        <div className="relative w-full md:w-2/3 bg-white shadow-lg rounded-xl p-6 border-l-8 border-orange-200">
          <div className="flex items-center gap-4">
            <FaDna className="text-orange-600 text-5xl" />
            <div>
              <h2 className="text-2xl font-bold text-orange-500">Causa genética</h2>
              <h3 className="text-lg text-gray-500">Mutación en el gen SMN1</h3>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            La Atrofia Muscular Espinal (AME) es causada por mutaciones en el gen <strong>SMN1</strong> (Supervivencia de las Neuronas Motoras 1), responsable de la producción de la proteína SMN. Esta proteína es esencial para la <strong>supervivencia</strong> de las neuronas motoras. Su deficiencia provoca la <strong>pérdida progresiva</strong> de la fuerza muscular.
          </p>
          <p className="text-gray-600 mt-4">
            Esta debilidad puede afectar a los músculos del tórax o causar deformaciones en la columna (escoliosis), dificultando la respiración.
          </p>
          <p className="text-gray-600 mt-4">
            La AME se hereda de forma <strong>autosómica recesiva</strong>: una persona debe recibir dos copias defectuosas del gen SMN1 (una de cada progenitor) para desarrollar la enfermedad.
          </p>

          {/* Sección: Diagnóstico */}
          <div className="py-5">
            <div className="flex items-center gap-4">
              <FaMicroscope className="text-orange-600 text-5xl" />
              <div>
                <h2 className="text-2xl font-bold text-orange-500">¿Cómo se diagnostica?</h2>
                <h3 className="text-lg text-gray-500">Análisis Genético</h3>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              El diagnóstico de la AME comienza con una evaluación clínica basada en los síntomas motores del paciente. Sin embargo, la confirmación se realiza mediante un <strong>análisis genético</strong>.
            </p>
            <p className="text-gray-600 mt-4">
              A través de un análisis de sangre se pueden detectar mutaciones en el gen <strong>SMN1</strong>. Esta prueba permite identificar hasta el 95% de los casos de AME tipo I, II y III, además de determinar si una persona es portadora de la mutación.
            </p>
          </div>

          {/* Sección: Clasificación */}
          <div className="py-5">
            <div className="flex items-center gap-4">
              <FaClipboardList className="text-orange-600 text-5xl" />
              <div>
                <h2 className="text-2xl font-bold text-orange-500">Clasificación</h2>
                <h3 className="text-lg text-gray-500">Tipos de AME</h3>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              La AME se clasifica según la gravedad de los síntomas, la edad de aparición, la evolución de la enfermedad y el número de copias del gen <strong>SMN2</strong>. Tener más copias de SMN2 se asocia con síntomas menos graves.
            </p>
            <p className="text-gray-600 mt-4">
              No hay dos personas con AME que tengan experiencias idénticas. El tratamiento debe adaptarse a las necesidades individuales. En la era de los tratamientos modificadores, se consideran los siguientes factores para describir mejor la enfermedad:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li><strong>Número de copias de SMN2:</strong> Un factor clave en la severidad de la enfermedad.</li>
              <li><strong>Máxima función motora alcanzada:</strong> Evaluación de hitos motores como estar sentado, de pie o caminar.</li>
              <li><strong>Edad de inicio de los síntomas:</strong> Impacta en la progresión de la enfermedad.</li>
              <li><strong>Gravedad de los síntomas:</strong> Evaluación clínica del impacto y evolución de la enfermedad.</li>
              <li><strong>Edad en el primer tratamiento:</strong> La intervención temprana mejora el pronóstico y la calidad de vida.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Esta clasificación integral permite un manejo más personalizado y efectivo de la enfermedad.
            </p>
          </div>
        </div>
      </div>

      <AmeInfo />


      {/* Sección de Tratamientos */}
      <div className="container mx-auto p-10">
        <h2 className="text-4xl font-bold text-purple-700 text-center mb-5">Tratamientos para la AME</h2>
        <p className="text-gray-500 text-center mb-4">Existen varios tratamientos disponibles que han revolucionado el manejo de esta enfermedad, aunque la disponibilidad puede variar según la región y el sistema de salud. A continuación, se detallan los principales tratamientos:</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === "terapiaGenica" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("terapiaGenica")}
          >
            <FaSyringe className="inline-block mr-2" /> Terapia Génica
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === "spinraza" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("spinraza")}
          >
            <FaPills className="inline-block mr-2" /> Spinraza
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === "evrysdi" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("evrysdi")}
          >
            <FaPills className="inline-block mr-2" /> Evrysdi
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === "soporteRespiratorio" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("soporteRespiratorio")}
          >
            <FaLungs className="inline-block mr-2" /> Otros
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold ${
              activeTab === "nutricion" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("nutricion")}
          >
            <FaMicroscope className="inline-block mr-2" /> En Investigación
          </button>
        </div>

        {/* Contenido de los Tratamientos */}
        <div className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-orange-200">
          {activeTab === "terapiaGenica" && (
            <div className="flex flex-col md:flex-row items-center">
              <img src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741327746/3_telbap.png" alt="Terapia Génica" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
                <div className="md:ml-6">
                  <h3 className="text-2xl font-bold text-orange-500">Terapia Génica: Zolgensma</h3>
                  <p className="text-gray-600 mt-4">Zolgensma es la primera y única terapia génica aprobada para tratar la AME. Está diseñada para abordar la causa raíz de la enfermedad al proporcionar una copia funcional del gen SMN1, permitiendo la producción estable de la proteína SMN.</p>
                  <p className="text-gray-600 mt-4"><strong> Mecanismo de acción:</strong> Utiliza un vector viral adenoasociado (AAV9) para transportar una copia funcional del gen SMN1 directamente a las células motoras. Este gen permite la producción continua de la proteína SMN, ayudando a prevenir la degeneración de las neuronas motoras.</p>

                  <p className="text-gray-600 mt-4"><strong>Administración:</strong> Se aplica mediante una infusión intravenosa única, lo que evita la necesidad de dosis repetidas.</p>
                  <p className="text-gray-600 mt-4"><strong>Consideraciones importantes:</strong> Está indicado principalmente para niños menores de 2 años con AME tipo 1 o presintomáticos con mutaciones confirmadas en SMN1.
                  Es un tratamiento de alto costo y su administración requiere un monitoreo riguroso debido a posibles efectos secundarios, como alteraciones en la función hepática y trombocitopenia.</p>

                </div>
            </div>
          )}
          {activeTab === "spinraza" && (
            
            <div className="flex flex-col md:flex-row items-center">
              <img src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741329539/4_mlg6as.png" alt="Terapia Génica" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
                <div className="md:ml-6">
                  <h3 className="text-2xl font-bold text-orange-500">Spinraza (Nusinersen)</h3>
                  <p className="text-gray-600 mt-4">Dado que las personas con AME tienen al menos una copia del gen SMN2, que produce una versión menos estable de la proteína SMN, algunos tratamientos se enfocan en modificar su procesamiento (splicing) para aumentar la cantidad de proteína funcional.</p>
                  <p className="text-gray-600 mt-4"><strong> Mecanismo de acción:</strong> Spinraza es un oligonucleótido antisentido que actúa sobre el ARN mensajero del gen SMN2, promoviendo la inclusión del exón 7. Esto mejora la producción de la proteína SMN, compensando la deficiencia causada por la mutación en SMN1.</p>

                  <p className="text-gray-600 mt-4"><strong>Administración:</strong> Se administra mediante inyecciones intratecales (directamente en el líquido cefalorraquídeo, a través de la médula espinal). La pauta de administración incluye:
                    <li>Fase de carga: 4 dosis iniciales en los primeros 2 meses.</li>
                    <li>Mantenimiento: Dosis cada 4 meses de por vida.</li>
                  </p>
                  <p className="text-gray-600 mt-4"><strong>Consideraciones importantes:</strong> 
                    <li>Puede utilizarse en pacientes de todas las edades y en todos los tipos de AME.</li>
                    <li>Requiere una punción lumbar para cada administración, lo que puede ser un proceso invasivo.</li>
                    <li>Entre los efectos adversos se incluyen dolor de cabeza, vómitos y posibles complicaciones derivadas de la punción lumbar.</li>
                  </p>

                </div>
            </div>
          )}
          {activeTab === "evrysdi" && (
            <div className="flex flex-col md:flex-row items-center">
              <img src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741329539/5_txpdza.png" alt="Terapia Génica" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
                <div className="md:ml-6">
                  <h3 className="text-2xl font-bold text-orange-500">Evrysdi (risdiplam)</h3>
                  <p className="text-gray-600 mt-4">Evrysdi es un modulador del splicing de SMN2 que se administra por vía oral. Mejora la producción de proteína SMN.</p>
                  <p className="text-gray-600 mt-4"><strong> Mecanismo de acción:</strong> Evrysdi es un modulador del splicing del gen SMN2 que actúa de manera similar a Spinraza, promoviendo la producción de la proteína SMN a partir del gen SMN2, pero con la ventaja de ser administrado por vía oral.</p>

                  <p className="text-gray-600 mt-4"><strong>Administración:</strong> Se toma diariamente en forma de solución oral líquida, lo que facilita su uso en comparación con la administración intratecal de Spinraza.</p>
                  <p className="text-gray-600 mt-4"><strong>Consideraciones importantes:</strong> 
                    <li>Está aprobado para pacientes con AME de cualquier tipo y edad, siempre que tengan al menos 2 meses de vida.</li>
                    <li>Es una opción menos invasiva y más accesible en términos de administración.</li>
                    <li>Puede presentar efectos adversos como fiebre, diarrea y fatiga.</li>
                  </p>

                </div>
            </div>
          )}
          
          {activeTab === "soporteRespiratorio" && (

            <div className="flex flex-col md:flex-row items-center">
            <img 
              src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741398580/IMG_20241013_144604_1_ndth0k.jpg"
              alt="Terapia Génica" 
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" 
            />

            <div className="md:ml-6">
              <h3 className="text-2xl font-bold text-orange-500">Terapias Físicas y Ocupacionales:</h3>
              <ul className="text-gray-600 mt-4 list-disc pl-5">
                <li><strong>Descripción: </strong>Son esenciales para mantener la movilidad, prevenir contracturas y mejorar la calidad de vida.</li>
                <li><strong>Eficacia: </strong>Ayudan a mantener la función motora y a mejorar la calidad de vida de los pacientes.</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-orange-500 mt-6">Soporte Respiratorio:</h3>
              <ul className="text-gray-600 mt-4 list-disc pl-5">
                <li><strong>Descripción: </strong>Incluye el uso de dispositivos de asistencia respiratoria, como ventilación no invasiva (BiPAP) y traqueostomías en casos más severos.</li>
                <li><strong>Eficacia: </strong>Mejora la calidad de vida y puede aumentar la supervivencia en pacientes con dificultades respiratorias.</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-orange-500 mt-6">Nutrición y Soporte Alimenticio:</h3>
              <ul className="text-gray-600 mt-4 list-disc pl-5">
                <li><strong>Descripción: </strong>La intervención nutricional es crucial, incluyendo alimentación por sonda si es necesario.</li>
                <li><strong>Eficacia: </strong>Asegura una nutrición adecuada y ayuda a prevenir complicaciones asociadas con la debilidad muscular.</li>
              </ul>
            </div>
            </div>
            
          )}
          {activeTab === "nutricion" && (
              <div className="flex flex-col md:flex-row items-center">
                <img src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741390512/El_tratamiento_antes_cgvdpi.png"
                 alt="Terapia Génica" 
                 className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" 
                  />
                  <div className="md:ml-6">
                    <h3 className="text-2xl font-bold text-orange-500">Tratamientos en Investigación</h3>
                    <p className="text-gray-600 mt-4">Además de las terapias actuales, hay múltiples estudios en curso sobre nuevas estrategias terapéuticas para la AME. Algunas de ellas incluyen:</p>
                    <p className="text-gray-600 mt-4"><strong> Terapias celulares: </strong> Se están explorando tratamientos basados en células madre, con el objetivo de regenerar o proteger las neuronas motoras dañadas. Sin embargo, estos enfoques aún están en fase experimental.</p>
  
                    <p className="text-gray-600 mt-4"><strong> Nuevos agentes farmacológicos</strong>
                      <li>Se investiga el uso de medicamentos que protejan las neuronas motoras y reduzcan la progresión de la enfermedad.</li>
                      <li>Algunos estudios están evaluando combinaciones de tratamientos existentes para mejorar su eficacia.</li>
                    </p>
  
                  </div>

                  
              </div>

              

          )}

          
        </div>
        <div className="mt-20">



        <div className="mb-40">
        <DiagnosisSection />

        </div>
      {/* Introducción con cifras destacadas */}
      <div className="text-center">
      <h2 className="text-4xl font-bold text-purple-700 text-center mb-5">Estadisticas para la AME</h2>
        <p className="text-gray-600 text-lg mb-6">
          La Atrofia Muscular Espinal (AME) es una enfermedad genética que requiere un enfoque integral de cuidados. A continuación, te presentamos información clave y recomendaciones para mejorar la calidad de vida de los pacientes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaDna className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-700">1 en 40-50</h3>
            <p className="text-gray-600">
              Aproximadamente 1 de cada 40-50 personas en todo el mundo es portadora del gen que causa la AME.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaHeart className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-orange-700">1 en 10,000</h3>
            <p className="text-gray-600">
              La AME afecta aproximadamente a uno de cada 10,000 nacimientos en todo el mundo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaStethoscope className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-700">2 años</h3>
            <p className="text-gray-600">
              Si no se trata, la mayoría de los bebés con la forma más grave de AME mueren en un plazo de dos años.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>

      
    </>
  );
};

export default AboutAME;