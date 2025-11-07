import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard({ onReset }) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("crushResponse");
    if (saved) setResponse(saved);
  }, []);

  const handleResponse = (choice) => {
    localStorage.setItem("crushResponse", choice);
    setResponse(choice);
  };

  const handleReset = () => {
    localStorage.removeItem("crushResponse");
    setResponse(null);
    if (onReset) onReset();
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{ backgroundImage: "url('/bg-dashboard.jpg')" }}
    >
      {/* Overlay gelap lembut */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Kontainer isi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl w-[92%] bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-10 overflow-y-auto max-h-[85vh]"
      >
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-pink-200 text-center">
          Aku Cuma Mau Cerita Sedikit
        </h1>

        {/* Konten panjang biar bisa discroll */}
        <div className="text-gray-100 leading-relaxed space-y-6 text-justify">
          <p>
            Aku gak tahu gimana caranya mulai cerita ini dengan benar, tapi aku cuma pengen sedikit berbagi hal yang selama ini tersimpan di kepala. 
            Kadang, hal-hal kecil yang gak sengaja terjadi bisa meninggalkan kesan yang besar — entah itu dari cara seseorang tersenyum, cara dia berbicara, atau bahkan sekadar diamnya yang terasa menenangkan.
          </p>
          <p>
            Aku udah lama pengen nyampaikan sesuatu, tapi gak pernah tahu cara yang tepat. Makanya aku bikin halaman ini. 
            Mungkin aneh, tapi lewat tulisan dan sedikit kode, aku bisa lebih jujur dari biasanya. 
            Setiap baris teks di sini aku tulis pelan-pelan, dengan niat supaya semuanya tersampaikan apa adanya.
          </p>
          <p>
            Aku gak punya maksud lain selain ingin bilang bahwa keberadaan kamu berarti. 
            Mungkin kamu gak sadar, tapi kamu pernah bikin hari seseorang jadi lebih baik hanya dengan menjadi dirimu sendiri. 
            Aku lihat itu, dan aku ngerasa harus berterima kasih, meskipun gak pernah ada momen yang pas buat ngomong langsung.
          </p>
          <p>
            Dunia kadang terasa cepat banget, semua orang sibuk ngejar sesuatu. Tapi di tengah semua itu, aku cuma pengen melambat sebentar dan bilang bahwa hal-hal sederhana pun bisa punya makna. 
            Kamu adalah salah satunya.
          </p>
          <p>
            Aku gak tahu gimana kelanjutannya nanti, tapi setidaknya sekarang aku udah nyoba buat jujur. 
            Kalau kamu ngerasa nyaman, kita bisa lanjut ngobrol, atau mungkin kamu pengen cukup sampai sini aja. 
            Dua-duanya gak apa-apa, aku tetap menghargai waktu kamu udah mau baca sampai habis.
          </p>
        </div>

        {!response ? (
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => handleResponse("ya")}
              className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
            >
              Mau Lanjut Ngobrol
            </button>
            <button
              onClick={() => handleResponse("tidak")}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
            >
              Cukup Sampai Sini
            </button>
          </div>
        ) : (
          <div className="mt-10 text-center text-lg font-medium">
            {response === "ya" ? (
              <p className="text-green-300">
                Terima kasih sudah mau membuka diri. Kadang yang dibutuhkan cuma satu percakapan yang tulus.
              </p>
            ) : (
              <p className="text-red-300">
                Gak apa-apa. Kadang cerita terbaik pun gak perlu diselesaikan, cukup dikenang dengan tenang.
              </p>
            )}
            <button
              onClick={handleReset}
              className="mt-6 text-sm text-white/80 hover:text-white underline underline-offset-4 transition"
            >
              Ulang dari awal
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
