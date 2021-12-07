// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/gameState/GameView";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scoreboard } from "./components/gameState/Scoreboard";
import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
import { usePlayerNameAPI } from "./hooks/usePlayerNameAPI";

const App = () => {
  const [playerName] = usePlayerNameAPI();

  return (
    <div>
      {playerName ? console.log(playerName) : console.log("Not logged in")}
      <Layout>
        <Title />
        <Router>
          <Routes>
            <Route path="/" element={HomePage()} />
            <Route path="/game" element={GameView()} />
            <Route path="/scoreboard" element={Scoreboard()} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
