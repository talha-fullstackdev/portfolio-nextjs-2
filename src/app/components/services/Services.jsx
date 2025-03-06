"use client"
import React from 'react'
import ServicesAnimation from './ServicesAnimation'
import ServicesDetails from './ServicesDetails'
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'
import { motion } from 'framer-motion'
const Services = () => {
  const sentence = "What I Do"
  return (
 <AnimatedWrapper>
    <div className='px-10 md:pt-20  md:px-12 ' id='skills'> 
        <h2  className='text-3xl text-white dark:text-slate-500 font-bold text-center md:tracking-wide'>
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
        </h2>
        <div className="flex flex-col-reverse md:flex-row md:justify-center md:gap-8">
        <ServicesAnimation/>
        <ServicesDetails/>
        </div>
    </div>
    </AnimatedWrapper>
  )
}

export default Services