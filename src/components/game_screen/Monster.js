import React, {useEffect, useState, memo} from "react";
import monsterArray from "../../assets/monsters/monsterArray";
import monsterAttackArray from "../../assets/monsters/monsterAttackArray";
import { MemoMonsterName } from "./MonsterName";

const Monster = ({ monsterAttacking }) => {
  const [index, setIndex]= useState(null)
  useEffect(()=>{
    const randomIndex = Math.floor(Math.random() * monsterArray.length)
    setIndex(randomIndex)
  }, [])
  const randomMonster = monsterArray[index]

  const monsterImage = monsterAttacking ? monsterAttackArray[index] : randomMonster

  return (
    <div className="monster-box">
      <MemoMonsterName />
      <img src={monsterImage} alt="monster" className="monster" />
    </div>
  );
};

export const MemoMonster = memo(Monster);
