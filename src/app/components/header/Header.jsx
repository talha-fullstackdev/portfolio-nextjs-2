import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'
const Header = () => {
  return (
    <AnimatedWrapper>    <div 
    className='flex flex-col gap-4 items-center md:flex-row md:justify-between md:px-14 md:pt-4 flex-wrap '>
        <Logo/>
        <Navbar/>
    </div>
    </AnimatedWrapper>

  )
}

export default Header