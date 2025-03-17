import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const Donate = () => {
  const [view, setView] = useState("bank");

  useEffect(() => {
    if (view === "paypal") {
      window.open("https://www.paypal.com/donate?hosted_button_id=ULPCKKJEA6J8W", "_blank");
    }
  }, [view]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] mt-25"> 
      <div className="w-full md:w-[40%] max-w-lg p-6 md:p-8 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
        <img src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741398720/LOGO_FONDO_TRANSPARENTE_n9x0rc.png" alt="LOGO" className="mb-5" />
        <h1 className="text-2xl font-bold mb-3 text-center">¡Haz tu donación y cambia vidas!</h1>
        <p className="mb-4 text-center text-sm md:text-base">Tu ayuda nos permite continuar con nuestra misión.</p>

        <div className="flex items-center bg-orange-300 rounded-full p-1 mb-4 relative w-full max-w-xs">
          <div
            className="absolute inset-0 bg-orange-500 rounded-full transition-all duration-300"
            style={{
              width: view === "bank" ? "65%" : "60%",
              left: view === "bank" ? "0" : "40%",
            }}
          ></div>

          <button
            className={`px-3 py-2 text-sm md:text-base rounded-full flex-1 text-center font-bold z-10 transition-all duration-300 whitespace-nowrap ${view === "bank" ? "text-white" : "text-black"}`}
            onClick={() => setView("bank")}
          >
            Banco G.
          </button>

          <div className="w-8 h-8 flex items-center justify-center rounded-full z-10 transition-all duration-300" style={{ backgroundColor: "#F56B2A" }}>
            <FaHeart className="w-5 h-5 text-white" />
          </div>

          <button
            className={`px-3 py-2 text-sm md:text-base rounded-full flex-1 text-center font-bold z-10 transition-all duration-300 ${view === "paypal" ? "text-white" : "text-black"}`}
            onClick={() => setView("paypal")}
          >
            PayPal
          </button>
        </div>

        <div >
          {view === "bank" ? (
            <div>
               <p className="mb-2"> <strong>Banco:</strong> Banco General </p>
              <p className="mb-2"><strong>Numero de cuenta:</strong> 03-01-01-135129-0</p>

              <p className="mb-2"><strong>Tipo de cuenta:</strong> Cuenta corriente</p>
              <p className="mb-2"><strong>Nombre:</strong> Fundacion de niños sma panama</p>
              <p className="mb-2 mt-5"><strong>Directorio de Yappy:</strong> @fundsmapanama</p>
            </div>
          ) : (
            <p className="text-lg font-semibold text-orange-500">Redirigiendo a PayPal...</p>
          )}
        </div>
      </div>

      <div className="hidden md:block w-[50%] h-150 bg-cover bg-center rounded-lg shadow-lg ml-6" style={{ backgroundImage: "url('https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587946/Copia_de_IMAGEN_ENCUENTRO_DE_FAMILIAS_2019_lknmid.jpg')" }}></div>
    </div>
  );
};

export default Donate;

