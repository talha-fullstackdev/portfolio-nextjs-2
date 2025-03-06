
"use client";

import React from "react";
import dynamic from "next/dynamic";
import aboutAnimation from "../../../assets/images/aboutme.json";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutAnimation = () => {
  return (
    <div>
      <Lottie
        loading="lazy"
        animationData={aboutAnimation}
        className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg mx-auto sm:mx-0 md:mt-20"
      />
    </div>
  );
};

export default AboutAnimation;
