import { usePlayerNameAPI } from "../../hooks/usePlayerNameAPI";
import React from "react";

const HeroName = () => {
  const [playerName] = usePlayerNameAPI();

  return <div className="character-name ">{playerName}</div>;
};

export default HeroName;
