import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_woy3lhp",
        "template_dh3swki",
        form.current,
        "29YHNXoXwjxwuvk_t"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
        },
        () => {
          alert("Something went wrong ❌");
        }
      );

    e.target.reset();
  };

  return (

    <motion.section
      id="contact"
      className="py-32 px-6 bg-[#f5f7fa] dark:bg-[#020617] transition-all duration-500"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="text-cyan-400 font-mono tracking-widest mb-4">
            CONTACT ME
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white">
            Let's Work
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h2>

        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>

            <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
              Get In Touch
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-8 mb-12">
              I Enjoy Building AI-powered applications, modern full stack
              platforms, and smart automation systems. Available for
              developing custom projects and innovative tech solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    Email
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300">
                    devdattasalunkhe0707@gmail.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    Phone
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300">
                    +91 8237908607
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    Location
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300">
                    Satara, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-12">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/devdatta-salunkhe-"
                target="_blank"
                rel="noreferrer"
                className="
                w-16
                h-16
                rounded-2xl
                bg-white/70
                dark:bg-white/5
                border
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-center
                text-2xl
                text-black
                dark:text-white
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Devdatta0707"
                target="_blank"
                rel="noreferrer"
                className="
                w-16
                h-16
                rounded-2xl
                bg-white/70
                dark:bg-white/5
                border
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-center
                text-2xl
                text-black
                dark:text-white
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaGithub />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_deva13_/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="
                w-16
                h-16
                rounded-2xl
                bg-white/70
                dark:bg-white/5
                border
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-center
                text-2xl
                text-black
                dark:text-white
                hover:text-pink-500
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}

            whileHover={{ scale: 1.01 }}

            className="
            p-10
            rounded-[40px]
            bg-white/70
            dark:bg-white/5
            backdrop-blur-xl
            border
            border-black/10
            dark:border-white/10
            shadow-2xl
            "
          >

            {/* Name */}
            <div className="mb-8">

              <label className="block text-black dark:text-white mb-3 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="
                w-full
                p-4
                rounded-2xl
                bg-transparent
                border
                border-black/10
                dark:border-white/10
                outline-none
                text-black
                dark:text-white
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />

            </div>

            {/* Email */}
            <div className="mb-8">

              <label className="block text-black dark:text-white mb-3 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="
                w-full
                p-4
                rounded-2xl
                bg-transparent
                border
                border-black/10
                dark:border-white/10
                outline-none
                text-black
                dark:text-white
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />

            </div>

            {/* Message */}
            <div className="mb-8">

              <label className="block text-black dark:text-white mb-3 font-medium">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Write your message..."
                className="
                w-full
                p-4
                rounded-2xl
                bg-transparent
                border
                border-black/10
                dark:border-white/10
                outline-none
                text-black
                dark:text-white
                focus:border-cyan-400
                transition-all
                duration-300
                resize-none
                "
              ></textarea>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="
              w-full
              py-4
              rounded-2xl
              bg-cyan-500
              hover:bg-cyan-400
              text-white
              font-semibold
              shadow-xl
              shadow-cyan-500/20
              transition-all
              duration-300
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </motion.section>

  );
};

export default Contact;