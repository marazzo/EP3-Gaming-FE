import React from "react";
import HeroSprite from "../../assets/hero.png";


const Hero = () => {
  return (
    <div>
      <img src={HeroSprite} alt="hero" className="hero"/>
    </div>
  );
};

export default Hero;


