import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useGameAPI } from '../hooks/useGameAPI';

export const GameView = () => {
  const [game, changeTurn] = useGameAPI();

  return (
    <div>
      <div>Score: { game.score }</div>
      <div>Health: { game.health }</div>
      <div>{ game.isDead ? "You are dead" : <button onClick={changeTurn}>Attack</button> }</div>
    </div>
  )
}
