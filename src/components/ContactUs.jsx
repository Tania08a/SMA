import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n96e7be", "template_1ewvkw5", form.current, {
        publicKey: "i5kNhTpZvOfoWCzwN",
      })
      .then(
        () => {
          setMessage("¡Mensaje enviado con éxito! ✅");
          form.current.reset();
        },
        (error) => {
          setMessage("❌ Error al enviar el mensaje. Intenta de nuevo.");
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ">
      <img
        src="https://res.cloudinary.com/df6cxn8ga/image/upload/v1741398720/LOGO_FONDO_TRANSPARENTE_n9x0rc.png" 
        alt="Contacto"
        className="hidden md:block w-1/2 rounded-lg"
      />
            <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">

      <h2 className="text-2xl font-bold text-primary text-center mb-4">
        Contáctanos
      </h2>

      <p className="text-textColor text-center mb-4 font-semibold">
        Si sospechas que un familiar padece de Atrofia Muscular Espinal, favor
        llena el siguiente formulario.
      </p>

      {message && (
        <p className="text-center mb-4 text-textColor font-semibold">{message}</p>
      )}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-textColor font-semibold">Nombre</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-textColor font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-textColor font-semibold">Mensaje</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary h-24 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-bold py-2 rounded-md transition-all hover:bg-secondary"
        >
          Enviar
        </button>
      </form>
    </div>
    </div>

  );
};
