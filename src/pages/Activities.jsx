import { useState, useEffect } from "react";
import { db } from "../utilities/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Activities = () => {
  const [documents, setDocuments] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const imagesRef = collection(db, "imagenes");
        const snapshot = await getDocs(imagesRef);

        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          urls: doc.data().url || [],
          fecha: doc.data().fecha || "Fecha no disponible",
        }));

        setDocuments(docs);
      } catch (error) {
        console.error("Error obteniendo documentos:", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="p-6 mt-30">
      <h1 className="text-5xl text-purple-500 text-center font-bold mb-4">Actividades</h1>

{/* Contenedor de botones con scroll horizontal */}
<div className="flex gap-4 mt-10 overflow-x-auto p-2 whitespace-nowrap scrollbar-custom">
  {documents.map((doc) => (
    <div key={doc.id} className="text-center">
      <button
        className="relative w-80 h-15 0 bg-purple-400 text-white rounded-lg shadow-lg flex justify-center items-center hover:bg-purple-500 overflow-hidden"
        onClick={() => {
          setSelectedImages(doc.urls);
          setSelectedTitle(doc.id);
          setSelectedDate(doc.fecha);
        }}
      >
        <div className="relative w-full overflow-hidden  ">
          <span className="text-lg font-bold pl-4 ">
            {doc.id}
          </span>
        </div>
      </button>
    </div>
  ))}
</div>


      {/* Sección de imágenes con Masonry Layout */}
      <div className="mt-6">
        {selectedTitle && (
          <div className="mb-4">
            <h2 className="mt-10 text-3xl text-orange-500 text-center font-bold">{selectedTitle}</h2>
            <p className="mt-2 mb-10 text-gray-500 text-center">{selectedDate}</p>
          </div>
        )}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
  {selectedImages.length > 0 ? (
    selectedImages.map((url, index) => (
      <div key={index} className="relative group">
        <img
          src={url}
          alt={`Imagen ${index + 1}`}
          className="w-full rounded-lg shadow-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          onError={(e) => (e.target.style.display = "none")}
        />
        <div className="absolute inset-0 transition-all duration-300 ease-in-out rounded-lg"></div>
      </div>
    ))
  ) : (
    <p className="text-black">Selecciona una actividad para ver imágenes.</p>
  )}
</div>
      </div>
    </div>
  );
};

export default Activities;
