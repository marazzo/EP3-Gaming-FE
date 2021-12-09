import React from "react";
import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  return (
    <Grid className="scoreboard">
      <div className="scores">
        <h1 className="high-score">High Scores</h1>
        {topTen.map((scoreData) => (
          <Score
            key={scoreData._id}
            userName={scoreData.user}
            score={scoreData.score}
          />
        ))}
      </div>
      <Grid direction="row" className="btn-container">
        <Button
          className="alternative-btn"
          component={Link}
          to="/game"
          variant="contained"
          color="primary"
        >
          Play
        </Button>

        <Button
          className="alternative-btn"
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};
