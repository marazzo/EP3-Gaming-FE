import { useGameAPI } from "../hooks/useGameAPI";
import { GameOver } from "./GameOver";

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  return (
    <div>
      <div>Score: {game.score}</div>
      <div>Health: {game.health}</div>
      <div>
        {game.isDead ? (
          <GameOver />
        ) : (
          <button onClick={changeTurn}>Attack</button>
        )}
      </div>
    </div>
  );
};
