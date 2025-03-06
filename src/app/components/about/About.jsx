import React from 'react'
import AboutMe from './AboutMe'
import AboutAnimation from './AboutAnimation'
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'
const About = () => {
  return (
    <AnimatedWrapper>
    <div  className=' px-8 pt-14 md:pt-20 md:flex md:justify-around  md:px-10 md:gap-8'>
        <AboutMe/>
        <AboutAnimation/>
    </div>
    </AnimatedWrapper>
  )
}

export default About