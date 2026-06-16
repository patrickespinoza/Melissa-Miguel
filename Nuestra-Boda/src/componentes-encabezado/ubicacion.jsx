import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <div className="w-full bg-[#496985] py-20 px-6 flex flex-col items-center justify-center">

      {/* FECHA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#F4E681] tracking-[0.35em] uppercase text-sm sm:text-base font-semibold"
        >
          {dia}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-7xl sm:text-8xl font-playfair text-white leading-none mt-3 drop-shadow-lg"
        >
          {fecha}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-[#F4E681] text-2xl sm:text-3xl tracking-[0.2em] mt-3"
        >
          {mesAnio}
        </motion.p>

      </motion.div>

      {/* TARJETA */}
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          relative bg-white max-w-xl w-full p-10 sm:p-14
          shadow-[0_15px_50px_rgba(0,0,0,0.25)]
          border border-[#F4E681]

          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[0.8rem]
          rounded-bl-[0.8rem]
        "
      >

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-5 left-1/2 -translate-x-1/2 h-[2px] bg-[#C45A00]"
        />

        <div className="text-center space-y-3">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-playfair text-[#496985] tracking-wide"
          >
            {titulo}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="h-[2px] mx-auto bg-[#C45A00]"
          />

        </div>

        <div className="mt-10 flex flex-col items-center text-center space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C45A00] uppercase tracking-[0.25em] text-sm">
              Hora
            </p>

            <p className="text-2xl font-cursiveDancing text-[#496985] mt-2">
              {hora}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            viewport={{ once: true }}
          >

            <p className="text-[#C45A00] uppercase tracking-[0.25em] text-sm">
              Lugar
            </p>

            <p className="text-2xl font-cursiveDancing text-[#496985] mt-2">
              {lugar}
            </p>

            <p className="text-[#496985]/70 mt-3 leading-relaxed text-sm sm:text-base max-w-md">
              {direccion}
            </p>

          </motion.div>

          <motion.a
            href={ubicacion}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="
              mt-4 bg-[#C45A00] transition duration-300
              text-white px-8 py-3 rounded-full shadow-lg tracking-wide
            "
          >
            Ver Ubicación
          </motion.a>

        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 h-[2px] bg-[#C45A00]"
        />

      </motion.div>
    </div>
  );
};

export default Celebracion;