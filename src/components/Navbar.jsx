import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 dark:bg-black/20 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-cyan-400">
          Devdatta.
        </h1>

        {/* MENU */}
        <div className="flex items-center gap-8">

          <a
            href="#home"
            className="text-black dark:text-white hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-black dark:text-white hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-black dark:text-white hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-black dark:text-white hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-black dark:text-white hover:text-cyan-400 transition"
          >
            Contact
          </a>

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-400 hover:scale-110 transition-all duration-300"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;