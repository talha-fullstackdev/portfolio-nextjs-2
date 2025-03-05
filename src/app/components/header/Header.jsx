// import React from 'react'
// import Logo from './Logo'
// import Navbar from './Navbar'
// import AnimatedWrapper from '@/app/hooks/AnimatedWrapper'

// const Header = () => {
//   return (
//     <AnimatedWrapper>    <div 
//     className='flex flex-col gap-4 items-center md:flex-row md:justify-between md:px-14 md:pt-4 flex-wrap pt-4'>
//         <Logo/>
//         <Navbar/>
//     </div>
//     </AnimatedWrapper>

//   )
// }

// export default Header
"use client"
import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import AnimatedWrapper from "@/app/hooks/AnimatedWrapper";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedWrapper>
      <div className={`flex ${isOpen && "flex-col"} px-6  gap-4 justify-between items-center md:flex-row md:justify-between md:px-14 md:pt-4 flex-wrap pt-4`}>
        <Logo />

        {/* Toggle Button (Only on Small Screens) */}
        <button
          className="md:hidden text-2xl focus:outline-none border text-blue-700 border-blue-500 p-1 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navbar (Visible on md+ screens, Toggle on Small Screens) */}
        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <Navbar />
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Header;
