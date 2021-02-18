import React from 'react'
import GameBall from './GameBall';
import GamePanel from './GamePanel'
import GameWoodWorks from './GameWoodWorks';

import { useRound } from "../../context/RoundContext";

const Game = ({ changePage, setTopPage }) => {

    const { round } = useRound();

    return (
        <div id="game" className="game">
            <GameWoodWorks />
            <GameBall 
                key="gameball"
                stage={round.stage}
            />
            <GamePanel 
                stage={round.stage}
                changePage={changePage}
                setTopPage={setTopPage}
            />
        </div>
    )
}

export default Game;