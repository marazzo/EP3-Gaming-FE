import { UpdateScoreAPI } from "../hooks/updateScoreAPI";
import { Scoreboard } from "./Scoreboard";

export const GameOver = () => {
  const [currentScore] = UpdateScoreAPI();

  return (
    <div>
      Final score: {currentScore.score}
      <Scoreboard />
    </div>
  );
};
