import React, {useEffect, useState} from "react";
import monsterArray from "../../assets/monsters/monsterArray";
import monsterAttackArray from "../../assets/monsters/monsterAttackArray";
import MonsterName from "./MonsterName";

const Monster = ({ isAttacking }) => {
  const [Index, setIndex]= useState(null)
  useEffect(()=>{
    const randomIndex = Math.floor(Math.random() * monsterArray.length)
    setIndex(randomIndex)
  }, [])
  const randomMonster = monsterArray[Index]

  const monsterImage = isAttacking ? monsterAttackArray[Index] : randomMonster

  return (
    <div className="monster-box">
      <MonsterName />
      <img src={monsterImage} alt="monster" className="monster" />
    </div>
  );
};

export const MemoMonster = React.memo(Monster);
