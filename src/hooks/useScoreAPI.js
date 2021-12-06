import { useEffect, useState } from "react";

export const useScoreAPI = () => {
  const [currentScore, updateScore] = useState([]);

  const sendScore = async () => {
    const url = "/commit-score";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    

    updateScore(json);
  };

  useEffect(() => sendScore(), []);

  return [currentScore];
};
