import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { GameProvider } from './context/GameContext';
import { RoundProvider } from './context/RoundContext';
import { LangProvider } from './context/LangContext';

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <GameProvider>
        <RoundProvider>
          <App />
        </RoundProvider>
      </GameProvider>
    </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

