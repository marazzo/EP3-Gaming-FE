import SignUp from "./userManage/SignUp";
import LogIn from "./userManage/LogIn";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom";

export const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false)

  const logIn = () => {
    setShowLogin(true)
    setShowSignup(false)
  }

  const signUp = () => {
    setShowLogin(false)
    setShowSignup(true)
  }

  return (
    <div>
      <h1>ATT & DIE</h1>
      <Button onClick={logIn} variant="contained" color="primary">Log In</Button>
      <Button onClick={signUp} variant="contained" color="primary">Sign Up</Button>
      {showLogin && <LogIn /> }
      {showSignup && <SignUp /> }
    </div>
  );
}
