const MonsterName = () => {
  const monsterNames = ["Rails Scaffold", "JS Async", 'React', "Copy/Pasta", "Passport JS"]
  const randomMonsterName = monsterNames[Math.floor(Math.random()*monsterNames.length)]
  
  return (
    <div>
      {randomMonsterName}
    </div>
  )
}

export default MonsterName;
