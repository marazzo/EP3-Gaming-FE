import * as React from "react";
import { Grid } from "@material-ui/core";
import { Navbar } from "./Navbar";

export function Layout({ children, loggedIn, setLoggedIn }) {
  return (
    <div>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Grid container className="layout">
        {children}
      </Grid>
    </div>
  );
}
