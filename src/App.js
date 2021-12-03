// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/Game";
import { HomePage } from "./components/HomePage";

const App = () => {


  return (
    <div>
      <div className="App">
      <HomePage />
     </div>
      <div className="Game">
        <GameView />
      </div>
    </div>
  );
};

export default App;
