import { useState } from "react";
import { motion } from "framer-motion";

const ameData = [
  {
    type: "AME de tipo 1",
    image: "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502944/SMA1_ymnrdl.jpg",
    number: 1,
    description:
      "La forma más grave de AME, representa el 60% de los casos. Diagnóstico en los primeros 6 meses de vida.",
    details: [
      "Debilidad muscular grave, ausencia de reflejos y temblores en los dedos.",
      "Hipotonía generalizada, incapacidad de sostener la cabeza y sedestación.",
      "Problemas respiratorios: el pecho es más pequeño, pulmones no completamente desarrollados.",
      "Dificultades para alimentarse: problemas para succionar o tragar, frecuentes aspiraciones y atragantamientos.",
      "Posibles complicaciones óseas como escoliosis y otras alteraciones esqueléticas.",
    ],
    age: "0-6 meses",
    lifeExpectancy: "≤ 2 años",
    motorMilestone: "No deambulantes que no consiguen sedestación",
    characteristics: [
      "Escaso control de la cabeza",
      "Tos y llanto débil",
      "Debilidad muscular progresiva",
      "Postura en 'ancas de rana'",
    ],
  },
  {
    type: "AME de tipo 2",
    image: "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502936/SMA2_jkvwnb.png",
    number: 2,
    description: "Forma intermedia de AME. Se diagnostica entre los 6 y 18 meses.",
    details: [
      "Capacidad de sentarse sin asistencia, pero sin poder caminar.",
      "Debilidad muscular moderada, temblores en los dedos y flacidez general.",
      "Problemas respiratorios leves y riesgo de escoliosis.",
      "Dificultades en la deglución progresivas con el tiempo.",
    ],
    age: "6-18 meses",
    lifeExpectancy: "Adolescencia - adultez temprana",
    motorMilestone: "Sentarse sin asistencia, pero sin poder caminar",
    characteristics: [
      "Debilidad muscular moderada",
      "Problemas respiratorios leves",
      "Dificultades para ponerse de pie solo",
    ],
  },
  {
    type: "AME de tipo 3",
    image: "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502937/SMA3_sd957n.jpg",
    number: 3,
    description: "Forma más leve, se diagnostica después de los 18 meses.",
    details: [
      "Temblor fino en los dedos y debilidad progresiva en las piernas.",
      "Pérdida gradual de movilidad con el tiempo, afectando principalmente piernas.",
      "Dos variantes: Tipo IIIa (síntomas antes de los 3 años, pérdida temprana de movilidad) y Tipo IIIb (síntomas después de los 3 años, movilidad más prolongada).",
    ],
    age: "> 18 meses",
    lifeExpectancy: "Edad adulta",
    motorMilestone: "Capacidad de caminar, pero con dificultades",
    characteristics: [
      "Debilidad progresiva en las piernas",
      "Pérdida de movilidad con el tiempo",
      "Menos complicaciones respiratorias",
    ],
  },
  {
    type: "AME de tipo 4",
    image: "https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502937/SMA4_pwftir.jpg",
    number: 4,
    description: "Aparece en la segunda o tercera década de la vida.",
    details: [
      "Síntomas progresivos pero más leves en comparación con otros tipos.",
      "Debilidad en piernas y cadera que progresa hacia brazos y hombros.",
      "Posibles problemas de masticación, deglución y alteraciones en el habla.",
      "Pérdida de sensibilidad en manos y pies con el tiempo.",
    ],
    age: "> Edad adulta",
    lifeExpectancy: "Normal",
    motorMilestone: "Capacidad de caminar, pero con dificultades",
    characteristics: [
      "Debilidad progresiva en las piernas",
      "Pérdida de movilidad con el tiempo",
      "Menos complicaciones respiratorias",
    ],
  },
];

export default function AmeInfo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAme = ameData[activeIndex];

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % ameData.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + ameData.length) % ameData.length);

  return (
    <div className=" max-w-6xl mx-auto py-15 ">
<div className="relative rounded-lg p-10">
  <div className="absolute top-0 left-0 w-full h-2/3 bg-gray-200 rounded"></div>
  <div className="relative z-10">
  <h2 className="font-bold text-purple-700 text-[clamp(20px,3.5vw,30px)]">
  Características de la Atrofia Muscular Espinal
</h2>
<p
  className="text-gray-600 mb-5 h-10 text-[clamp(10px,1.5vw,18px)]"
>
  Haga clic sobre una de las pestañas para ver más información.
</p>


    {/* Contenedor de botones */}
    <div className=" bg-white rounded inline-block overflow-visible">
  <div className="flex  justify-center gap-2 relative">
    {ameData.map((item, index) => (
      <div key={index} className="relative">
        <button
          onClick={() => setActiveIndex(index)}
          className={`transition-all  duration-300 rounded-lg flex items-center justify-between
            ${index === activeIndex 
              ? " scale-120 bg-purple-300 text-white shadow-xl" 
              : "bg-white hover:bg-purple-50 text-gray-500"}
          `}
          style={{
            padding: "clamp(8px, 3vw, 24px)",
            width: "clamp(80px, 15vw, 160px)",
            height: "clamp(50px, 10vw, 100px)",
            position: "relative",
            zIndex: index === activeIndex ? 20 : 10, // Elevar el botón activo
          }}
        >
          <div
            className="flex flex-col  text-left font-bold leading-tight"
            style={{ fontSize: "clamp(10px, 2vw, 18px)" }}
          >
            <span>AME de</span>
            <span>tipo</span>
          </div>
          <span
            className="font-bold"
            style={{ fontSize: "clamp(20px, 4vw, 40px)" }}
          >
            {item.number}
          </span>
        </button>
      </div>
    ))}
  </div>
</div>

  </div>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Contenedor del texto */}
        <motion.div
          key={activeAme.type}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h3 className="text-xl font-semibold text-purple-700">
            {activeAme.type}
          </h3>
          <p className="text-gray-700 mt-2">{activeAme.description}</p>
        <ul className="mt-3 list-disc list-inside text-gray-600">
          {activeAme.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>

        <div className="mt-10 text-sm  text-gray-600">
            <span>
              <strong>Edad de inicio:</strong> {activeAme.age}
            </span>
            <span className="ml-4">
              <strong>Esperanza de vida:</strong> {activeAme.lifeExpectancy}
            </span>
          </div>
          <p className="mt-4 text-purple-700 font-semibold">
            Máximo hito motor adquirido: {activeAme.motorMilestone}
          </p>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            {activeAme.characteristics.map((char, idx) => (
              <li key={idx}>{char}</li>
            ))}
          </ul>
        </motion.div>

        {/* Imagen al lado derecho */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={activeAme.image}
            alt={activeAme.type}
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />

          {/* Botones debajo de la imagen */}
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold"
            >
              &lt; Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg font-semibold"
            >
              Siguiente &gt;
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

