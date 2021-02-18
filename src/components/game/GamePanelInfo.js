import React from 'react';

import { useGame } from "../../context/GameContext";
import { useRound } from "../../context/RoundContext";

const GamePanelInfoGrp = ({ title, data }) => {

    let symbol = (title === "BALANCE" || title === "POOL") && "$";
    let playerClass = title === "PLAYER" && "gamePanelInfoGrp__data--player";

    return (
        <div className="gamePanelInfoGrp">
            <p className="gamePanelInfoGrp__title">{ title }</p>
            <p className={`gamePanelInfoGrp__data ${playerClass}`}>{ symbol }{ data }</p>
        </div>
    )
}

const GamePanelInfo = () => {

    const { game } = useGame();
    const { round } = useRound();

    return (
        <div className="gamePanelInfo">
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-player"
                title="PLAYER"
                data={round.player.id}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-balance"
                title="BALANCE"
                data={round.player.balance}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-pool"
                title="POOL"
                data={game.pool}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-cards"
                title="CARDS"
                data={game.cardReserve.length}
            />
        </div>
    )
}

export default GamePanelInfo;
