import React, { useState } from "react";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (id === "kamu" && pw === "12345") {
      alert("Login berhasil ✅");
      onLoginSuccess(); // ⬅️ panggil langsung tanpa onClose()
    } else {
      setError("ID atau password salah ❌");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold font-[Montserrat] mb-4 text-center">
          Login
        </h2>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 font-[Poppins]"
        />
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full mb-4 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 font-[Poppins]"
        />
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-[Poppins]"
        >
          Masuk
        </button>
        <button
          onClick={onClose}
          className="w-full mt-3 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-[Poppins]"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
