import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  return (
    <ul>
      Scoreboard:
      {topTen.map((scoreData) => (
        <li> {scoreData.score} </li>
      ))}
    </ul>
  );
};
