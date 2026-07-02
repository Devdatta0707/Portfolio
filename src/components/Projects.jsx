import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Hawk",
    description:
      "AI-powered intelligent monitoring and data analysis platform designed for automation and smart insights generation.",

    tech: ["React", "Python", "AI", "Automation"],
  },

  {
    title: "AI Web Security Scanner",
    description:
      "AI-driven cybersecurity platform for detecting website vulnerabilities and improving web security monitoring.",

    tech: ["Cyber Security", "AI", "Flask", "Python"],
  },

  {
    title: "Web Extraction Platform",
    description:
      "AI-powered web extraction system for extracting, processing, and analyzing website data using automation techniques.",

    tech: ["FastAPI", "Web Scraping", "Python", "Automation"],
  },

  {
    title: "College Admission Chatbot",
    description:
      "AI chatbot system developed for simplifying college admission queries and student interaction workflows.",

    tech: ["Chatbot", "AI", "Python", "Flask"],
  },
];

const Projects = () => {
  return (

    <motion.section
      id="projects"
      className="py-32 px-6 bg-[#f5f7fa] dark:bg-[#020617] transition-all duration-500"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">

          <p className="text-cyan-400 font-mono tracking-widest mb-4">
              MY PROJECTS
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              className="
              group
              relative
              p-8
              rounded-[35px]
              bg-white/70
              dark:bg-white/5
              backdrop-blur-xl
              border
              border-black/10
              dark:border-white/10
              shadow-2xl
              hover:shadow-cyan-500/20
              transition-all
              duration-500
              overflow-hidden
              "
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-cyan-400/5"></div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-black dark:text-white mb-5 relative z-10">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-8 relative z-10">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8 relative z-10">

                {project.tech.map((tech, techIndex) => (

                  <span
                    key={techIndex}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-400/10
                    text-cyan-400
                    border
                    border-cyan-400/20
                    text-sm
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );
};

export default Projects;