import React from 'react';

import { useLang } from "../../context/LangContext";
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

    const { texts } = useLang();
    const { game } = useGame();
    const { round } = useRound();

    return (
        <div className="gamePanelInfo">
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-player"
                title={ texts.game.gamePanel.info.player }
                data={round.player.id}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-balance"
                title={ texts.game.gamePanel.info.balance }
                data={round.player.balance}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-pool"
                title={ texts.game.gamePanel.info.pool }
                data={game.pool}
            />
            <GamePanelInfoGrp
                key="gamePanelInfoGrp-cards"
                title={ texts.game.gamePanel.info.cards }
                data={game.cardReserve.length}
            />
        </div>
    )
}

export default GamePanelInfo;
