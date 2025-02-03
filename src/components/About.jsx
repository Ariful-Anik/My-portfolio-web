import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-br md:w-4/6 mx-auto md:my-16 from-black to-gray-900 text-white py-12 px-8 rounded-lg shadow-lg flex justify-center items-center">
      {/* Content Wrapper */}
      <motion.div
        className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.h2
          className="text-3xl font-bold text-center mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-center mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hello! I’m <span className="text-white font-semibold">Ariful Anik</span>, 
          a junior web developer with a passion for crafting elegant websites and solving real-world problems with code. My web development journey began with Programming Hero, where I discovered the art of turning ideas into reality through programming. 
        </motion.p>

        {/* Details Section */}
        <motion.div
          className="border border-gray-700 rounded-lg p-4 bg-gray-900"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 text-left text-sm md:text-base gap-6">
            <div>
              <span className="font-bold text-gray-300">Name:</span>
              <p className="text-white">Ariful Anik</p>
            </div>
            <div>
              <span className="font-bold text-gray-300">Email:</span>
              <p className="text-white">arifulanik2021@gmail.com</p>
            </div>
            <div>
              <span className="font-bold text-gray-300">Date of Birth:</span>
              <p className="text-white">09 January 2002</p>
            </div>
            <div>
              <span className="font-bold text-gray-300">Location:</span>
              <p className="text-white">Dhaka, Bangladesh</p>
            </div>
            <div>
              <span className="font-bold text-gray-300">Hobbies:</span>
              <p className="text-white">Watching Anime, Exploring Tech, Designing</p>
            </div>
            <div>
              <span className="font-bold text-gray-300">Skills:</span>
              <p className="text-white">React, Tailwind, Framer Motion, JavaScript</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
