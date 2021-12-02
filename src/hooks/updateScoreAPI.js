import { useEffect, useState } from "react";

export const UpdateScoreAPI = () => {
  const [currentScore, updateScore] = useState([]);

  const sendScore = async () => {
    const url = "http://localhost:3000/commit-score";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    updateScore(json);
  };

  useEffect(() => sendScore(), []);

  return [currentScore];
};
