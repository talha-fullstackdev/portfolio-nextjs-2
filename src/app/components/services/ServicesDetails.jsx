
"use client"
import React from "react";
import { motion } from "framer-motion";
import data from "./data";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2, // Staggered animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Slide up effect
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServicesDetails = () => {
  return (
    <motion.div
      className="mt-10 px-6 flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
    >
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-400 dark:text-slate-500">
        Full Stack Development
      </h2>

      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4 md:w-[600px]"
        variants={containerVariants} // Apply staggered animation
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative group flex cursor-pointer items-center justify-center w-16 h-16 dark:bg-white bg-slate-600 rounded-full shadow-md p-2"
            variants={itemVariants} // Apply item animation
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 6, transition: { duration: 0.3 } }} // Hover effect
            >
              <Image src={item.icon} alt="image" title={item.tooltip} width={40} height={40} />
            </motion.div>

            {/* Tooltip Animation */}
            <motion.span
              className="absolute bottom-full mb-2 hidden w-max max-w-[200px] bg-gray-800 dark:text-white text-blue-400 text-xs font-medium px-3 py-2 rounded-md shadow-lg group-hover:block transition-opacity duration-300"
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              {item.tooltip}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 text-slate-400 dark:text-slate-500 md:mt-4 ">
        <p className="mt-2">Building responsive static/dynamic websites using Next.js</p>
        <p className="mt-2">Building responsive Single Page Apps in React.js</p>
        <p className="mt-2">Converting Figma designs into webpages</p>
      </div>
    </motion.div>
  );
};

export default ServicesDetails;
