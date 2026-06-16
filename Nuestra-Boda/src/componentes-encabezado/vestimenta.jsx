import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full bg-[#496985] py-16 sm:py-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative max-w-6xl w-full
          bg-white
          rounded-tl-[3rem] sm:rounded-tl-[4rem]
          rounded-br-[3rem] sm:rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
          overflow-hidden
          grid grid-cols-1 lg:grid-cols-2
        "
      >

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            h-[420px]
            min-[390px]:h-[460px]
            sm:h-[520px]
            md:h-[600px]
            lg:h-full
            min-h-[420px]
          "
        >

          <img
            src="/Vestimenta.JPEG"
            alt="Vestimenta"
            className="
              w-full h-full
              object-contain
              lg:object-cover
              object-center
              bg-white
            "
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-[#496985]/5 lg:bg-[#496985]/10"></div>

        </motion.div>

        {/* TEXTO */}
        <div
          className="
            flex flex-col items-center justify-center
            text-center
            p-8
            sm:p-12
            lg:p-16
          "
        >

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[11px]
              sm:text-sm
              tracking-[0.2em]
              text-[#C45A00]
              font-semibold
            "
          >
            Código de Vestimenta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-playfair
              text-[#496985]
              mt-5
              leading-tight
            "
          >
            Vestimenta Formal y Elegante
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#C45A00] mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="
              mt-6 sm:mt-8
              text-base
              sm:text-lg
              md:text-xl
              text-[#496985]/80
              leading-relaxed
              max-w-md
              font-[DancingScript]
            "
          >
            No es necesario portar traje completo ni vestido de gala.
            Te invitamos a vestir de manera formal y elegante.
            Reservamos los tonos blanco, negro y similares.
            Como guía, te compartimos una paleta de colores de referencia.
          </motion.p>

        </div>

      </motion.div>
    </div>
  );
};

export default Vestimenta;