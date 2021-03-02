import React from 'react'

import { useLang } from "../../context/LangContext";
import { useGame } from "../../context/GameContext";
import ResultGameCard from './ResultGameCard';

const ResultGame = () => {

    const { texts } = useLang();
    const { game } = useGame();

    //<i className="resultGame__i fas fa-chart-bar"></i>

    return (
        <div id="resultGame" className="resultGame">
            <h1 className="resultGame__h1">
                { texts.result.game.title }
            </h1>
            <div className="resultGameCon">
                <ResultGameCard
                    key="resultgamecard-pool"
                    title={ texts.result.game.totalPool }
                    data={game.pool}
                />
                <ResultGameCard
                    key="resultgamecard-players"
                    title={ texts.result.game.totalPlayers }
                    data={game.players.length}
                />
                <ResultGameCard
                    key="resultgamecard-cards"
                    title={ texts.result.game.remainingCards }
                    data={game.cardReserve.length}
                />
            </div>
        </div>
    )
}

export default ResultGame;