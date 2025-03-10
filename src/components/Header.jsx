import { useState, useRef, useEffect } from "react";
import DonateButton from "../components/DonateButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const menuRef = useRef(null);

  // Cerrar submenú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveSubMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741398720/LOGO_FONDO_TRANSPARENTE_n9x0rc.png"
            className="h-12"
            alt="Logo SMA Panamá"
          />
        </a>

        {/* Botón de donación y menú hamburguesa */}
        <div className="flex lg:order-2">
          <DonateButton />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent-light"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú de navegación */}
        <div ref={menuRef} className={`w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 font-medium p-4 lg:p-0 border border-gray-100 rounded-lg bg-gray-50 lg:border-0 lg:bg-white">
            <li>
              <a href="/" className="block py-2 px-3 text-textColor rounded-md hover:bg-accent-light lg:hover:bg-transparent lg:hover:text-accent transition">
                Inicio
              </a>
            </li>

            {/* Menú con submenú */}
            <li className="relative">
              <button
                onClick={() => setActiveSubMenu(activeSubMenu === "ame" ? null : "ame")}
                className="block w-full text-left py-2 px-3 text-textColor rounded-md hover:bg-accent-light lg:hover:bg-transparent lg:hover:text-accent transition flex justify-between items-center"
              >
                ¿Qué es la AME?
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={activeSubMenu === "ame" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>

              {/* Submenú */}
              <ul className={`absolute left-0 mt-1 bg-white shadow-md rounded-md w-40 transition-all duration-200 ${activeSubMenu === "ame" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                <li>
                  <a href="/about-ame" className="block py-2 px-4 text-textColor hover:bg-accent-light lg:hover:text-accent transition rounded-md">
                    Información
                  </a>
                </li>
                <li>
                  <a href="/care" className="block py-2 px-4 text-textColor hover:bg-accent-light lg:hover:text-accent transition rounded-md">
                    Cuidados
                  </a>
                </li>
              </ul>
            </li>

            <li className="relative">
              <button
                onClick={() => setActiveSubMenu(activeSubMenu === "fundacion" ? null : "fundacion")}
                className="block w-full text-left py-2 px-3 text-textColor rounded-md hover:bg-accent-light lg:hover:bg-transparent lg:hover:text-accent transition flex justify-between items-center"
              >
                Fundación
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={activeSubMenu === "fundacion" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </button>

              {/* Submenú */}
              <ul className={`absolute left-0 mt-1 bg-white shadow-md rounded-md w-40 transition-all duration-200 ${activeSubMenu === "fundacion" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                <li>
                  <a href="/conocenos" className="block py-2 px-4 text-textColor hover:bg-accent-light lg:hover:text-accent transition rounded-md">
                    Conócenos
                  </a>
                </li>
                <li>
                  <a href="/activities" className="block py-2 px-4 text-textColor hover:bg-accent-light lg:hover:text-accent transition rounded-md">
                    Actividades
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/noticias" className="block py-2 px-3 text-textColor rounded-md hover:bg-accent-light lg:hover:bg-transparent lg:hover:text-accent transition">
                Noticias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
