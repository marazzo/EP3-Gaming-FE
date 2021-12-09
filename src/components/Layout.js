import * as React from "react";
import { Grid } from "@material-ui/core";

export function Layout({ children }) {
  return (
    <div>
      <Grid container className="layout">
        {children}
      </Grid>
    </div>
  );
}
