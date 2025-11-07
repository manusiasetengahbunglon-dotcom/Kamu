import React from "react";

export default function Navbar({ onLoginClick, onLogout, isLoggedIn }) {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center p-6 text-white">
      <h1 className="text-2xl font-semibold tracking-wide">cure</h1>

      {isLoggedIn ? (
        <button
          onClick={onLogout}
          className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={onLoginClick}
          className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
        >
          Login
        </button>
      )}
    </nav>
  );
}
