import React, { useEffect, useRef } from "react";

export default function PersistentAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Coba langsung play
      const playAudio = () => {
        audio.play().catch((err) => {
          console.warn("Autoplay diblokir browser:", err);
        });
      };

      playAudio();

      // Kalau user klik di mana saja di halaman, mulai musik
      const handleUserInteraction = () => {
        audio.play();
        document.removeEventListener("click", handleUserInteraction);
      };

      document.addEventListener("click", handleUserInteraction);
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
