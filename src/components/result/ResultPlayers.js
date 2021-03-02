import React from 'react';

import { useLang } from "../../context/LangContext";
import { useGame } from "../../context/GameContext";
import ResultPlayerCard from './ResultPlayerCard';

const ResultPlayers = () => {

    const { texts } = useLang();
    const { game } = useGame();

    return (
        <div id="resultPlayers" className="resultPlayers">
            <h1 className="resultPlayers__h1">
                { texts.result.players.title }
            </h1>
            <div className="resultPlayerTitle">
                <div className="resultPlayerCard__title">
                    <i className="resultPlayerCard__title__i bi bi-person-fill"></i>
                    <p className="resultPlayerCard__title__p">
                        { texts.result.players.player }
                    </p>
                </div>
                <div className="resultPlayerCard__title">
                    <i className="resultPlayerCard__title__i bi bi-trophy-fill"></i>
                    <p className="resultPlayerCard__title__p">
                        { texts.result.players.result }
                    </p>
                </div>
                <div className="resultPlayerCard__title">
                    <i className="resultPlayerCard__title__i fas fa-dollar-sign"></i>
                    <p className="resultPlayerCard__title__p">
                        { texts.result.players.balance }
                    </p>
                </div>
            </div>
            <div className="resultPlayersCon">
                {game.players.map((player, i) => (
                    <ResultPlayerCard
                        key={`resultplayercard-${i}`}
                        player={player}
                    />
                ))}
            </div>
        </div>
    )
}

export default ResultPlayers;