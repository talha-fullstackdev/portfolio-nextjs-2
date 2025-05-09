import React from "react";
import AnimatedWrapper from "@/app/hooks/AnimatedWrapper";
const GetInTouch = () => {
  return (
    <AnimatedWrapper>
    <div >
    <div className="px-10 text-center pt-28 max-w-[700px] m-auto md:pb-20 pb-2 ">
      <p className="text-blue-400  md:text-xl">what's Next</p>
      <p className="mt-4  md:text-4xl  dark:text-slate-500 text-white text-2xl font-semibold md:font-bold ">Get In Touch</p>
      <p className="mt-4 text-slate-400 dark:text-slate-500 md:text-lg ">
        I am eager to collaborate and expand my knowledge. Whether you have a
        project to discuss or just want to say hi, my inbox is open for all!
      </p>
      <button className="mt-10 border  dark:hover:text-blue-500 dark:border-1 hover:rotate-12 transition-all duration-500 dark:text-black border-blue-400  text-blue-400 p-2 px-4 rounded-sm hover:text-blue-200"><a href="mailto:nawazt964@gmail.com ">say Hello </a></button>
    </div>
    </div>
    </AnimatedWrapper>
  );
};

export default GetInTouch;
