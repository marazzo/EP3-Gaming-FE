import * as React from 'react';
import { Grid } from "@material-ui/core";
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

export function Layout ({ children }) {
  return <div>
    <Grid container className="layout">
      {/* <Grid item xs={12} style={{ background: "red" }}>1</Grid> */}
      <Grid item xs={12} className="layout">{children}</Grid>
      {/* <Grid item xs={12} style={{ background: "yellow" }}>3</Grid> */}
    </Grid>

 </div>
}
// className="layout" cols={12} rowHeight={30} width={1200}