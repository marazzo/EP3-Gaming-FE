import { memo } from 'react'

const MonsterName = () => {
  const monsterNames = [
    "Rails Scaffold Orc",
    "JS Async Ghost",
    "React Ghoul",
    "Copy/Pasta Zombie",
    "Passport JS Wraith",
    "TDD Poltergeist",
    "Debugging Bloodsucker"
  ];
  const randomMonsterName =
    monsterNames[Math.floor(Math.random() * monsterNames.length)];

  return <div className="monster-name">{randomMonsterName}</div>;
};

export const MemoMonsterName = memo(MonsterName);
