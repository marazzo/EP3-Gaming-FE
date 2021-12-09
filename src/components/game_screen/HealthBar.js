import React from "react";

const HealthBar = (props) => {
  return (
    <div>
      <progress value={props.game.health} max="1000"></progress>
    </div>
  );
};

export default HealthBar;
