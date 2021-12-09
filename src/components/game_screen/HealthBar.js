import React from "react";

const HealthBar = (props) => {
  return (
    <div className="progress-box bar-box">
      <progress value={props.game.health} max="1000"></progress>
      <p style={{ marginTop: "10px" }}>Health</p>
    </div>
  );
};

export default HealthBar;
