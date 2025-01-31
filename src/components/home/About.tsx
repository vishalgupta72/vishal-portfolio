"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
// import { TextEffect } from "../core/text-effect";

const About = () => {
  const [tab, setTab] = useState("certificates");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about-section" className="text-white font-sans">
      <div className="md:grid md:grid-cols-2 [@media(max-width:446px)]:w-80 gap-7 justify-self-center items-center py-12 sm:ml-12 sm:pl-12 my-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-500 via-green-500 rounded-xl max-w-96">
          <Image
            src="/images/vishal.png"
            width={350}
            height={350}
            alt="about image"
            className="rounded-xl"
            />
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <div className="font-semibold font-sans text-2xl flex">
            <h2 className="text-left text-3xl font-sans mb-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-green-400">
              About me
            </h2>
          </div>

          <p>
            Hi, I'm Vishal Gupta, a recent B.Tech graduate in Computer Science
            and Engineering from Technocrats Institute of Technology, Bhopal
            (2022). With a strong foundation in computer science, I'm passionate
            about CRM and full-stack development. 
            <br /><br />
            I have hands-on experience in <b>CRM</b> from my 4-month internship at DS Consult, Indore, and
            proficiency in <b>MERN stack development</b> from a 6-month training
            program with InternShala (remote). I'm a motivated and dedicated
            individual, always looking to learn and grow. This portfolio
            showcases my projects, skills, and experiences.
          </p>

          <div className="flex flex-row justify-start mt-8 overflow-hidden">
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certificates
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("strengths")}
              active={tab === "strengths"}
            >
              Strengths
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton> */}
          </div>

          {/* Render content based on active tab */}
          <div className="mt-4">
            {tab === "certificates" && (
              <div>
                <ul className="list-disc ml-6">
                  <li className="mb-3">
                    Java{" "}
                    <p className="text-gray-400 text-sm italic">
                      (HackerRank, GreatLearning)
                    </p>
                  </li>
                  <li className="my-3">
                    MySQL{" "}
                    <p className="text-gray-400 text-sm italic">
                      (HackerRank, GreatLearning)
                    </p>
                  </li>
                  <li className="my-3">
                    Problem Solving{" "}
                    <p className="text-gray-400 text-sm italic">(HackerRank)</p>
                  </li>
                </ul>
              </div>
            )}

            {tab === "strengths" && (
              <div className="mb-9">
                <ul className="list-disc ml-6">
                  <li className="mb-3">Quick learner</li>
                  <li className="my-3">Creativity</li>
                  <li className="my-3">Problem solving skills</li>
                  <li className="my-3">Multitasking</li>
                </ul>
              </div>
            )}

            {/* {tab === "experience" && <div>Experience content goes here</div>} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
