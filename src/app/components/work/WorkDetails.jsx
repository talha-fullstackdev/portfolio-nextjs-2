"use client";
import React, { useState } from "react";
import data from "./data";
import AnimatedWrapper from "@/app/hooks/AnimatedWrapper";
const WorkDetails = () => {
  const [selectedData, setSelectedData] = useState(data[0]); // Show first item initially

  const handleClick = (id) => {
    const filterData = data.find((item) => item.id === id); // Find the selected item
    setSelectedData(filterData); // Update state with selected item
  };

  return (
    <AnimatedWrapper>
    <div className="px-4 md:px-12 md:pt-32 md:pb-20  pt-20" id="experience">
      <h2 className="text-2xl  md:text-3xl text-center font-semibold text-white dark:text-slate-500 mb-6 md:tracking-wide">
        Where I've Worked
      </h2>

      <div className="flex px-4 pt-4 md:pt-0 flex-col md:flex-row md:justify-center md:gap-6 flex-wrap">
        <div className="flex gap-1 justify-center md:justify-start md:flex-col  md:space-x-0 md:space-y-4 mb-4 md:mb-0">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-4 text-center py-1 md:py-2 rounded-md  hover:rotate-6 transition-all duration-500   ${
                selectedData.id === item.id
                  ? "bg-blue-500 text-white "
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800 "
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="ml-4">
          <div className="mb-6 p-4 border-l-4 border-blue-500">
            <h2 className="text-xl md:text-2xl font-bold text-white dark:text-slate-500">
              {selectedData.position}
              <span  className="text-blue-600 font-semibold text-xl cursor-pointer hover:underline hover:underline-offset-4">
               <a href={selectedData.link} target="_blank"> {selectedData.company}</a>
              </span>
            </h2>
            <p className="text-white dark:text-slate-500 text-sm md:mt-2 md:text-lg">
              {selectedData.date}
            </p>
            <ul className="list-disc ml-5 mt-2 text-slate-400 dark:text-slate-500 md:text-[18px] md:w-[800px]">
              <li>{selectedData.para1}</li>
              <li>{selectedData.para2}</li>
              <li>{selectedData.para3}</li>
              <li>{selectedData.para4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </AnimatedWrapper>
  );
};

export default WorkDetails;
