import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full pb-20" id="about-me">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
