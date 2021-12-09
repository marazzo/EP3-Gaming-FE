import React from "react";
import HeroIdle from "../../assets/hero.png";
import HeroAttack from "../../assets/heroAttack.png";
import HeroHurt from "../../assets/heroHurt.png";
import HeroName from "./HeroName";

const Hero = ({ isAttacking }) => {
  const heroImage = isAttacking >= 3 ? HeroAttack : (isAttacking == 2 ? HeroHurt : HeroIdle);

  return (
    <div className="hero-box">
      <HeroName />
      <img src={heroImage} alt="hero" className="hero" />
    </div>
  );
};

export default Hero;
