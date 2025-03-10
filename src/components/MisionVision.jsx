import { FaUsers, FaLightbulb } from "react-icons/fa";

const MisionVision = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-6 mt-35 max-w-6xl mx-auto">
      {/* Misión */}
      <div className="relative flex-1 border-2 border-purple-500 rounded-lg p-8 text-center md:text-left">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          {/* Ícono */}
          <div className="bg-white border-4 border-purple-500 p-3 rounded-full">
            <FaUsers size={32} className="text-purple-500" />
          </div>
          {/* Título con ancho responsivo y máximo ancho */}
          <div
            className="
              bg-purple-500 text-white text-lg font-bold py-2 rounded-md text-center
              w-[90vw]            /* 90% del ancho de la ventana en pantallas muy pequeñas */
              max-w-xl           /* No exceder 480px aprox */
              sm:w-[70vw]        /* 70% en pantallas >=640px */
              md:w-[35vw]        /* 50% en pantallas >=768px */
              lg:w-[38vw]        /* 40% en pantallas >=1024px */
            "
          >
            Misión
          </div>
        </div>
        {/* Contenido */}
        <p className="mt-20 text-gray-700 text-sm md:text-base">
          La fundación de niños SMA Panamá se compromete a apoyar a las familias afectadas 
          por la atrofia muscular espinal, ofreciendo diagnóstico genético gratuito, 
          empoderamiento y educación para mejorar la calidad de vida de los niños afectados.
        </p>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Además, trabajamos en colaboración con médicos pediatras y especialistas 
          (neurólogos, fisiatra, genetista) para proporcionar docencia y promover 
          políticas públicas que garanticen el diagnóstico temprano y el acceso a tratamientos en el país.
        </p>
      </div>

      {/* Visión */}
      <div className="relative flex-1 border-2 border-orange-500 rounded-lg p-8 text-center md:text-left">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          {/* Ícono */}
          <div className="bg-white border-4 border-orange-500 p-3 rounded-full">
            <FaLightbulb size={32} className="text-orange-500" />
          </div>
          {/* Título con ancho responsivo y máximo ancho */}
          <div
            className="
              bg-orange-500 text-white text-lg font-bold py-2 rounded-md text-center
              w-[90vw]
              max-w-xl
              sm:w-[70vw]
              md:w-[35vw]
              lg:w-[38vw]
            "
          >
            Visión
          </div>
        </div>
        {/* Contenido */}
        <p className="mt-20 text-gray-700 text-sm md:text-base">
          Nos esforzamos para mejorar la vida de los pacientes con 
          atrofia muscular espinal y mejorar la atención integral de la AME en Panamá, 
          brindando apoyo a las familias y abogando por un sistema de salud que garantice 
          un diagnóstico precoz, un manejo multidisciplinario y un acceso equitativo a los tratamientos.
        </p>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          Aspiramos a un futuro donde todos los niños con AME puedan alcanzar su máximo 
          potencial y disfrutar de una mejor calidad de vida.
        </p>
      </div>
    </div>
  );
};

export default MisionVision;
