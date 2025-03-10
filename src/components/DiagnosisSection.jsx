import React from "react"; 

const DiagnosisCard = ({ title, description, image, isRight }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto">
      <div className={`relative md:w-1/2 ${isRight ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={title}
          className={`absolute w-[100%] md:w-[90%] shadow-lg rounded-lg ${isRight ? "md:left-25 " : "md:-left-15 top-1"}`}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left p-6">
        <h2 className="text-orange-600 text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const DiagnosisSection = () => {
  return (
    <div className="space-y-16 p-4">
      <DiagnosisCard
        title="Diagnóstico de la AME en lactantes y niños"
        description="Identificar la AME en las primeras etapas de vida permite implementar tratamientos y cuidados específicos que mejoren significativamente la calidad de vida de los pequeños. La detección temprana es fundamental para abordar la enfermedad desde el inicio y ofrecer un futuro lleno de posibilidades."
        image="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502942/SMAKids_qghumy.jpg"
        isRight={false}
      />
      <DiagnosisCard
        title="Diagnóstico de la AME en adultos"
        description="Aunque menos común, el diagnóstico de la AME en adultos presenta retos únicos. Sin embargo, identificar la enfermedad permite acceder a tratamientos que pueden ralentizar su progresión, mejorar la movilidad y brindar un mayor bienestar en la vida diaria."
        image="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741502940/SMAAdult_te737k.jpg"
        isRight={true} 
      />
    </div>
  );
};

export default DiagnosisSection;
