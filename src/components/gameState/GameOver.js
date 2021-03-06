import { useScoreAPI } from "../../hooks/useScoreAPI";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Howl } from "howler"; // Howler JS Audio library
import React from "react";
import GameEndTheme from "../../audioclips/over.mp3";

const GameOver = ({ gameScore }) => {
  useScoreAPI();

  const gameover = new Howl({
    src: GameEndTheme,
    volume: 0.3,
  });

  gameover.play()
  
  return (
    <div className="go-card">
      <h1>Game Over</h1>
      <p>Your score is:</p>
      <p>{gameScore}</p>
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

export const MemoGameOver = React.memo(GameOver)
