import { Grid } from "@material-ui/core";
import React from "react";
import { LogOut } from "./userManage/LogOut";

export const Navbar = ({ loggedIn, setLoggedIn }) => {

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="custom-nav"
    >
      <LogOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Grid>
  );
};
