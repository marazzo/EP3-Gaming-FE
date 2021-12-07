import React from "react";
import HeroSprite from "../../assets/hero.png";
import HeroName from "./HeroName";

const Hero = () => {
  return (
    <div>
      <HeroName />
      <img src={HeroSprite} alt="hero" className="hero"/>
    </div>
  );
};

export default Hero;


