"use client"
import React, { useState ,useEffect} from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
const Navbar = () => {
  const linkStyles="hover:text-blue-400 dark:hover:text-blue-600 hover:underline hover:underline-offset-4"
  const [darkMode,setdarkMode]=useState(true)
  const handleDarkMode =()=>{
    setdarkMode(!darkMode)
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <ul className=" flex dark:text-slate-600 flex-col gap-2 text-lg mt-3 md:flex-row md:justify-center md:items-center md:gap-10 md:mt-0 md:py-2 flex-wrap ">
        <a className={linkStyles} href="">About</a>
        <a className={linkStyles} href="">Skills</a>
        <a className={linkStyles} href="">Experience</a>
        <a className={linkStyles} href="">Projects</a>
        <a className={linkStyles} href="">Contact</a>
        <a
          href=""
          className="relative text-blue-400 border p-1 px-2 rounded-md border-blue-400 overflow-hidden group"
        >
          <span className="absolute inset-0 border-2 border-blue-400 rounded-md animate-border-glow"></span>
          <span className="relative z-10 dark:text-black ">Resume</span>
        </a>
       {darkMode ? <button onClick={handleDarkMode} className="text-3xl dark:hover:text-orange-300 dark:text-slate-600">
          <IoSunnyOutline />
        </button> :
        <button className="text-3xl hover:text-slate-600 " onClick={handleDarkMode}><IoMoon /></button>}
      </ul>
    </>
  );
};

export default Navbar;
