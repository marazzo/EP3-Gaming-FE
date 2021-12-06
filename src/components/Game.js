import { Grid } from "@material-ui/core";
import { useGameAPI } from "../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import Hero from "./game_screen/Hero";
import Monster from "./game_screen/Monster";

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      changeTurn();
    }
  };

  return (
    <div className="game-container">
      <Grid className="game-bg">
        <Monster />
        <Hero />
      </Grid>
      <div>Score: {game.score}</div>
      <div>Health: {game.health}</div>
      <div>
        {game.isDead ? (
          <GameOver />
        ) : (
          <button onClick={changeTurn} onKeyPress={handleKeyPress}>
            Attack
          </button>
        )}
      </div>
    </div>
  );
};
