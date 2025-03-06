"use client"
import React from 'react'
import Lottie from "lottie-react";
import animation from "../../../assets/images/Animation.json"
const ServicesAnimation = () => {
  return (
  
    <div className="">
      <Lottie animationData={animation} className="md:w-[500px]" />
    </div>
    
  )
}

export default ServicesAnimation
// import React from "react";
// import dynamic from "next/dynamic";
// import animation from "../../../assets/images/Animation.json";

// // Dynamically import Lottie with SSR disabled
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// const ServicesAnimation = () => {
//   return (
//     <div className="">
//       <Lottie animationData={animation} className="md:w-[500px]" />
//     </div>
//   );
// };

// export default ServicesAnimation;
