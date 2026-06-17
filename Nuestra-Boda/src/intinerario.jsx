import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import Regalos from "./componentes-encabezado/MesadeRegalo";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import Contador from "./componentes-encabezado/Contador";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Contador/>
{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className=" overflow-hidden">

        <Celebracion
          titulo="Recepción"
          hora="2:00 p.m."
          lugar="Salón de Eventos Los Olivos"
          direccion="Merida, Yucatan"
          ubicacion="https://maps.app.goo.gl/cQrZcRrwBnqKKKeV8"
        />

      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* IMAGEN FINAL */}
      <div className="relative flex items-center justify-center bg-[#496985] overflow-hidden">

  <img
    src="/02.JPEG"
    alt="Nuestra Historia"
    className="w-full max-w-5xl object-cover"
  />

  {/* Degradado elegante */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

{/* Frase */}
<div className="absolute bottom-10 md:bottom-16 px-8 text-center max-w-4xl left-1/2 -translate-x-1/2">

  <h2
    className="
      font-playfair
      text-[#F4E681]
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      leading-tight
      drop-shadow-lg
    "
  >
    Nuestro Hogar
  </h2>

  <div className="w-24 h-[2px] bg-[#C45A00] mx-auto my-5"></div>

  <p
    className="
      font-playfair
      text-white
      text-base
      sm:text-lg
      md:text-xl
      lg:text-2xl
      leading-relaxed
      max-w-3xl
      mx-auto
    "
  >
    Construimos un hogar el día que decidimos compartir nuestros sueños.
    Hoy celebramos esa decisión.
  </p>

</div>

</div>
{/* Mesa de Regalos */}
<Regalos/>

 {/* CONFIRMACION */}
    <Confirmacion/>

    </div>
  );
}