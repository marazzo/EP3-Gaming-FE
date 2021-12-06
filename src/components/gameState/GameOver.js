import { useScoreAPI } from "../../hooks/useScoreAPI";
import { Scoreboard } from "./Scoreboard";

export const GameOver = () => {
  const [currentScore] = useScoreAPI();

  return (
    <div>
      Final score: {currentScore.score}
      <Scoreboard />
    </div>
  );
};
