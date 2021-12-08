import React from "react";
import HeroIdle from "../../assets/hero.png";
import HeroAttack from "../../assets/heroAttack.png";
import HeroName from "./HeroName";

const Hero = ({isAttacking}) => {

  const heroImage = isAttacking? HeroAttack : HeroIdle;

  return (
    <div>
      <HeroName />
      <img src={heroImage} alt="hero" className="hero"/>
    </div>
  );
};

export default Hero;


