import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GameProvider } from './context/GameContext';
import { RoundProvider } from './context/RoundContext';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <RoundProvider>
        <App />
      </RoundProvider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

