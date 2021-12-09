import { useState, useEffect } from "react";

export const useGameAPI = () => {
  const [gameData, setGameData] = useState([]);

  const startGame = async () => {
    const url = "/start-game";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setGameData(json);
  };

  const changeTurn = async () => {
    const url = "/turn";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setGameData(json);
  };

  const changeTurnDoubleDamage = async () => {
    const url = "/turn-more-damage";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setGameData(json);
  };

  useEffect(() => startGame(), []);

  return [gameData, changeTurn, changeTurnDoubleDamage];
};
