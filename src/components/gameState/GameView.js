import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import HealthBar from "../game_screen/HealthBar";
import Hero from "../game_screen/Hero";
import Monster from "../game_screen/Monster";
import { Grid } from "@material-ui/core";
import {Howl} from "howler";  // Howler JS Audio library
import Punch from "../../audioclips/hit.mp3" 
import { ExitBox } from "./ExitBox";
import React from 'react'

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  const punch = new Howl({
    src: Punch,
    volume: 0.8
  })
   

  const handleClick = () => {
    changeTurn();
    punch.play();  // 
  }

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      changeTurn();
      punch.play()
    }
    else if (seconds == 0)
  };

  const [seconds, setSeconds] = React.useState(5);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds == 0) {
      {setSeconds('MONSTER ATTACKS YOU')}
      'MONSTER ATTACKS YOUfdsafds'
      setTimeout(() => {setSeconds(Math.floor(Math.random()*3))}, 1000)
      return () => clearTimeout();
    }
  });
 

  

  return (
    <div className="game-container">
        <ExitBox />
      <Grid container className="game-bg">
        <Grid item xs={6}>
          <HealthBar game={game} />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={4}>
          <Hero />
        </Grid>
        <Grid item xs={4}>
        <h1>{seconds}</h1>
        </Grid>
        <Grid item xs={4}>
          <Monster />
        </Grid>
        <Grid item xs={12}>
    
        </Grid>
      </Grid>

      <div>Score: {game.score}</div>
      <div>Health: {game.health}</div>
      <div>
        {game.isDead ? (
          <div>
            <GameOver gameScore={game.score} />

          </div>
        ) : (
          <div>
          <button onClick={handleClick} onKeyPress={handleKeyPress}>
            Attack
          </button>
          </div>
        )}
      </div>
    </div>
  );
};
