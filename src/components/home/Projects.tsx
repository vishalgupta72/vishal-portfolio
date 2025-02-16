"use client";
import React, { useState, useRef } from "react";
import ProjectsCards from './ProjectsCards';
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";



const projectsData = [
    {
        id: 1,
        title: 'byteCode Forum',
        description: 'ByteCode Forum is a community for developers to discuss programming, share knowledge, and explore the latest technologies.',
        image: '/images/projects/byteCode-Forum.png',
        tag: ["All", "ReactJS/NextJS"],
        gitUrl: "https://github.com/vishalgupta72/byteCode-Forum",
        previewUrl: "https://bytecode-forum.vercel.app/",
        tech:"#reactjs #mongoDB #nodejs #expressjs"
    },
    {
        id: 2,
        title: 'Instagram Clone',
        description: 'Instagram Clone is a social media platform where users can share photos, like, comment, and connect.',
        image: '/images/projects/reactogram.png',
        tag: ["All", "ReactJS/NextJS"],
        gitUrl: "https://github.com/vishalgupta72/Reactogram",
        previewUrl: "https://reacto-gram.vercel.app/singup",
        tech:"#reactjs #mongoDB #nodejs #expressjs"
    },
    {
        id: 3,
        title: 'Academy Equlation System',
        description: 'Academy Equation System is a platform for managing academic records, tracking progress, and enhancing learning experiences for students.',
        image: '/images/projects/acadeval.png',
        tag: ["All", "Others"],
        gitUrl: "https://github.com/pixiedevs/acadEval-preview",
        previewUrl: "https://acadeval.pythonanywhere.com/",
        tech:"#python #Django #sqlLite"
    },
    {
        id: 4,
        title: 'E-Learning',
        description: 'E-Learning is a digital platform for interactive courses, skill development, and seamless online education experiences.',
        image: '/images/projects/LMS.png',
        tag: ["All", "ReactJS/NextJS"],
        gitUrl: "https://github.com/vishalgupta72/e-learning-plateform",
        previewUrl: "https://e-learning-plateform-app.vercel.app/",
        tech:" #reactjs"
    },
    {
      id: 5,
      title: 'E-Commerce',
      description: 'E-Commerce is a platform for buying and selling products online, offering a seamless shopping experience.',
      image: '/images/projects/amazona.png',
      tag: ["All", "ReactJS/NextJS"],
      gitUrl: "https://github.com/vishalgupta72/amazona",
      previewUrl: "https://amazify.vercel.app",
      tech:"#reactjs #mongoDB #nodejs #expressjs"
    },
    {
      id: 6,
      title: 'Apply4Devs',
      description: 'Apply4Devs is a platform connecting developers with job opportunities, streamlining applications, and advancing tech careers.',
      image: '/images/projects/apply4devs.png',
      tag: ["All", "ReactJS/NextJS"],
      gitUrl: "https://github.com/vishalgupta72/Apply4Devs",
      previewUrl: "https://apply4-devs.vercel.app/",
      tech:" #reactjs #mongoDB #nodejs #expressjs"
    },
    {
        id: 7,
        title: 'Todo app',
        description: 'Todo App helps users organize tasks, set deadlines, and boost productivity with a simple task management system.',
        image: '/images/projects/todo-app.png',
        tag: ["All", "Others"],
        gitUrl: "https://github.com/vishalgupta72/todo-app",
        previewUrl: "https://todo-taskify-app.vercel.app/",
        tech:"#reactjs #tailwind css"
    },
    {
        id: 8,
        title: 'Word Counter',
        description: 'Word Counter is a tool for counting words, characters, and analyzing text for better writing efficiency.',
        image: '/images/projects/word-counter.png',
        tag: ["All", "Others"],
        gitUrl: "https://github.com/vishalgupta72/word-counter",
        previewUrl: "https://word-count-er.vercel.app/",
        tech:"#reactjs #mongoDB #nodejs #expressjs"
    },
]

const Projects = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag:any) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects-section" className="font-sans mb-28 -mt-10 w-fit justify-self-center">
          <h2 className="text-center text-4xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-green-500 to-white">
            My Projects
          </h2>
          <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="ReactJS/NextJS"
              isSelected={tag === "ReactJS/NextJS"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Others"
              isSelected={tag === "Others"}
            />
          </div>
          <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 mx-4 justify-center">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectsCards
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tech={project.tech}
                />
              </motion.li>
            ))}
          </ul>
        </section>
      );
    };
    
    export default Projects;