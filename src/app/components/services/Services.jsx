import React from 'react'
import ServicesAnimation from './ServicesAnimation'
import ServicesDetails from './ServicesDetails'
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'
const Services = () => {
  return (
 <AnimatedWrapper>
    <div className=' px-10 md:pt-10  md:px-12 '> 
        <h2 className='text-3xl text-white dark:text-slate-500 font-bold text-center md:tracking-wide'>What I Do</h2>
        <div className="flex flex-col-reverse md:flex-row md:justify-center md:gap-8">
        <ServicesAnimation/>
        <ServicesDetails/>
        </div>
    </div>
    </AnimatedWrapper>
  )
}

export default Services