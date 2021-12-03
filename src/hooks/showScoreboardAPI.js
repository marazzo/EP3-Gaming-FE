import { useEffect, useState } from "react";

export const ShowScoreboardAPI = () => {
  const [topTen, setTopTen] = useState([]);

  const getScoreboard = async () => {
    const url = "http://localhost:3000/scoreboard";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setTopTen(json);
  };

  useEffect(() => getScoreboard(), []);

  return topTen;
};
