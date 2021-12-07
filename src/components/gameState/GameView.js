import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import HealthBar from "../game_screen/HealthBar";
import Hero from "../game_screen/Hero";
import Monster from "../game_screen/Monster";
import { Grid } from "@material-ui/core";
import { ExitBox } from "./ExitBox";

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      changeTurn();
    }
  };
  return (
    <div className="game-container">
        <ExitBox />
      <Grid container className="game-bg">
        <Grid item xs={6}>
          <HealthBar game={game} />
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={12}>
          3
        </Grid>
        <Grid item xs={4}>
          <Hero />
        </Grid>
        <Grid item xs={4}>
          5
        </Grid>
        <Grid item xs={4}>
          <Monster />
        </Grid>
        <Grid item xs={12}>
          7
        </Grid>
      </Grid>

      <div>Score: {game.score}</div>
      <div>Health: {game.health}</div>
      <div>
        {game.isDead ? (
          <GameOver gameScore={game.score} />
        ) : (
          <button onClick={changeTurn} onKeyPress={handleKeyPress}>
            Attack
          </button>
        )}
      </div>
    </div>
  );
};
