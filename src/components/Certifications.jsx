import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCertificate, FaMedal, FaTimes, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const certifications = [
  {
    id: 1,
    icon: <FaAward />,
    title: "QHackathon – First Prize",
    description: "Won 1st place for building an innovative web application.",
    pdfUrl: "/certificates/qhackathon.pdf",
  },
  {
    id: 2,
    icon: <FaCertificate />,
    title: "MIT Certificate",
    description: "Completed professional certification program from MIT.",
    pdfUrl: "/certificates/mit.pdf",
  },
  {
    id: 3,
    icon: <FaCertificate />,
    title: "PES Engineering Competition",
    description: "Participated in National Level Engineering Competition.",
    pdfUrl: "/certificates/pes.pdf",
  },
  {
    id: 4,
    icon: <FaMedal />,
    title: "Rotarex State Level Competition",
    description: "Participated in Rotarex State Level Technical Competition.",
    pdfUrl: "/certificates/rotarex.pdf",
  },
  {
    id: 5,
    icon: <FaCertificate />,
    title: "Data Analytics & Job Simulation",
    description: "Completed Data Analytics Job Simulation program.",
    pdfUrl: "/certificates/data-analytics.pdf",
  },
  {
    id: 6,
    icon: <FaCertificate />,
    title: "Data Analytics Essentials – CISCO",
    description: "Completed Data Analytics Essentials course by CISCO.",
    pdfUrl: "/certificates/cisco-analytics.pdf",
  },
  {
    id: 7,
    icon: <FaCertificate />,
    title: "Anthropic Certificate",
    description: "Completed Anthropic AI certification program.",
    pdfUrl: "/certificates/anthropic.pdf",
  },
  {
    id: 8,
    icon: <FaCertificate />,
    title: "Cybersecurity Certificate",
    description: "Completed Cybersecurity certification program.",
    pdfUrl: "/certificates/cybersecurity.pdf",
  },
  {
    id: 9,
    icon: <FaCertificate />,
    title: "DevOps Certificate",
    description: "Completed DevOps certification program.",
    pdfUrl: "/certificates/devops.pdf",
  },
  {
    id: 10,
    icon: <FaCertificate />,
    title: "Generative AI Certificate",
    description: "Completed Generative AI certification program.",
    pdfUrl: "/certificates/genai.pdf",
  },
  {
    id: 11,
    icon: <FaCertificate />,
    title: "Microsoft – Getting Started With GenAI",
    description: "Completed Microsoft's Getting Started with Generative AI course.",
    pdfUrl: "/certificates/microsoft-genai.pdf",
  },
  {
    id: 12,
    icon: <FaCertificate />,
    title: "Power BI Certificate",
    description: "Completed Power BI data visualization certification.",
    pdfUrl: "/certificates/powerbi.pdf",
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  const getPdfUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return path;
  };

  // Use Google Docs viewer to reliably render PDFs in browser
  const getViewerUrl = (path) => {
    const absolute = `${window.location.origin}${path}`;
    return `https://docs.google.com/viewer?url=${encodeURIComponent(absolute)}&embedded=true`;
  };

  return (
    <section
      id="certifications"
      className="py-32 px-6 bg-[#f5f7fa] dark:bg-[#020617] transition-all duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-mono tracking-[5px] mb-5 uppercase text-sm">
            Achievements & Certifications
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white leading-tight">
            Recognition and
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}milestones
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelected(cert)}
              className="
                group cursor-pointer relative overflow-hidden
                rounded-2xl
                bg-white dark:bg-[#0f172a]
                border border-black/10 dark:border-white/10
                shadow-lg hover:shadow-cyan-500/30
                transition-all duration-400
              "
            >
              {/* PDF thumbnail placeholder */}
              <div className="relative w-full h-52 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 dark:from-cyan-500/20 dark:to-blue-600/20 flex flex-col items-center justify-center gap-3 border-b border-black/10 dark:border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-3xl text-cyan-400">
                  <FaFilePdf />
                </div>
                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Certificate</span>
                <div className="absolute top-3 right-3 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded-lg">
                  PDF
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 text-lg">{cert.icon}</span>
                  <h3 className="text-lg font-bold text-black dark:text-white leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6">
                  {cert.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-cyan-400 text-sm font-medium">
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Click to view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative bg-[#1e2535] rounded-3xl p-8
                max-w-lg w-full shadow-2xl border border-white/10
              "
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="
                  absolute top-4 right-4 w-10 h-10 rounded-xl
                  bg-gray-700 hover:bg-gray-600 text-white text-sm
                  flex items-center justify-center transition-all duration-200
                "
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* Modal header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-xl text-cyan-400 flex-shrink-0">
                  {selected.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {selected.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{selected.description}</p>
                </div>
              </div>

              {/* PDF preview placeholder */}
              <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 h-60 bg-gradient-to-br from-cyan-500/10 to-blue-600/20 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-4xl text-cyan-400">
                  <FaFilePdf />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{selected.title}</p>
                  <p className="text-gray-400 text-xs mt-1">Click below to view the full certificate</p>
                </div>
              </div>

              {/* View Full Certificate button */}
              <a
                href={getPdfUrl(selected.pdfUrl)}
                target="_blank"
                rel="noreferrer"
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 px-6 rounded-xl
                  bg-cyan-500 hover:bg-cyan-400
                  text-black font-semibold text-base
                  transition-all duration-300
                "
              >
                <FaExternalLinkAlt /> View Full Certificate
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
