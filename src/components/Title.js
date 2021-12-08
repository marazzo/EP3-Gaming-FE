import { Grid } from "@material-ui/core";
import React from 'react';
import { LogOut } from "./userManage/LogOut";

export const Title = ({loggedIn, setLoggedIn}) => {

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={11}>
        <h1>Amazing Title goes here!</h1>
      </Grid>
      <Grid item xs={1}>
        <LogOut loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Grid>
    </Grid>
  )
}