"use client"
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const listItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: index * 0.2, // Staggered effect
    },
  }),
};
const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const techStack1 = ["NextJs / TypeScript", "ReactJs", "TailwindCSS", "PostgreSQL"];
  const techStack2 = ["NodeJs", "ExpressJs", "MongoDB", "Appwrite"];
  return (
    <div className="md:w-[800px] "  id="about">
      <div className="md:px-8">
        <h2 className="text-3xl font-bold text-white dark:text-slate-500">About Me</h2>
        <p className="mt-6 text-[18px] text-slate-400 dark:text-slate-500">
          Hi, I’m Talha Nawaz, a graduate with a BS in Software Engineering from{" "}
          <span className="text-blue-400 hover:underline hover:underline-offset-4">
            <a href="https://lgu.edu.pk/" target="_blank">
              lahore Garrison University.
            </a>
          </span>
          I specialize in crafting scalable, AI-driven web solutions using
          modern full-stack technologies. With 3+ years of hands-on experience,
          I excel in leveraging Next.js, React, and Node.js to build performant
          SaaS applications, real-time systems, and LLM-integrated platforms
          that solve complex user problems. My expertise spans end-to-end
          development, from architecting AI/LLM solutions (like OCR text
          extraction and chatbots) to optimizing server-side performance with
          Express.js, MongoDB, and PostgreSQL. I engineered AI-powered React
          applications that boosted user retention, while my freelance work on
          Upwork involved deploying custom LLM dashboards and WebSocket-driven
          features to streamline client workflows.
        </p>
      </div>
      <div className="mt-4 md:px-10 ">
        <p className="mt-4 text-blue-400 text-xl font-semibold">Activities :</p>
        <p className="mt-2 text-slate-400 dark:text-slate-500">
          As a Microsoft Learn Student Ambassador and Membership Coordinator at
          LGU, I organized tech workshops and events, bridging academia and
          industry trends while fostering innovation. Passionate about
          open-source, I actively contribute to global projects through
          Hacktoberfest and GSSoC, enhancing my collaborative coding and
          technical expertise. I excel in fast-paced, collaborative settings,
          having competed in META HackerCup, NASA Space Apps, and MLH
          hackathons, where I built functional prototypes and honed my
          problem-solving skills. My robust GitHub presence reflects my
          commitment to community-driven, real-world solutions.
        </p>
        <p className="mt-4 text-blue-400">
          Microsoft Learn Student Ambassador (MLSA-β)
        </p>
        <p className="text-blue-400">
          Microsoft Learn Student Ambassador (MLSA-β)
        </p>
        <p className="mt-8 text-slate-400">
          Here are a few technologies I’ve been working with recently:
        </p>
      </div>
      {/* <div className="mt-6 flex justify-around  md:justify-start md:gap-32 md:px-8">
        <div className="flex flex-col gap-2 text-slate-400 dark:text-slate-500 list-disc marker:text-blue-500 pl-5">
          <li>NextJs / TypeScript</li>
          <li>ReactJs</li>
          <li>TailwindCSS</li>
          <li>PostgreSQL</li>
        </div>
        <div className="flex flex-col gap-2 text-slate-400 list-disc marker:text-blue-500 pl-5 dark:text-slate-500">
          <li>NodeJs</li>
          <li>ExpressJs</li>
          <li>MongoDB</li>
          <li>Appwrite</li>
        </div>
      </div> */}

<div ref={ref} className="mt-6 flex justify-around md:justify-start md:gap-32 md:px-8">
        {/* First Tech Stack */}
        <motion.ul
          className="flex flex-col gap-2 text-slate-400 dark:text-slate-500 list-disc marker:text-blue-500 pl-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack1.map((tech, index) => (
            <motion.li key={tech} variants={listItemVariants} custom={index}>
              {tech}
            </motion.li>
          ))}
        </motion.ul>

        {/* Second Tech Stack */}
        <motion.ul
          className="flex flex-col gap-2 text-slate-400 list-disc marker:text-blue-500 pl-5 dark:text-slate-500"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack2.map((tech, index) => (
            <motion.li key={tech} variants={listItemVariants} custom={index}>
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default AboutMe;
