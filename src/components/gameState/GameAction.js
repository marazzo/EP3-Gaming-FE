import React from "react";

const GameAction = (props) => {
  return (
    <div>
      <div>Score: {props.score}</div>
      <div>Health: {props.health}</div>
      <div>
        {props.isDead ? (
          <div>
            <GameOver Score={props.score} />
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

export default GameAction;
