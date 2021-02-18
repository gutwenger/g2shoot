import React from 'react'

import { useGame } from "../../context/GameContext";
import ResultGameCard from './ResultGameCard';

const ResultGame = () => {

    const { game } = useGame();

    //<i className="resultGame__i fas fa-chart-bar"></i>

    return (
        <div id="resultGame" className="resultGame">
            <h1 className="resultGame__h1">
                GAME STATS
            </h1>
            <div className="resultGameCon">
                <ResultGameCard
                    key="resultgamecard-pool"
                    title="TOTAL POOL"
                    data={game.pool}
                />
                <ResultGameCard
                    key="resultgamecard-players"
                    title="TOTAL PLAYERS"
                    data={game.players.length}
                />
                <ResultGameCard
                    key="resultgamecard-cards"
                    title="REMAINING CARDS"
                    data={game.cardReserve.length}
                />
            </div>
        </div>
    )
}

export default ResultGame;