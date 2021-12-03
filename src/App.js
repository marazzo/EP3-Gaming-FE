// import Button from '@material-ui/core/Button';
import "./App.css";
import SignUp from "./components/SignUp";
import { GameView } from "./components/Game";
import LogIn from "./components/LogIn";
import { useState } from "react";
import { HomePage } from "./components/HomePage";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true)

  return (
    <div>
      <div className="App">
      <HomePage setShowLogin={setShowLogin} />
     {showLogin ? <LogIn /> : <SignUp />}
     </div>
      <div className="Game">
        <GameView />
      </div>
    </div>
  );
};

export default App;
