import { Grid } from "@material-ui/core";

export const Title = () => {

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid container xs={11} justifyContent="center" alignItems="center">
        <h1>Amazing Title goes here!</h1>
      </Grid>
      <Grid item xs={1}>
        Log Out
      </Grid>
    </Grid>
  )
}