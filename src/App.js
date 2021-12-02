// import Button from '@material-ui/core/Button';
import "./App.css";
import SignUp from "./components/SignUp";
import { GameView } from "./components/Game";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <div>
      <div className="App">
        <SignUp />
      </div>
      <div className="App">
        <LogIn />
      </div>
      <div className="Game">
        <GameView />
      </div>
    </div>
  );
};

export default App;
