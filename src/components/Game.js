import { Grid, Row, Column } from "@material-ui/core";
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
      {/* <Grid >
        <Monster />
        <Hero />
      </Grid> */}
      
  
      <Grid container className="game-bg">
    
        <Grid item xs={6} style={{background: 'red'}}>1</Grid>
        <Grid item xs = {6} style={{background: 'orange'}}>2</Grid>
        <Grid item xs = {12} style={{background: 'yellow'}}>3</Grid>
        <Grid item xs = {4} ><Hero/></Grid>  
        <Grid item xs = {4} style={{background: 'blue'}}>5</Grid>
        <Grid item xs = {4} ><Monster/></Grid>
        <Grid item xs = {12} style={{background: 'grey'}}>7</Grid>
      </Grid> 
      {/* test grid */}
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
