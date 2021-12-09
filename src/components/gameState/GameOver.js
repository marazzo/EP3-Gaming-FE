import { useScoreAPI } from "../../hooks/useScoreAPI";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {Howl} from "howler";  // Howler JS Audio library
import React from 'react'
import GameEndTheme from "../../audioclips/game_over.mp3" 

export const GameOver = ({ gameScore }) => {
  useScoreAPI();

  const gameover = new Howl({
    src: GameEndTheme,
    volume: 0.2
  })

  gameover.play()
  

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your score is {gameScore}</p>
      <Button
        component={Link}
        to="/scoreboard"
        variant="contained"
        color="primary"
      >
        Continue
      </Button>
    </div>
  );
};
