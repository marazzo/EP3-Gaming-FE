import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel'
import { Grid } from "@material-ui/core";

export const ExitBox = () => {

  return (
  <Grid container justify="flex-end" alignItems="flex-end">
    <IconButton
      component={Link}
      to="/scoreboard"
      size="small"
      position=""
      style={{ top: 15, right: 15 }}
      >
      <CancelIcon />
    </IconButton>
  </Grid>
  )

}