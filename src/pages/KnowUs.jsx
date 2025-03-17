import MisionVision from "../components/MisionVision";  
import NuestraHistoria from "../components/NuestraHistoria";
import NuestrosObjetivos from "../components/NuestrosObjetivos";
const KnowUs = () => {
    return (
      <div>
        <div className="relative w-screen h-screen overflow-hidden left-1/2 ml-[-50vw] mr-[-50vw]">
        <img
          src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587959/Copia_de_DSC_0075_kdl3pc.jpg"
          alt="Fondo"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>

        {/* Título en la parte izquierda */}
        <div className="absolute top-1/2 left-0 bg-orange-500/65 text-white px-20 py-10 text-5xl font-bold rounded-r-3xl">
          <h1>Fundación SMA Panamá</h1>
        </div>
      </div>

      <NuestraHistoria />

        <NuestrosObjetivos />
        
        
        <MisionVision />

      </div>
      
    );
  };
  
  export default KnowUs; // ✅ Asegúrate de que esto está presente
  