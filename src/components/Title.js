import { Grid } from "@material-ui/core";
import React from "react";
import Sword from "../assets/sword.png";

export const Title = ({ loggedIn, setLoggedIn }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: "2rem" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h2 className="title-top">Life of</h2>
        <img src={Sword} alt="hero" style={{ width: "10%" }} />
      </Grid>
      <h1 className="title-name">BERNARD</h1>{" "}
    </Grid>
  );
};
