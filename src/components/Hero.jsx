import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

export default function Hero() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    if (!started && audioRef.current) {
      audioRef.current.play().catch((err) =>
        console.log("Autoplay blocked:", err)
      );
      setStarted(true);
    }
  };

  useEffect(() => {
    const handleClick = () => startMusic();
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [started]);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      <div className="hero-overlay"></div>

      {/* ===== Konten Tengah ===== */}
      <motion.div
        className="hero-content max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-white">
          Hai, <span className="text-pink-400 italic">terima kasih</span> sudah sampai di sini
        </h1>

        <p className="mt-5 text-gray-100 text-lg font-poppins">
          Sambil dimakan ya makanannya biar gak bosen haha
        </p>

        {!started && (
          <p className="mt-6 text-gray-300 text-sm font-poppins animate-pulse">
            Klik di mana saja untuk mulai musik
          </p>
        )}
      </motion.div>

      {/* ===== Garis Melengkung ke Tombol Login ===== */}
      <div className="absolute top-28 right-12 md:right-24 flex items-center">
        <svg
          width="220"
          height="80"
          viewBox="0 0 220 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
        >
          <path
            d="M0,70 C100,10 160,40 220,0"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
          <path
            d="M210,4 L220,0 L210,-4"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span className="ml-1 text-white text-sm font-poppins opacity-80"></span>
      </div>

      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
    </section>
  );
}
