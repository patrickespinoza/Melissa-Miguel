import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";
import Regalos from "./componentes-encabezado/MesadeRegalo";
import Confirmacion from "./componentes-encabezado/Confirmacion";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className=" overflow-hidden">

        <Celebracion
          titulo="Recepción"
          hora="2:00 Pm"
          lugar="Salon de Eventos Los Olivos"
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
  <div className="absolute bottom-10 md:bottom-16 px-8 text-center max-w-4xl">
    
    <h2 className="font-[DancingScript] text-[#F4E681] text-4xl sm:text-5xl md:text-6xl mb-4">
      Nuestro Hogar
    </h2>

    <div className="w-24 h-[2px] bg-[#C45A00] mx-auto mb-6"></div>

    <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
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