const NuestraHistoria = () => {
    return (
      <section className=" to-white py-30 ">
        <div className="max-w-7xl mx-auto text-center">
          {/* Título */}
          <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-6xl md:text-6xl font-bold">
            Nuestra <span className="text-orange-500">Historia</span>
          </h2>

          {/* Mensaje de alerta (ahora a la derecha) */}
          <div className="bg-orange-500 text-white text-lg md:text-xl font-semibold py-4 px-6 mt-4 md:mt-0 rounded-lg shadow-lg">
            Actualmente, nuestra comunidad cuenta con <span className="font-bold">17 niños diagnosticados</span>, 
            de los cuales <span className="underline">lastimosamente 2 han fallecido.</span>
          </div>
        </div>

  
          {/* Contenido */}
          <div className="mt-10 text-gray-700 text-lg space-y-6 text-left">
            <p>
              La <span className="font-bold text-orange-500">Fundación de Niños SMA Panamá</span> es una organización 
              <span className="font-bold"> sin fines de lucro</span>, fundada en noviembre de 2020, con el propósito de 
              brindar apoyo integral a niños y adultos con 
              <span className="text-orange-500 font-semibold"> Atrofia Muscular Espinal (AME)</span> en Panamá.
            </p>
  
            <p>
              Nuestra historia comienza en el año <span className="font-bold text-gray-900">2018</span>, cuando 
              <span className="font-bold text-gray-900"> Diego</span>, de 4 años, recibió su diagnóstico 
              después de dos años de síntomas inexplicables. La noticia impactó a su familia y comunidad, 
              despertando la necesidad de buscar soluciones y apoyo.
            </p>
  
            <p>
              En <span className="font-bold text-gray-900">2019</span>, gracias a su nacionalidad italiana, 
              Diego pudo recibir tratamiento en Italia. Esta experiencia transformó su vida y motivó la creación de nuestra fundación, 
              con la misión de ayudar a otros afectados por esta enfermedad en Panamá.
            </p>
  
            <p>
              A partir de esta experiencia, nos comprometimos a <span className="font-bold text-orange-500">
              proporcionar apoyo integral</span> a los niños y adultos con AME en Panamá. 
              Nuestros objetivos incluyen acceso a tratamientos, terapias, recursos y apoyo emocional.
            </p>
  
            <p className="text-gray-900 font-semibold text-xl text-center mt-8">
              ¡Juntos podemos construir un futuro más brillante para quienes enfrentan la AME en Panamá!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default NuestraHistoria;
  