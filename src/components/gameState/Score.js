import React from "react";

const Score = ({ userName, score }) => {
  return (
    <div className="score">
      {userName}: {score}
    </div>
  );
};

export default Score;
