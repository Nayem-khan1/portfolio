import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full px-4 md:px-16" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute hidden md:block md:top-[-240px] xl:top-[-340px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
