import React, { useState, useEffect } from "react";
import { db } from "../utilities/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Cambia "noticias" por "noticia"
        const newsRef = collection(db, "noticia");
        const snapshot = await getDocs(newsRef);

        const news = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNewsData(news);
      } catch (error) {
        console.error("Error obteniendo noticias:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="relative w-screen h-screen overflow-hidden left-1/2 ml-[-50vw] mr-[-50vw]">
        <img
          src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741587554/IMG_1682_vd0aza.jpg"
          alt="Fondo"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>

        <div className="absolute top-1/2 right-0 bg-orange-500/65 text-white px-30 py-10 text-6xl font-bold rounded-l-3xl">
          <h1>Noticias de la AME</h1>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mt-25 text-purple-700">
        Noticias y novedades de la AME
      </h1>
      <p className="text-gray-600 text-lg text-center my-4">
        La Atrofia Muscular Espinal (AME) es una enfermedad genética rara. Aquí te compartimos las últimas noticias e investigaciones sobre esta condición.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-700">
                {news.title}
              </h2>
              <p className="text-gray-600 mt-2">{news.description}</p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;