import React, { useState } from "react";
import {
  FaWheelchair,
  FaUtensils,
  FaLungs,
  FaBone,
  FaStethoscope,
  FaHeart,
  FaSmile,
  FaDna,
  FaHeartbeat,
  FaProcedures,
  FaHandHoldingHeart,
  FaUserNurse,
  FaComments,
} from "react-icons/fa";

const Care = () => {
  const [activeSection, setActiveSection] = useState("fisioterapia");

  const sections = [
    {
        
            id: "fisioterapia",
            icon: <FaWheelchair className="text-purple-600 text-2xl" />,
            title: "Fisioterapia y Rehabilitación",
            content: (
              <div>
                <p className="text-gray-600 mb-6">
                  La fisioterapia es esencial para mantener la movilidad y prevenir complicaciones en pacientes con AME. Los ejercicios deben ser personalizados y supervisados por un especialista. La fisioterapia no solo ayuda a mantener la fuerza muscular, sino que también mejora la calidad de vida al reducir el dolor y las contracturas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Estiramientos</h3>
                    <p className="text-gray-600">
                      Los estiramientos regulares ayudan a mantener la flexibilidad de las articulaciones y prevenir contracturas. Se recomienda realizarlos de manera suave y constante, evitando movimientos bruscos que puedan causar lesiones.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">Equipamiento</h3>
                    <p className="text-gray-600">
                      El uso de férulas, bipedestadores y órtesis es fundamental para mantener una postura correcta y facilitar la movilidad. Estos dispositivos deben ser ajustados por un especialista para garantizar su efectividad y comodidad.
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Fisioterapia Respiratoria</h3>
                  <p className="text-gray-600">
                    La fisioterapia respiratoria es crucial para pacientes con AME, ya que ayuda a fortalecer los músculos del tórax y a eliminar secreciones. Esto es especialmente importante durante episodios de infecciones respiratorias.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Actividades en el Agua</h3>
                  <p className="text-gray-600">
                    La terapia acuática es una excelente opción para mejorar la movilidad y reducir el estrés en las articulaciones. El agua proporciona un entorno seguro y de bajo impacto para realizar ejercicios.
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: "nutricion",
            icon: <FaUtensils className="text-orange-600 text-2xl" />,
            title: "Nutrición y Deglución",
            content: (
              <div>
                <p className="text-gray-600 mb-6">
                  Una dieta adecuada es crucial para los pacientes con AME. La debilidad muscular puede afectar la capacidad de masticar y tragar, por lo que es necesario adaptar la alimentación. Una nutrición adecuada no solo mejora la salud física, sino que también contribuye al bienestar emocional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-500 mb-2">Evaluación de la Deglución</h3>
                    <p className="text-gray-600">
                      Es fundamental realizar una evaluación de la capacidad de tragar para evitar complicaciones como la aspiración de alimentos. Esta evaluación debe ser realizada por un logopeda o especialista en deglución.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-500 mb-2">Alimentación por Sonda</h3>
                    <p className="text-gray-600">
                      En casos severos, puede ser necesario el uso de sondas nasogástricas o gastrostomías para asegurar una nutrición adecuada. Estos métodos deben ser supervisados por un equipo médico especializado.
                    </p>
                  </div>
                </div>
                <div className=" p-2 ">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Dieta Equilibrada</h3>
                  <p className="text-gray-600">
                    La dieta debe ser rica en proteínas, vitaminas y minerales para apoyar el crecimiento y la salud general. Es importante incluir alimentos que sean fáciles de masticar y tragar.
                  </p>
                </div>
                <div className=" p-2 ">
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">Hidratación</h3>
                  <p className="text-gray-600">
                    Mantener una hidratación adecuada es crucial, especialmente en pacientes con dificultades para tragar líquidos. Se recomienda ofrecer líquidos espesados si es necesario.
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: "respiratorios",
            icon: <FaLungs className="text-blue-600 text-2xl" />,
            title: "Cuidados Respiratorios",
            content: (
              <div>
                <p className="text-gray-600 mb-6">
                  La debilidad muscular en la AME puede afectar los músculos respiratorios, lo que puede llevar a complicaciones como la hipoventilación y las infecciones respiratorias. Es importante realizar controles periódicos y utilizar dispositivos de asistencia cuando sea necesario.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Ventilación No Invasiva (VNI)</h3>
                    <p className="text-gray-600">
                      Recomendada para pacientes con dificultades respiratorias durante el sueño. Ayuda a mantener niveles adecuados de oxígeno y dióxido de carbono.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Fisioterapia Respiratoria</h3>
                    <p className="text-gray-600">
                      Incluye técnicas para fortalecer los músculos respiratorios y eliminar secreciones. Es especialmente útil durante episodios de infecciones respiratorias.
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Vacunación</h3>
                  <p className="text-gray-600">
                    Es crucial vacunarse contra la gripe y el neumococo para prevenir infecciones respiratorias. Las vacunas deben administrarse según las recomendaciones médicas.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Monitoreo Regular</h3>
                  <p className="text-gray-600">
                    Realizar estudios de sueño y pruebas de función pulmonar para detectar problemas respiratorios a tiempo. Esto es especialmente importante en pacientes con AME tipo 1.
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: "ortopedicos",
            icon: <FaBone className="text-green-600 text-2xl" />,
            title: "Cuidados Ortopédicos",
            content: (
              <div>
                <p className="text-gray-600 mb-6">
                  Las complicaciones óseas y musculares, como la escoliosis y las contracturas, son comunes en pacientes con AME. Un manejo adecuado puede prevenir deformidades y mejorar la calidad de vida.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Escoliosis</h3>
                    <p className="text-gray-600">
                      El uso de corsés y, en casos severos, la cirugía pueden ayudar a corregir la curvatura de la columna. Es importante realizar revisiones periódicas para detectar cambios.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Contracturas</h3>
                    <p className="text-gray-600">
                      Los estiramientos y el uso de férulas pueden mantener la flexibilidad de las articulaciones y prevenir complicaciones. Se recomienda realizar estiramientos diarios.
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Cirugía Ortopédica</h3>
                  <p className="text-gray-600">
                    En casos avanzados, puede ser necesaria la intervención quirúrgica para corregir deformidades óseas. La cirugía debe ser evaluada por un equipo médico especializado.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Bipedestadores</h3>
                  <p className="text-gray-600">
                    Los bipedestadores ayudan a mantener una postura correcta y a prevenir complicaciones en las caderas y la columna. Son especialmente útiles en pacientes con AME tipo 2.
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: "emocionales",
            icon: <FaSmile className="text-pink-600 text-2xl" />,
            title: "Cuidados Emocionales y Sociales",
            content: (
              <div>
                <p className="text-gray-600 mb-6">
                  El bienestar emocional y social es tan importante como el físico. Los pacientes y sus familias deben recibir apoyo psicológico y participar en actividades sociales adaptadas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-700 mb-2">Apoyo Psicológico</h3>
                    <p className="text-gray-600">
                      Terapia individual o grupal para pacientes y cuidadores. Es fundamental para manejar el estrés y la ansiedad.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-pink-700 mb-2">Actividades Recreativas</h3>
                    <p className="text-gray-600">
                      Fomentar la participación en actividades sociales y deportivas adaptadas para mejorar la calidad de vida.
                    </p>
                  </div>
                </div>
                <div cclassName="p-2">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Redes de Apoyo</h3>
                  <p className="text-gray-600">
                    Conectar con otras familias y organizaciones especializadas en AME puede proporcionar un valioso apoyo emocional y práctico.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">Terapia Ocupacional</h3>
                  <p className="text-gray-600">
                    La terapia ocupacional ayuda a los pacientes a desarrollar habilidades para la vida diaria y a mantener su independencia.
                  </p>
                </div>
              </div>
            ),
          },
        ];

  return (
    <div className=" container mx-auto p-10">
      {/* Título principal */}

      <div className=" relative w-screen h-screen overflow-hidden left-1/2 ml-[-50vw] mr-[-50vw]">
        <img
          src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741477229/Copia_de_DSC_2760_epwn5m.jpg"
          alt="Fondo"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>

        {/* Título en la parte izquierda */}
        <div className="absolute top-1/3 left-0 bg-orange-500/65 text-white px-20 py-10 text-6xl font-bold rounded-r-3xl">
          <h1>Cuidados de la AME</h1>
        </div>
      </div>


      <div className="container mx-auto p-10 flex flex-col md:flex-row items-center mt-15 gap-10"> 
  {/* Título alineado verticalmente con el texto */}
  <h2 className="text-4xl font-bold text-orange-500 md:w-1/3 text-center md:text-left">
    Cada historia es única
  </h2>

  {/* Texto explicativo en la derecha */}
  <p className="text-gray-600 text-lg md:w-2/3 ">
    No hay un solo camino en el cuidado de la AME. Cada persona es única, con necesidades, ritmos y fortalezas diferentes. Adaptar el cuidado significa escuchar, observar y ajustar, encontrando lo que brinde mayor bienestar y calidad de vida. Lo que funciona para uno, puede no ser lo mejor para otro, y eso está bien.  
    <span className="text-orange-500 font-semibold"> Cuidar no es solo seguir indicaciones, es comprender y acompañar. </span>
  </p>
</div>



      <div className="flex flex-col md:flex-row gap-8 mt-10 min-h-screen">
      {/* Menú de navegación (izquierda) */}
      
      <div className="w-full md:w-1/4 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Secciones</h2>
        <ul className="space-y-4">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer ${
                activeSection === section.id
                  ? "bg-purple-100 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.icon}
              <span className="font-semibold">{section.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido (derecha) */}
      <div className="w-full md:w-3/4 bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          {sections.find((section) => section.id === activeSection)?.title}
        </h2>
        <div>
          {sections.find((section) => section.id === activeSection)?.content}
        </div>
      </div>
      
    </div>
      {/* Sección: Complicaciones Médicas y Manejo */}
      <div className="p-8 mb-10 mt-10">
        <div className="flex items-center gap-4 mb-6">
          <FaStethoscope className="text-orange-500 text-4xl" />
          <h2 className="text-2xl font-bold text-orange-500">Complicaciones Médicas y Manejo</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Las complicaciones médicas son comunes en pacientes con AME. A continuación, te presentamos información sobre cómo manejarlas de manera efectiva.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg">
            <FaLungs className="text-orange-500 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Problemas Respiratorios</h3>
            <p className="text-gray-600">
              La debilidad muscular puede afectar los músculos respiratorios, lo que puede llevar a complicaciones como la hipoventilación y las infecciones respiratorias. Es importante realizar controles periódicos y utilizar dispositivos de asistencia cuando sea necesario.
            </p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg">
            <FaHeartbeat className="text-orange-400 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Complicaciones Digestivas</h3>
            <p className="text-gray-600">
              Los pacientes con AME pueden experimentar reflujo, estreñimiento y otros problemas digestivos. Una dieta adecuada y el uso de medicamentos pueden ayudar a manejar estas complicaciones.
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <FaProcedures className="text-orange-600 text-3xl mb-4" />
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Cuidados de la Piel</h3>
            <p className="text-gray-600">
              La inmovilidad puede aumentar el riesgo de úlceras por presión. Es importante cambiar de posición con frecuencia y utilizar colchones especiales para prevenir estas complicaciones.
            </p>
          </div>
        </div>
      </div>


            {/* Sección Juntos Transformamos Vidas */}
            <h2 className="py-5 text-4xl text-center font-bold text-gray-700">
        Juntos, transformamos vidas
      </h2>
      
      <div className="px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-gray-600 mt-4">
            Detrás de cada persona con AME hay una red de apoyo llena de amor, 
            conocimiento y dedicación. Familia, amigos y especialistas, unidos 
            por el mismo propósito: marcar la diferencia.
          </p>
        </div>

        {/* Botones más pequeños y alineados correctamente */}
        <div className="mt-6 md:mt-0 md:w-1/3 flex flex-wrap md:flex-nowrap gap-3 md:justify-end">
  <a
    href="/conocenos"
    className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition bg-orange-500 hover:bg-orange-600"
  >
    Conócenos
  </a>

  <a
    href="/about-ame"
    className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition bg-orange-400 hover:bg-orange-500"
  >
    ¿Qué es AME?
  </a>
</div>

      </div>

      
    </div>
  );
};

export default Care;