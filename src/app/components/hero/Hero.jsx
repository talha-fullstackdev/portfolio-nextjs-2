"use client"
import React from 'react';
import Image from 'next/image'; // Correct import
import profileImage from '../../../assets/images/profile.webp'; // Correct import
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper';
import { motion } from 'framer-motion';
const Hero = () => {
  const sentence = "I build complex ideas into scalable web ecosystems.";

  return (
    <AnimatedWrapper>
    <div className=" flex pt-10 flex-col items-center md:justify-around gap-8 px-5 text-center md:flex-row md:text-left md:gap-14 md:px-16 md:pt-20">
      
      {/* Left Content */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <p className="text-blue-400 text-lg md:text-xl">Hi, my name is</p>
        <h1 className="text-slate-200 dark:text-slate-500 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Talha Nawaz.
        </h1>
        <p className="text-slate-400 text-2xl font-semibold sm:text-3xl md:text-5xl">
      {sentence.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
        <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 md:mt-4">
          I design and deploy full-stack solutions that solve real-world problems, 
          from dynamic SaaS platforms to fully AI-integrated web applications. 
          My toolkit? Next.js for speed, Node.js for power, and SQL/NoSQL databases for precision.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0">
  {/* Glowing Background */}
  <div className="absolute inset-0 bg-blue-500 blur-xl rounded-full opacity-50 animate-pulse animate-glow"></div>

  {/* Profile Image */}
  <Image 
    src={profileImage} 
    alt="profile-image" 
    width={400} 
    height={400} 
    className="relative w-full h-full object-cover rounded-full shadow-lg md:mt-4 "
  />
</div>


    </div>
    </AnimatedWrapper>
  );
};

export default Hero;
