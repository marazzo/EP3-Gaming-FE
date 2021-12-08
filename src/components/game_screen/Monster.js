import React from 'react'
import MonsterSprite from "../../assets/monster.png"
import MonsterName from './MonsterName';

const Monster = () => {
  return (
    <div>
      <MonsterName />
      <img src={MonsterSprite} alt="monster" className="monster"/>
    </div>
  )
}

export default Monster;
