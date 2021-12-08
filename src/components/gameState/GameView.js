import React from 'react';
import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import HealthBar from "../game_screen/HealthBar";
import Hero from "../game_screen/Hero";
import Monster from "../game_screen/Monster";
import { Grid } from "@material-ui/core";
import {Howl} from "howler";  // Howler JS Audio library
import Punch from "../../audioclips/hit.mp3" 
import { ExitBox } from "./ExitBox";

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  const punch = new Howl({
    src: Punch,
  })

  const handleClick = () => {
    changeTurn();
    punch.play();  // 
  }

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
          
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
        <Grid item xs={4}>
          <Hero />
        </Grid>
        <Grid item xs={4}>
          
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
          <button onClick={handleClick} onKeyPress={handleKeyPress}>
            Attack
          </button>
        )}
      </div>
    </div>
  );
};
