import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { useState } from "react";


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
      <button onClick={logIn}>Log In</button>
      <button onClick={signUp}>Sign Up</button>
      {showLogin ? <LogIn /> :""}
      {showSignup ? <SignUp /> : "" }
    </div>
  );
}
