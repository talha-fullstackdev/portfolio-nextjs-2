import React from 'react'
import data from './Data';
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper';
const Footer = () => {

  return (
    <AnimatedWrapper>    <div className=" dark:text-slate-500 pt-32 "> 
    <div className='flex justify-center gap-7 max-w-[600px] px-10 m-auto '>
       {data.map((item)=>(
        <div key={item.name} className="">
          <a className='text-2xl cursor-pointer dark:hover:text-blue-500 hover:text-blue-400' target='_blank' title={item.name} href={item.link}>{item.icon}</a>
        </div>
       ))}
        
    </div>
    <p className='mt-6 text-[16px] text-slate-400 dark:text-slate-500 text-center pb-10'>Design & Built By <a href="https://www.linkedin.com/in/talha-nawaz-5421931a4/" target='_blank' className='text-blue-500 hover:text-blue-300'>Talha Nawaz</a> </p>
    </div>
    </AnimatedWrapper>

  )
}

export default Footer