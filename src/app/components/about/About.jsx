import React from 'react'
import AboutMe from './AboutMe'
import AboutAnimation from './AboutAnimation'
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'
const About = () => {
  return (
    <div id="about">
    <AnimatedWrapper>
    <div  className=' px-8 pt-10 md:pt-16 md:flex md:justify-around  md:px-10 md:gap-8'>
        <AboutMe/>
        <AboutAnimation/>
    </div>
    </AnimatedWrapper>
    </div>
  )
}

export default About