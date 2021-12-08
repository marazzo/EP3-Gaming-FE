// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/gameState/GameView";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scoreboard } from "./components/gameState/Scoreboard";
import { Layout } from "./components/Layout";
import { Title } from "./components/Title";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { useState } from "react";
import React from 'react';

const App = () => {

  return (
    <div className="wrapper">
    <Title />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<GameView/>} />
            <Route path="/scoreboard" element={<Scoreboard/>} />
            {/* <ProtectedRoute path="/game" element={GameView} isAuth={isAuth} /> */}
          </Routes>
        </Router>
      </Layout>
    </div>
  );
};

export default App;
