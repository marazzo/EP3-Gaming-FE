import React from 'react'
import monsterArray from '../../assets/monsters/monsterArray';
import MonsterName from './MonsterName';


const Monster = () => {
  const randomMonster = monsterArray[Math.floor(Math.random()*monsterArray.length)];
  
  return (
    <div>
      <MonsterName />
      <img src={randomMonster} alt="monster" className="monster"/>
    </div>
  )
}

export const MemoMonster = React.memo(Monster)
