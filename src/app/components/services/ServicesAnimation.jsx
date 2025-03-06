// "use client"
// import React from 'react'
// import Lottie from "lottie-react";
// import animation from "../../../assets/images/aboutme.json"
// const ServicesAnimation = () => {
//   return (
  
//     <div className="">
//       <Lottie animationData={animation} className="md:w-[500px]" />
//     </div>
    
//   )
// }

// export default ServicesAnimation
// import React from "react";
// import dynamic from "next/dynamic";
// import animation from "../../../assets/images/aboutme.json";

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
// // "use client"; // Ensures this component only runs on the client side

// // import React from "react";
// // import dynamic from "next/dynamic";

// // // Dynamically import Lottie with SSR disabled
// // const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// // import animation from "../../../assets/images/Animation.json";

// // const ServicesAnimation = () => {
// //   return (
// //     <div className="">
// //       <Lottie animationData={animation} className="md:w-[500px]" />
// //     </div>
// //   );
// // };

// // export default ServicesAnimation;
// // "use client";

// // import React, { useEffect, useState } from "react";
// // import dynamic from "next/dynamic";

// // // Dynamically import Lottie to disable SSR
// // const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// // import animation from "../../../assets/images/Animation.json";

// // const ServicesAnimation = () => {
// //   const [isClient, setIsClient] = useState(false);

// //   // Ensure this component only renders after mounting (avoiding hydration errors)
// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   return (
// //     <div className="">
// //       {isClient && <Lottie animationData={animation} className="md:w-[500px]" />}
// //     </div>
// //   );
// // };

// // export default ServicesAnimation;
// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// // Dynamically import Lottie to disable SSR
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// import animation from "../../../assets/images/Animation.json";

// const ServicesAnimation = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return null; // Don't render anything on the server
//   }

//   return (
//     <div className="">
//       <Lottie animationData={animation} className="md:w-[500px]" />
//     </div>
//   );
// };

// export default ServicesAnimation;
"use client";
import React from "react";
import dynamic from "next/dynamic";
import animation from "../../../assets/images/aboutme2.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ServicesAnimation = () => {
  return (
    <div className="">
      <Lottie animationData={animation} className="md:w-[370px]" />
    </div>
  );
};

export default ServicesAnimation;
