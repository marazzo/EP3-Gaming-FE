import React from 'react'
import monsterArray from '../../assets/monsters/monsterArray';

const Monster = () => {
  const randomMonster = monsterArray[Math.floor(Math.random()*monsterArray.length)];
  console.log(randomMonster)
  return (
    <div>
      <img src={randomMonster} alt="monster" className="monster"/>
    </div>
  )
}

export default Monster;
