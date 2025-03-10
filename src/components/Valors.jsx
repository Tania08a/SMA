import { BiAdjust, BiHeartCircle, BiGroup, BiPulse } from "react-icons/bi";

const Valores = () => {
  return (
    <section className="pt-16 text-center">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Adaptabilidad */}
          <div className="flex flex-col items-center">
            <BiAdjust className="text-purple-600 w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold text-gray-700">Adaptabilidad</h3>
            <p className="text-gray-500 mt-2">
              La fuerza para adaptarse y avanzar es el motor que impulsa a las familias con AME.
            </p>
          </div>

          {/* Calidad de vida */}
          <div className="flex flex-col items-center">
            <BiHeartCircle className="text-purple-600 w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold text-gray-700">Calidad de vida</h3>
            <p className="text-gray-500 mt-2">
              Nuestro compromiso es mejorar cada día para brindar esperanza y bienestar a quienes más lo necesitan.
            </p>
          </div>

          {/* Comunidad unida */}
          <div className="flex flex-col items-center">
            <BiGroup className="text-purple-600 w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold text-gray-700">Comunidad unida</h3>
            <p className="text-gray-500 mt-2">
              Juntos construimos una red de apoyo donde la empatía y el trabajo en equipo marcan la diferencia.
            </p>
          </div>

          {/* Apoyo al diagnóstico */}
          <div className="flex flex-col items-center">
            <BiPulse className="text-purple-600 w-12 h-12" />
            <h3 className="mt-4 text-lg font-bold text-gray-700">Apoyo al diagnóstico</h3>
            <p className="text-gray-500 mt-2">
              Un diagnóstico temprano puede cambiar vidas; nuestra misión es hacerlo posible para todos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Valores;
