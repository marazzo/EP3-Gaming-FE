import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";
import HealthBar from "../game_screen/HealthBar";
import Hero from "../game_screen/Hero";
import Monster from "../game_screen/Monster";
import { Grid } from "@material-ui/core";
import { Howl } from "howler"; // Howler JS Audio library
import Punch from "../../audioclips/hit.mp3";
import { ExitBox } from "./ExitBox";
import React, { useState } from "react";

export const GameView = ({ loggedIn }) => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]
  const [isAttacking, setIsAttacking] = useState(false);

  const toggleImage = () => {
    setIsAttacking(!isAttacking);
    setTimeout(() => {
      setIsAttacking(false);
    }, 166);
  };

  const punch = new Howl({
    src: Punch,
    volume: 0.8,
  });

  const handleClick = () => {
    changeTurn();
    punch.play();
    toggleImage();
  };

  const handleKeyPress = (event) => {
    if (event.code === "Space") {
      changeTurn();
      punch.play();
      toggleImage();
    }
  };
  return (
    <>
      {" "}
      {loggedIn ? (
        <Grid
          className="game-container"
          justifyContent="center"
          alignItems="center"
        >
          <ExitBox />

          <Grid container className="game-bg">
            <Grid item xs={6}>
              <HealthBar game={game} />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={4}>
              <Hero />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Monster />
            </Grid>
            <Grid item xs={12}></Grid>
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
        </Grid>
      ) : (
        <h1>LOG IN!!!</h1>
      )}
    </>
  );
};
