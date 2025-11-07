import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginModal from "./components/LoginModal";
import Dashboard from "./pages/Dashboard";
import PersistentAudio from "./components/PersistentAudio";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ state baru
  const navigate = useNavigate();

  // ✅ Fungsi logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/"); // balik ke halaman Hero
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <PersistentAudio />
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn} // ✅ kirim status login ke Navbar
      />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {showLogin && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
          <LoginModal
            onClose={() => setShowLogin(false)}
            onLoginSuccess={() => {
              setShowLogin(false);
              setIsLoggedIn(true); // ✅ ubah jadi login
              navigate("/dashboard");
            }}
          />
        </div>
      )}
    </div>
  );
}
