import { usePlayerNameAPI } from "../../hooks/usePlayerNameAPI"

const HeroName = () => {
  const [playerName] = usePlayerNameAPI();
  
  return (
    <div>
      {playerName}
    </div>
  )
}

export default HeroName;
