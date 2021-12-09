import React from "react";

const Score = ({ userName, score }) => {
  return (
    <div className="score">
      <p className="score-name">
        {userName}: {score}
      </p>
    </div>
  );
};

export default Score;
