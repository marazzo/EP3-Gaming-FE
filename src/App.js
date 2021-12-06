// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/gameState/GameView";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div className ="wrapper">
    <Router>
      <Routes>
        <Route path="/home" element={HomePage()} />
        <Route path="/game" element={GameView()} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
