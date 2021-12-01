// import Button from '@material-ui/core/Button';
import './App.css';
import SignUp from './components/SignUp'

import { useState } from 'react';
import { GameView } from './components/Game';

const App = () => {
  return (
    <div>
      <div className="App">
        <SignUp />
      </div>
      <div className="Game">
        <GameView />
      </div>
    </div>
  );
};

export default App;