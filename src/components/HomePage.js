import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { useState } from "react";


export const HomePage = ({ setShowLogin }) => {
  return (
    <div>
      <button onClick={() => setShowLogin(true)}>Log In</button>
      <button onClick={() => setShowLogin(false)}>Sign Up</button>
    </div>
  );
}
