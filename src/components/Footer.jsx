import { FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import DonateButton from "./DonateButton";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white mt-10">
      {/* Onda decorativa */}
      

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left py-12 px-6 md:px-20">
        {/* Bloque Izquierdo */}
        
      <div className="relative z-10 flex flex-col items-center text-center py-12 px-6">
        <h1 className="font-bold  mb-5 text-[clamp(20px,3.5vw,30px)]">Fundación SMA Panamá</h1>
        <p className="text-lg font-semibold mb-4">
          "Juntos, podemos marcar la diferencia."
        </p>
        </div>

        {/* Bloque Derecho */}
        <div className="md:w-1/3 flex flex-col items-center ">
          <h2 className="font-bold text-[clamp(14px,1.5vw,30px)] mb-2 ">
            Contáctanos:
          </h2>
          <div className="flex flex-col gap-2 mb-4 items-center ">
            <p className="flex gap-2">
               Telenofo: +507 6349-1462 o +507 6228-5188
            </p>
            <p className="flex gap-2 ">
              Correo: fundacionsmapanama@gmail.com
            </p>
          </div>

          {/* Redes sociales */}
          <a
            href="https://www.instagram.com/fundsmapanama?igsh=MWdjZ3ZjZXVjYnJ1MA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2  text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={28} />
            <span className="font-semibold">Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;