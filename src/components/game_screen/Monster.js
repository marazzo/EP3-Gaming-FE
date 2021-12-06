import React from 'react'
import MonsterSprite from "../../assets/monster.png"

const Monster = () => {
  return (
    <div>
      <img src={MonsterSprite} alt="monster" className="monster"/>
    </div>
  )
}

export default Monster;
