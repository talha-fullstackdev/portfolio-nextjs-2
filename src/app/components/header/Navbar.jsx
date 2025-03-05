"use client";
import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const Navbar = () => {
  const linkStyles =
    "hover:text-blue-400 dark:hover:text-blue-600 hover:underline hover:underline-offset-4";

  // Load theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false; // Default to light mode
  });

  const handleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ul className="flex dark:text-slate-600 flex-col gap-2 text-lg mt-3 md:flex-row md:justify-center md:items-center md:gap-10 md:mt-0 md:py-2 flex-wrap">
      <a className={linkStyles} href="">
        About
      </a>
      <a className={linkStyles} href="">
        Skills
      </a>
      <a className={linkStyles} href="">
        Experience
      </a>
      <a className={linkStyles} href="">
        Projects
      </a>
      <a className={linkStyles} href="">
        Contact
      </a>
      <a
        href="../../../../public/Talha Nawaz resume (full stack dev).pdf"
        download="Talha_Resume.pdf"
        className="relative text-blue-400 border p-1 px-2 rounded-md border-blue-400 overflow-hidden group"
      >
        <span className="absolute inset-0 border-2 border-blue-400 rounded-md animate-border-glow"></span>
        <span className="relative z-10 dark:text-black dark:hover:text-blue-400 hover:text-slate-300">Resume</span>
      </a>

      <button
        onClick={handleDarkMode}
        className="text-3xl flex items-center justify-center  dark:hover:text-slate-300 dark:text-slate-600 hover:text-orange-300 mt-4 md:mt-0"
      >
        {darkMode ? <IoMoon  />  :  <IoSunnyOutline  />}
      </button>
    </ul>
  );
};

export default Navbar;
// "use client";
// import React, { useState, useEffect } from "react";
// import { IoSunnyOutline, IoMoon } from "react-icons/io5";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const linkStyles =
//     "hover:text-blue-400 dark:hover:text-blue-600 hover:underline hover:underline-offset-4";

//   // Load theme from localStorage or default to light mode
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") === "dark";
//     }
//     return false; // Default to light mode
//   });

//   const handleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem("theme", newMode ? "dark" : "light");
//   };

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="">
//       <button
//         className="md:hidden text-2xl absolute right-6 top-5 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//         animate={{ rotate: isOpen ? 180 : 0 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         {isOpen ? <FiX /> : <FiMenu />}
//       </button>
//      {isOpen ?<ul className="flex dark:text-slate-600 flex-col gap-2 text-lg mt-3 md:flex-row md:justify-center md:items-center md:gap-10 md:mt-0 md:py-2 flex-wrap">
//       <a className={linkStyles} href="">
//         About
//       </a>
//       <a className={linkStyles} href="">
//         Skills
//       </a>
//       <a className={linkStyles} href="">
//         Experience
//       </a>
//       <a className={linkStyles} href="">
//         Projects
//       </a>
//       <a className={linkStyles} href="">
//         Contact
//       </a>
//       <a
//         href="../../../../public/Talha Nawaz resume (full stack dev).pdf"
//         download="Talha_Resume.pdf"
//         className="relative text-blue-400 border p-1 px-2 rounded-md border-blue-400 overflow-hidden group"
//       >
//         <span className="absolute inset-0 border-2 border-blue-400 rounded-md animate-border-glow"></span>
//         <span className="relative z-10 dark:text-black dark:hover:text-blue-400 hover:text-slate-300">Resume</span>
//       </a>

//       <button
//         onClick={handleDarkMode}
//         className="text-3xl dark:hover:text-slate-300 dark:text-slate-600 hover:text-orange-300"
//       >
//         {darkMode ? <IoMoon />  :  <IoSunnyOutline />}
//       </button>
//     </ul>:""}

//     </div>
//   );
// };

// export default Navbar;
