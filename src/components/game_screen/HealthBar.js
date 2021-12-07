import React from "react";

const HealthBar = (props) => {
  return (
    <div>
      <progress value={props.game.health} max="200"></progress>
    </div>
  );
};

export default HealthBar;
