// "use client";
// import React, { useState } from "react";
// import data from "./data";

// const WorkDetails = () => {
//   const [myData, setMyData] = useState(data);
//   const handleClick =((id)=>{
//     const filterData = myData.find((item)=>item.id===id)
//       setMyData(filterData)
//   })
//   return (
//     <div className="px-6 md:px-12 md:mt-10 ">
//       <h2 className="text-xl md:text-2xl text-center font-semibold text-white mb-6">Where I've Worked</h2>

//       <div className="flex flex-col md:flex-row md:justify-center md:gap-6">
//         {/* Sidebar Buttons */}
//         <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
//           {myData.map((item) => (
//             <button
//               key={item.id}
//               className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition duration-300"
//             >
//               {item.company}
//             </button>
//           ))}
//         </div>

//         {/* Work Details */}
//         <div className="ml-4">
//           {myData.map((data) => (
//             <div key={data.id} className="mb-6 p-4 border-l-4 border-blue-500">
//               <h2 className="text-xl md:text-2xl font-bold text-white">
//                 {data.position} <span className="text-blue-600 font-semibold text-xl hover:underline hover:underline-offset-4">{data.company}</span>
//               </h2>
//               <p className="text-white text-sm md:mt-2 md:text-lg">{data.date}</p>
//               <ul className="list-disc ml-5 mt-2 text-slate-400 md:text-[18px]">
//                 <li>{data.para1}</li>
//                 <li>{data.para2}</li>
//                 <li>{data.para3}</li>
//                 <li>{data.para4}</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkDetails;
"use client";
import React, { useState } from "react";
import data from "./data";

const WorkDetails = () => {
  const [selectedData, setSelectedData] = useState(data[0]); // Initial data

  const handleClick = (id) => {
    const filterData = data.find((item) => item.id === id); // Find the selected item
    setSelectedData(filterData); // Update state with selected item
  };

  return (
    <div className="px-6 md:px-12 md:mt-10">
      <h2 className="text-xl md:text-4xl text-center font-semibold text-white mb-6 md:tracking-wide">
        Where I've Worked
      </h2>

      <div className="flex flex-col md:flex-row md:justify-center md:gap-6">
        {/* Sidebar Buttons */}
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                selectedData.id === item.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* Work Details */}
        <div className="ml-4">
          <div className="mb-6 p-4 border-l-4 border-blue-500">
              <h2 className="text-xl md:text-2xl font-bold text-white">
               {data.position} <span className="text-blue-600 font-semibold text-xl hover:underline hover:underline-offset-4">{data.company}</span>
              </h2>
            <p className="text-white text-sm md:mt-2 md:text-xl">
              {selectedData.date}
            </p>
            <ul className="list-disc ml-5 mt-2 text-slate-400 md:text-[18px] md:w-[800px]">
              <li>{selectedData.para1}</li>
              <li>{selectedData.para2}</li>
              <li>{selectedData.para3}</li>
              <li>{selectedData.para4}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
