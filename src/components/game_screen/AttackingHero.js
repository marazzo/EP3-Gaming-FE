import React, {useState} from "react";
import HeroName from "./HeroName";
import attack1 from '../../assets/hero-attacking/attack1.png'
import attack2 from '../../assets/hero-attacking/attack2.png'
import attack3 from '../../assets/hero-attacking/attack3.png'
import attack4 from '../../assets/hero-attacking/attack4.png'
import attack5 from '../../assets/hero-attacking/attack5.png'
import attack6 from '../../assets/hero-attacking/attack6.png'
import attack7 from '../../assets/hero-attacking/attack7.png'
import attack8 from '../../assets/hero-attacking/attack8.png'
import attack9 from '../../assets/hero-attacking/attack9.png'
import attack10 from '../../assets/hero-attacking/attack10.png'

const AttackingHero = () => {

  const [picture, setPicture] = useState()

  const attackHero = [
    attack1, attack2, attack3, attack4, attack5, attack6, attack7, attack8, attack9, attack10
  ]
  
  setInterval(
    function attack(){
      for (let i = 0; i < attackHero.length; i++){
        setPicture(attackHero[i])
      }
    }, 100);
  



  return (
    <div>
      <HeroName />
      <img src={picture} alt="attacking-hero"/>
    </div>
  );
};

export default AttackingHero;