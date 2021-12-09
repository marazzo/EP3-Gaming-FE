import React, { useState } from "react";
import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  const [loggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    callApi();
    setLoggedIn(false);
  };

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
      <Grid container direction="row" className="btn-container">
        <Button
          className="alternative-btn"
          component={Link}
          to="/game"
          variant="contained"
          color="primary"
        >
          Play
        </Button>

        {loggedIn ? 
        <Button
          className="alternative-btn"
          onClick={handleClick}
          variant="contained"
          color="primary"
        >  
        Logout
        </Button>
        :
        <Button
          className="alternative-btn"
          component={Link}
          to="/"
          variant="contained"
          color="primary"
        >
        Continue
        </Button>
        }
      </Grid>
    </Grid>
  );
};




const callApi = async () => {
  const url = "/logout";
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const res = await fetch(url, options);
  const response = res.status;
  console.log(response);
};
