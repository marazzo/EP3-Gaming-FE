import { UpdateScoreAPI } from "../hooks/updateScoreAPI";

export const GameOver = () => {
  const [currentScore] = UpdateScoreAPI();

  return <div>Final score: {currentScore.score}</div>;
};
