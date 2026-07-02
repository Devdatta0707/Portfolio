import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiNetlify,
  SiFlask,
  SiFastapi,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React JS",
  },

  {
    icon: <FaPython />,
    name: "Python",
  },

  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },

  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },

  {
    icon: <FaJs />,
    name: "JavaScript",
  },

  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },

  {
    icon: <SiMysql />,
    name: "MySQL",
  },

  {
    icon: <SiFirebase />,
    name: "Firebase",
  },

  {
    icon: <SiNetlify />,
    name: "Netlify",
  },

  {
    icon: <SiFlask />,
    name: "Flask",
  },

  {
    icon: <SiFastapi />,
    name: "FastAPI",
  },

  {
    icon: <FaGithub />,
    name: "GitHub",
  },

  {
    icon: <FaDatabase />,
    name: "Database",
  },
];

const Skills = () => {
  return (

    <motion.section
      id="skills"
      className="py-32 px-6 bg-[#f5f7fa] dark:bg-[#020617] transition-all duration-500"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">

          <p className="text-cyan-400 font-mono tracking-widest mb-4">
            MY SKILLS
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white">
            Technologies &
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {" "}Tools
            </span>
          </h2>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              whileHover={{
                scale: 1.08,
                y: -10,
              }}

              className="
              group
              p-8
              rounded-3xl
              bg-white/70
              dark:bg-white/5
              backdrop-blur-xl
              border
              border-black/10
              dark:border-white/10
              shadow-xl
              hover:shadow-cyan-500/20
              transition-all
              duration-500
              flex
              flex-col
              items-center
              justify-center
              text-center
              "
            >

              {/* Icon */}
              <div
                className="
                text-5xl
                text-cyan-400
                mb-5
                group-hover:scale-125
                transition-all
                duration-500
                "
              >
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  );
};

export default Skills;