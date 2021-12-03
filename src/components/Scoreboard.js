import { ShowScoreboardAPI } from "../hooks/showScoreboardAPI";

export const Scoreboard = () => {
  const topTen = ShowScoreboardAPI();
  return (
    <ul>
      Scoreboard:
      {topTen.map((scoreData) => (
        <li> {scoreData.score} </li>
      ))}
    </ul>
  );
};
