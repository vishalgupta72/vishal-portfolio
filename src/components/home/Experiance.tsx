'use client'
import React from 'react';
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <section id="experiance-section" className="bg-darkNavy font-sans pb-12 pt-1 mb-16  ">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-green-500 to-white">
          Experience
        </h2>
        <div className="flex flex-col [@media(max-width:446px)]:w-96 md:flex-row gap-8 justify-self-center p-4 mt-8 mb-8 ">
          {/* first experiance */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/2 border-b-4 border-b-green-500"
          >
            <h3 className="text-xl text-white font-bold mb-2">
              MERN Stack Development
            </h3>
            <p className="text-gray-400">InternShala (Virtual)</p>
            <p className="text-gray-400 mb-4 text-sm italic">
              Duration: 6 months
            </p>
            <ul>
              <li className="text-gray-200 mb-8 font-sans">
                - Developing web applications using a combination of front-end
                technologies (HTML, CSS, JavaScript) and back-end technologies
                (MongoDB, ExpressJS, ReactJS, NodeJS) to create comprehensive,
                user-friendly, and efficient database-driven solutions.
              </li>

              <li className="text-gray-200 mb-8 font-sans">
                - Engaging in various projects to enhance skills and proficiency
                in both front-end and back-end development as a prospective
                full-stack developer.
              </li>

              <li className="text-gray-200 mb-8 font-sans">
                - Concentrating on developing fully integrated web applications
                that combine user interface design with server-side
                functionality to ensure seamless and efficient performance.
              </li>
            </ul>
          </motion.div>

          {/* second experiance */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 w-full md:w-1/2 border-b-4 border-b-green-500 "
          >
            <h3 className="text-xl text-white font-bold mb-2">
              Trainee Consultant
            </h3>
            <p className="text-gray-400">DS Consult (Indore, MP)</p>
            <p className="text-gray-400 mb-4 text-sm italic">
              Duration: 4 months
            </p>
            <ul>
              <li className="text-gray-200 mb-8 font-sans">
                - Completed a 4-month internship focused on Customer
                Relationship Management (CRM), gaining valuable industry
                experience.
              </li>

              <li className="text-gray-200 mb-8 font-sans">
                - Actively participated in and contributed to various projects
                throughout the internship, which provided practical, real-world
                experience in CRM systems.
              </li>

              <li className="text-gray-200 mb-8 font-sans">
                - Developed a strong understanding of Dynamics 365, C#, and
                JavaScript by applying these technologies to solve real-world
                problems and enhance CRM solutions.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
