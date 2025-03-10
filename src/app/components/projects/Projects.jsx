
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "./data";
import Image from "next/image";
import AnimatedWrapper from "@/app/hooks/AnimatedWrapper";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Projects appear one by one
    },
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -50, // Move up when disappearing
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <div id="projects">
      <AnimatedWrapper>
        <div className="py-10 px-6 md:px-20 pb-10 md:pb-20 text-white dark:text-slate-500">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Projects</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.name}
                  className="p-4 shadow-2xl transition-transform transform hover:-translate-y-1 hover:shadow-xl rounded-xl"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Project Image */}
                  <a href={project.link} target="_blank">
                    <div className="relative w-full h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt="Project image"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="rounded-xl cursor-pointer object-cover"
                      />
                    </div>
                  </a>

                  {/* Tech Stack */}
                  <div className="flex items-center justify-between text-gray-400 dark:text-slate-500 text-sm mt-3 md:mt-6">
                    <p className="text-slate-400 dark:text-slate-500">
                      {project.tech}
                    </p>
                    <div className="flex gap-2">
                      <a
                        className="text-lg hover:text-blue-400 cursor-pointer"
                        href={project.github}
                        target="_blank"
                      >
                        {project.githubIcon}
                      </a>
                      <a
                        className="text-lg hover:text-blue-400 cursor-pointer"
                        href={project.link}
                        target="_blank"
                      >
                        {project.linkIcon}
                      </a>
                    </div>
                  </div>

                  {/* Project Name & Year */}
                  <div className="flex items-center justify-between mt-3">
                    <a href={project.link} target="_blank">
                      <p className="text-lg font-medium cursor-pointer hover:text-blue-400 hover:underline hover:underline-offset-4">
                        {project.name}
                      </p>
                    </a>
                    <p className="text-gray-400 dark:text-slate-500">
                      {project.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More / Show Less Button */}
          {projectsData.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 border dark:hover:text-blue-500 dark:border-1 dark:text-black border-blue-400 text-blue-400 hover:text-blue-200 rounded-sm transition-all duration-300 md:mt-14"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Projects;
