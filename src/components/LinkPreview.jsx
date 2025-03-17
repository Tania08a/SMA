import React, { useState, useEffect } from "react";
import { db } from "../utilities/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const LinkPreview = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        // Cambia "noticias" por "noticia"
        const linksRef = collection(db, "noticia");
        const snapshot = await getDocs(linksRef);

        const linksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLinks(linksData);
      } catch (error) {
        console.error("Error obteniendo enlaces:", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="relative overflow-hidden mx-auto">
      {/* Contenedor scrollable con mejor scroll */}
      <div className="flex space-x-6 overflow-x-auto scrollbar-custom snap-x scroll-smooth pb-6">
        {links.map((link, index) => (
          <div
            key={index}
            className="min-w-[95%] sm:min-w-[60%] lg:min-w-[45%] xl:min-w-[40%] snap-start bg-white shadow-lg rounded-xl p-4"
          >
            <div className="relative h-56 overflow-hidden rounded-lg">
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mt-3 text-purple-700">{link.title}</h2>
            <p className="text-gray-600 text-base mt-2 line-clamp-3">{link.description}</p>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Leer más
            </a>
          </div>
        ))}
      </div>

      {/* Degradado en el extremo derecho para suavizar el scroll */}
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default LinkPreview;