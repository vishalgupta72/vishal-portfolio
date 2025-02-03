"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import Download from "../icons/Download";
import Hello from "../icons/Hello";

const Index = () => {
  return (
    <section
      id="home-section"
      className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-16 -mt-36"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 mx-4 text-center sm:text-left order-last lg:order-first"
      >
        <div className="flex items-center text-green-500 justify-center sm:justify-start">
          <h1 className="text-2xl sm:text-5xl font-bold font-sans mr-2">
            Hello
          </h1> <Hello />
          {/* <Hello className="w-8 h-8 sm:w-12 sm:h-12" /> */}
        </div>

        <h1 className="text-4xl sm:text-7xl font-sans mt-4">I&apos;m Vishal</h1>
        
        <div className="text-xl sm:text-2xl font-sans mt-4 min-h-[4rem]">
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "React Developer",
              1000,
              "MERN Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={65}
            repeat={Infinity}
            aria-label="Professional roles"
          />
        </div>

        <a
          href="https://drive.google.com/file/d/1JNizx78rWzajBsrgfAHNX24ZGjXx5vq-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
        >
          <span className="mr-2 font-sans">Download CV</span> <Download />
          {/* <Download className="w-5 h-5" /> */}
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mx-4 order-first lg:order-last"
      >
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-blue-500 via-green-500 rounded-full overflow-hidden">
          <Image
            src="/images/vishal.png"
            alt="Vishal&apos;s professional portrait"
            width={512}
            height={512}
            priority
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Index;