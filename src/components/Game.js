import { useGameAPI } from '../hooks/useGameAPI';

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]
  return (
    <div>
      <div>Score: { game.score }</div>
      <div>Health: { game.health }</div>
      <div>{ game.isDead ? "You are dead" : <button onClick={changeTurn}>Attack</button> }</div>
    </div>
  )
}
