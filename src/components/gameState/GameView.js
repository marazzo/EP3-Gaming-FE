import React, { useState } from "react";
import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import HealthBar from "../game_screen/HealthBar";
import Hero from "../game_screen/Hero";
import { MemoMonster } from "../game_screen/Monster";
import { Grid } from "@material-ui/core";
import { Howl } from "howler"; // Howler JS Audio library
import Punch from "../../audioclips/hit.mp3";
import No from "../../audioclips/no.wav";
import { ExitBox } from "./ExitBox";
import Button from "@material-ui/core/Button";
import { SliderValueLabel } from "@mui/material";
   


export const GameView = ({ loggedIn }) => {
  const [game, changeTurn, changeTurnDoubleDamage, killPlayer] = useGameAPI(); //[gameData, changeTurn]
  const [isAttacking, setIsAttacking] = React.useState(false);

  const toggleImage = () => {
    setIsAttacking(!isAttacking);
    setTimeout(() => {
      setIsAttacking(false);
    }, 166);
  };

  const punch = new Howl({
    src: Punch,
    volume: 0.2,
  });

  const no = new Howl({
    src: No,
    volume: 0.2
  })

  const handleClick = () => {
    if (active) {
      changeTurn();

      punch.play();
      toggleImage();

    }
      else
      {
      changeTurnDoubleDamage();
      no.play();
      toggleImage();
      }
  };

  const [seconds, setSeconds] = React.useState(3);
  const [active, setActive] = React.useState(true);

  React.useEffect(() => {
    if (game.isDead || gametimer === 0) {
      {setSeconds(-1)} 
      setActive(true)
    }
      else if (seconds > 0) {
      setActive(true)
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      {setSeconds("DON'T ATTACK!")}
      setActive(false)
      setTimeout(() => {setSeconds(Math.floor(Math.random()*3))}, 1000) 
    } 
  }, [seconds]);
  
  const [gametimer, setGameTimer] = React.useState(15);

  React.useEffect(() => {
    if (game.isDead || gametimer === 0) {
      {setGameTimer(-1)}
      {setSeconds("")}  
    }
      else if (gametimer > 0) {
      setTimeout(() => setGameTimer(gametimer - 1), 1000);
    } 
  }, [gametimer]);

  if ( gametimer === 0 ) {
    killPlayer()
  }

  return (
    <Grid
      className="game-container"
      justifyContent="center"
      alignItems="center"
    >
      <ExitBox />


      <Grid container className="game-bg">
        <Grid item xs={12} justifyContent="center">
          <HealthBar game={game} />
          <div className="stats-box">
            <p className="stats-text">Score: {game.score}</p>
            <p className="stats-text">Health: {game.health}</p>
          </div>
        </Grid>
        <Grid item xs={6}>
            Time Remaining <progress id="file" value={gametimer} max="15"></progress>
        </Grid>
        <Grid item xs={12}>
          {" "}
        </Grid>
        <Grid item xs={5}>
          <Hero isAttacking={isAttacking} />
        </Grid>
        <Grid item xs={2}><h2>{!active && seconds}</h2></Grid>
        <Grid item xs={5}>
          <MemoMonster />
        </Grid>
        <Grid item xs={12}>
          <div className="attack">
            {game.isDead ? (
              <div>
                <GameOver gameScore={game.score} />
              </div>
            ) : (
              <Button onClick={handleClick}>Attack</Button>
            )}
          </div>

        </Grid>
      </Grid>
    </Grid>
  );
};
