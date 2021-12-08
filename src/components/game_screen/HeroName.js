import { usePlayerNameAPI } from "../../hooks/usePlayerNameAPI"
import React from 'react';

const HeroName = () => {
  const [playerName] = usePlayerNameAPI();
  
  return (
    <div>
      {playerName}
    </div>
  )
}

export default HeroName;
