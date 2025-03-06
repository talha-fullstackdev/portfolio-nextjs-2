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
