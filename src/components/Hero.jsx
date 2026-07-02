import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import hero from "../assets/profile.png?url";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#f5f7fa] dark:bg-[#020617] overflow-hidden transition-all duration-500">

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <div className="grid md:grid-cols-2 gap-20 items-center w-full">

          {/* LEFT SIDE */}
          <div>

            {/* INTRO */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-400/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-cyan-500/10 mb-8">

              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>

              <div className="w-2 h-2 rounded-full bg-cyan-300"></div>

              <p className="text-cyan-400 font-mono tracking-wider text-sm md:text-base">
                💻 HELLO, I'M
              </p>

            </div>

            {/* NAME */}
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-black dark:text-white">
              Devdatta{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Salunkhe
              </span>
            </h1>

            {/* ROLE */}
            <h2 className="mt-8 text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Full Stack Web Developer | Data Analyst
            </h2>

            {/* TYPOGRAPHY */}
            <div className="mt-10 overflow-hidden h-[60px]">

              <div className="typing-wrapper">

                <div className="typing-text">
                  &gt; Hackathon Winner
                </div>

                <div className="typing-text">
                  &gt; AI Automation
                </div>

                <div className="typing-text">
                  &gt; Data Visualization
                </div>

                <div className="typing-text">
                  &gt; Data Cleaning
                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5 mt-14">

              {/* Projects */}
              <button className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-xl shadow-cyan-500/30">
                View Projects ↓
              </button>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Devdatta_Salunkhe_Resume.pdf"
                className="px-8 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:scale-105 transition-all duration-300 text-black dark:text-white"
              >
              📄 Download Resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl text-black dark:text-white hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl text-black dark:text-white hover:text-cyan-400"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-20 rounded-full"></div>

              {/* IMAGE CIRCLE */}
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[6px] border-cyan-400/80 shadow-2xl shadow-cyan-400/40 bg-slate-200/80">

                <img
                  src={hero}
                  alt="Devdatta Salunkhe"
                  className="w-full h-full object-cover object-center scale-105"
                />

              </div>

              {/* Firebase */}
              <div className="absolute -top-3 right-0 bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-bounce">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="firebase"
                  className="w-7 h-7"
                />
              </div>

              {/* Netlify */}
              <div className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-bounce delay-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                  alt="netlify"
                  className="w-7 h-7"
                />
              </div>

              {/* Power BI */}
              <div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-bounce delay-500">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                  alt="powerbi"
                  className="w-7 h-7"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;