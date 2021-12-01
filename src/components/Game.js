import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useGameAPI } from '../hooks/useGameAPI';

export const GameView = () => {
  const [game, changeTurn] = useGameAPI();

  return (
    <div>
      <button onClick={changeTurn}>Attack</button>
      <div>Score: { game.score }</div>
      <div>Health: { game.health }</div>
      <div>Are you dead? { game.isDead ? "yes" : "no" }</div>
    </div>
  )
}
