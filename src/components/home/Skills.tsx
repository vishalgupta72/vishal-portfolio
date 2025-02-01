"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", src: "/images/skills/mongodb.png" },
  { name: "Express.js", src: "/images/skills/expressjs.png" },
  { name: "React.js", src: "/images/skills/reactjs.png" },
  { name: "Node.js", src: "/images/skills/nodejs.png" },
  { name: "Next.js", src: "/images/skills/nextjs-icon.png" },
  { name: "JavaScript", src: "/images/skills/javascript.png" },
  { name: "Java", src: "/images/skills/java.png" },
  { name: "HTML", src: "/images/skills/html.png" },
  { name: "CSS", src: "/images/skills/css.png" },
  { name: "Tailwind CSS", src: "/images/skills/tailwind-css.png" },
  { name: "Bootstrap", src: "/images/skills/bootstrap-css.png" },
  { name: "MySQL", src: "/images/skills/mysql.png" },
  { name: "Git", src: "/images/skills/github.png" },
  { name: "GitHub", src: "/images/skills/git-hub.png" },
];

const Skills = () => {
  return (
    <section id="skills-section" className="font-sans mb-6">
      <h2 className="text-center text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-green-500 to-white">
        Skills
      </h2>

      <div className="w-full h-auto flex justify-center px-10 py-10 items-center gap-10 flex-wrap">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.3 }}
            className="relative group"
          >
            {/* Tooltip */}
            <span className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>

            {/* Skill Image */}
            <Image
              src={skill.src}
              alt={skill.name}
              width={500}
              height={300}
              className="w-28 h-28 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
