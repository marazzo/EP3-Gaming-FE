import * as React from "react";
import { Grid } from "@material-ui/core";

export function Layout({ children }) {
  return (
    <div>
      <Grid container className="layout">
        <Grid item xs={12} className="layout">
          {children}
        </Grid>
      </Grid>
    </div>
  );
}
