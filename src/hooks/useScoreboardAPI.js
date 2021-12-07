import { useEffect, useState } from "react";

export const useScoreboardAPI = () => {
  const [topTen, setTopTen] = useState([]);

  const getScoreboard = async () => {
    const url = "/scoreboard";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setTopTen(json);
  };

  useEffect(() => getScoreboard(), []);

  return topTen;
};
