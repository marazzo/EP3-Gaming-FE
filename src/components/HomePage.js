import SignUp from "./userManage/SignUp";
import LogIn from "./userManage/LogIn";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Title } from "./Title";
import { useEffect } from "react";
import { Howl } from "howler"; // Howler JS Audio library
import Bernard from "../audioclips/bernard.mp3"


export const HomePage = ({ loggedIn, setLoggedIn, playing, setPlaying }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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
    loop: true
  });

  useEffect(() => {
    if (!playing) {
      bernard.play()
      setPlaying(true)
    }
  }, );


  return (
    <div>
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
          {showLogin && <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          {showSignup && <SignUp />}
        </Grid>
      </Grid>
    </div>
  );
};
