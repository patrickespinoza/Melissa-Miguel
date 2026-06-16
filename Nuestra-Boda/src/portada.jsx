import React from "react";

export default function Portada() {
  return (
    <section className="w-full bg-[#496985]">

      {/* MOBILE */}
      <div className="block md:hidden">
        <div className="relative w-full bg-[#496985]">
          <img
            src="/01_PORTADA.JPEG"
            alt="Melissa y Miguel"
            className="
              w-full
              object-contain
            "
          />

          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* TEXTO MOBILE */}
        <div
          className="
            relative
            overflow-hidden
            px-6
            py-16
            min-h-[360px]
            flex
            items-center
            justify-center
            text-center
            bg-[#496985]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F4E681]/10 via-transparent to-[#496985]"></div>

          <div className="relative z-10">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-[#F4E681]
                text-xs
                mb-5
                font-semibold
              "
            >
              Nuestra Boda
            </p>

            <h1
              className="
                font-playfair
                text-white
                text-5xl
                min-[390px]:text-6xl
                leading-tight
              "
            >
              Melissa
              <br />
              <span className="font-[DancingScript] text-[#C45A00] text-6xl min-[390px]:text-7xl">
                &
              </span>
              <br />
              Miguel
            </h1>

            <div
              className="
                w-24
                h-[2px]
                bg-[#C45A00]
                mx-auto
                my-6
              "
            />

            <p
              className="
                text-[#F4E681]
                tracking-[0.25em]
                text-sm
                uppercase
              "
            >
              Sábado
            </p>

            <p
              className="
                mt-3
                text-white
                text-3xl
                font-playfair
                tracking-[0.08em]
              "
            >
              19 · 12 · 2026
            </p>

            <p
              className="
                mt-4
                text-white/80
                tracking-[0.22em]
                text-xs
                uppercase
              "
            >
              Nos casamos
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="
          hidden
          md:flex
          relative
          h-screen
          items-center
          justify-center
          text-white
          overflow-hidden
        "
      >
        <img
          src="/01_PORTADA.JPEG"
          alt="Melissa y Miguel"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/25"></div>

        <div
          className="
            relative
            z-10
            text-center
            px-6
          "
        >
          <p className="uppercase tracking-[0.35em] text-[#F4E681] text-sm mb-6 font-semibold">
            Nuestra Boda
          </p>

          <h1
            className="
              font-playfair
              text-6xl
              lg:text-8xl
              leading-tight
              drop-shadow-lg
            "
          >
            Melissa
            <span className="font-[DancingScript] text-[#C45A00] mx-6">
              &
            </span>
            Miguel
          </h1>

          <div className="w-28 h-[2px] bg-[#C45A00] mx-auto my-8"></div>

          <p className="uppercase tracking-[0.25em] text-[#F4E681] text-base">
            Sábado
          </p>

          <p
            className="
              mt-4
              tracking-[0.12em]
              text-3xl
              lg:text-4xl
              font-playfair
              drop-shadow-md
            "
          >
            19 · 12 · 2026
          </p>

          <p className="mt-5 tracking-[0.25em] text-sm uppercase text-white/85">
            Nos casamos
          </p>
        </div>
      </div>
    </section>
  );
}