import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { db } from "../utilities/FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const Comunidad = () => {
  const [comunidadData, setComunidadData] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comunidad"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComunidadData(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (comunidadData.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comunidadData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [comunidadData.length]);

  if (comunidadData.length === 0) {
    return <p className="text-center text-gray-500">Cargando comunidad...</p>;
  }

  return (
    <div className="py-16 text-center">
      {/* Contenedor de imagen y descripción */}
      <div className="flex flex-col md:flex-row items-center  justify-center gap-12">
        {/* Imagen */}
        <img
          src={comunidadData[index].imagen}
          alt={comunidadData[index].nombre}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-lg shadow-lg object-cover"
        />

        {/* Contenedor de texto (Comunidad, Nombre y Descripción) */}
        <div className="max-w-xl text-left flex flex-col justify-end h-full">
          <h2 className="text-3xl font-bold text-gray-700 ">Comunidad</h2>
          <h3 className="text-xl font-bold mt-6 md:mt-12 lg:mt-20">{comunidadData[index].nombre}</h3>
          <p className="text-gray-600 mt-2">{comunidadData[index].descripcion}</p>
        </div>
      </div>

      {/* Indicadores de selección */}
      <div className="flex justify-center mt-4 space-x-2">
        {comunidadData.map((_, i) => (
          <FaCircle
            key={i}
            className={`cursor-pointer ${i === index ? "text-purple-400" : "text-gray-300"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comunidad;
