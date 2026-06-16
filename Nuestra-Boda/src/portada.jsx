import React, { useRef, useState } from 'react';

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <img
          src="/01_PORTADA.JPEG"
          alt="Fondo"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative w-full h-full flex flex-col items-center justify-start pt-1 p-4 gap-4">
          <h1 className="roboto-black text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-serif text-center leading-none">
            Nuestra Boda
          </h1>

          <p className="font-serif text-4xl sm:text-4xl md:text-4xl lg:text-4xl">
            19 | 12 | 2026
          </p>

          <p className="font-serif text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-center">
            Melissa & Miguel
          </p>
        </div>
      </section>
    </div>
  );
}