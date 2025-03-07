import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import AnimatedWrapper from '@/app/hooks/AnimatedWrapper';
const Footer = () => {
  const data = [
    {
      name:"github",
      icon :<FiGithub />,
      link:"https://github.com/talha-fullstackdev?tab=overview&from=2025-02-01&to=2025-02-07"
    },
    {
      name:"instagram",
      icon :<FaInstagram />,
      link:"https://www.instagram.com/"
    },
    {
      name:"twitter-X",
      icon :<SlSocialTwitter />,
      link:"https://x.com/?lang=en"
    },
    {
      name:"linkedin",
      icon :<FaLinkedin />,
      link:"https://www.linkedin.com/in/talha-nawaz-5421931a4/"
    },
    {
      name:"facebook",
      icon :<FaFacebook />,
      link:"https://www.facebook.com/"
    },
  ]
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