import React from 'react'
import AboutMe from './AboutMe'
import AboutAnimation from './AboutAnimation'
const About = () => {
  return (
    <div className='dark:bg-white px-8 pt-14 md:pt-20 md:flex md:justify-around  md:px-10 md:gap-8'>
        <AboutMe/>
        <AboutAnimation/>
    </div>
  )
}

export default About