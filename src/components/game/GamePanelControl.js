import React from 'react'
import GamePanelBet from './GamePanelBet'
import GamePanelResult from './GamePanelResult'

import { useLang } from "../../context/LangContext";
import { useRound } from "../../context/RoundContext";

const GamePanelControl = ({ changePage, setTopPage }) => {

    const { texts } = useLang();
    const { round } = useRound();

    let display = {
        woodworks: (
            <div className="gamePanelControl__step">
                <p className="gamePanelControl__step__number">1</p>
                <p className="gamePanelControl__step__p">{ texts.game.gamePanel.control.woodworks }</p>
            </div>
        ),
        bet: (
            <div className="gamePanelControl__step">
                <p className="gamePanelControl__step__number">2</p>
                <GamePanelBet
                    key="gamepanelbet"
                />
            </div>
        ),
        ball: (
            <div className="gamePanelControl__step">
                <p className="gamePanelControl__step__number">3</p>
                <p className="gamePanelControl__step__p">{ texts.game.gamePanel.control.ball }</p>
            </div>
        ),
        result: (
                <GamePanelResult 
                    changePage={changePage}
                    setTopPage={setTopPage}
                />
        )
    }

    return (
        <div className="gamePanelControl">
            { display[round.stage] }
        </div>
    )
}

export default GamePanelControl;