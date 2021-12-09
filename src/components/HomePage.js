import SignUp from "./userManage/SignUp";
import LogIn from "./userManage/LogIn";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Title } from "./Title";
import { useEffect } from "react";
import { Howl } from "howler"; // Howler JS Audio library
import Bernard from "../audioclips/bernard.mp3";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";

export const HomePage = ({ loggedIn, setLoggedIn, playing, setPlaying }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [display, setDisplay] = useState();
  const [open, setOpen] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const logIn = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const signUp = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const bernard = new Howl({
    src: Bernard,
    volume: 0.4,
    loop: true,
  });

  useEffect(() => {
    if (!playing) {
      bernard.play();
      setPlaying(true);
    }
  });

  const toggleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              {display}
            </Alert>
          </Snackbar>{" "}
        </Stack>
      )}
      <Title />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button className="intro-btn" onClick={logIn} variant="contained">
            Log In
          </Button>
          <Button
            className="intro-btn"
            onClick={signUp}
            variant="contained"
            sx={{ mb: 2 }}
          >
            Sign Up
          </Button>
        </Grid>
        <Grid>
          {showLogin && (
            <LogIn
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setDisplay={setDisplay}
              toggleOpen={toggleOpen}
            />
          )}
          {showSignup && (
            <SignUp setDisplay={setDisplay} toggleOpen={toggleOpen} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};
