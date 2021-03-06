// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/gameState/GameView";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scoreboard } from "./components/gameState/Scoreboard";
import { Layout } from "./components/Layout";
import { useState } from "react";
import React from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [playing, setPlaying] = useState();

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} playing={playing} setPlaying={setPlaying} />
              }
            />
            <Route path="/game" element={<GameView loggedIn={loggedIn} />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
