import { motion } from "framer-motion";


const About = () => {

  return (



    <motion.section

      id="about"

      className="py-32 px-6 bg-[#f5f7fa] dark:bg-[#020617] transition-all duration-500"



      initial={{ opacity: 0, y: 50 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

    >



      <div className="max-w-6xl mx-auto">



        {/* Heading */}

        <div className="mb-16">



          <p className="text-cyan-400 font-mono tracking-widest mb-4">

              ABOUT ME

          </p>



          <h2 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white">

            Passionate About Building

            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">

              {" "}AI Solutions

            </span>

          </h2>



        </div>



        {/* Content */}

        <div className="grid md:grid-cols-2 gap-16 items-center">



          {/* LEFT */}

          <div>



            <p

              className="

              text-lg

              md:text-xl

              leading-10

              text-gray-700

              dark:text-gray-300

              "

            >

              Motivated Artificial Intelligence and Data Science student

              passionate about building AI-powered applications,

              intelligent automation systems, and modern full stack

              web platforms.



              <br />

              <br />



              Experienced in developing scalable web applications,

              AI-driven tools, data extraction systems, and

              cybersecurity-based solutions.

            </p>



            {/* Stats */}

            <div className="grid grid-cols-2 gap-6 mt-14">



              {/* Card 1 */}

              <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl">



                <h3 className="text-4xl font-bold text-cyan-400">

                  6+ 

                </h3>



                <p className="mt-3 text-gray-700 dark:text-gray-300">

                  Projects Completed

                </p>



              </div>



              {/* Card 2 */}

              <div className="p-6 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl">



                <h3 className="text-4xl font-bold text-cyan-400">

                  10+ 

                </h3>



                <p className="mt-3 text-gray-700 dark:text-gray-300">

                  Certifications  

                </p>



              </div>



            </div>



          </div>



          {/* RIGHT */}

          <div className="relative flex justify-center">



            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-20 rounded-full"></div>



            {/* Glass Card */}

            <div className="relative p-10 rounded-[40px] bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl max-w-md w-full">



              {/* Mini Heading */}

              <p className="text-cyan-400 font-mono mb-5">

                PROFILE OVERVIEW

              </p>



              {/* Details */}

              <div className="space-y-6">



                <div>

                  <h4 className="text-sm text-gray-500 dark:text-gray-400">

                    Name

                  </h4>



                  <p className="text-xl font-semibold text-black dark:text-white">

                    Devdatta Salunkhe

                  </p>

                </div>



                <div>

                  <h4 className="text-sm text-gray-500 dark:text-gray-400">

                    Education

                  </h4>



                  <p className="text-xl font-semibold text-black dark:text-white">

                    B.Tech AI & Data Science

                  </p>

                </div>



                <div>

                  <h4 className="text-sm text-gray-500 dark:text-gray-400">

                    Specialization

                  </h4>



                  <p className="text-xl font-semibold text-black dark:text-white">

                    AI Automation & Full Stack Development

                  </p>

                </div>



              </div>



            </div>

          </div>



        </div>



      </div>



    </motion.section>



  );

};



export default About; 