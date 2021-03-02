import React from 'react';

import { useLang } from "../../context/LangContext";
import { useRound, useRoundFunctions } from "../../context/RoundContext"; 

const GamePanelResult = ({ setTopPage }) => {

    const { texts } = useLang();
    const { round, nextRound } = useRound();
    const { endRound } = useRoundFunctions();

    let result = round.result.result === "win"
        ? texts.game.gamePanel.control.result.results.win
        : round.result.result === "loseSmall"
            ? texts.game.gamePanel.control.result.results.lose
            : texts.game.gamePanel.control.result.results.loseDouble;

    let resultClass = round.result.result === "win"
        ? "gamePanelResult__div--win"
        : "gamePanelResult__div--lose"

    function handleClick() {
        if (nextRound) {
            endRound();
        } else {
            setTopPage("result");
        }
    }

    return (
        <div id="gamePanelResult" className="gamePanelResult">
            <div id="gamePanelResult__div" className={`gamePanelResult__div ${resultClass}`}>
                <p className="gamePanelResult__div__p">
                    { result }
                </p>
                <p className="gamePanelResult__div__data">
                    ${round.result.prize}
                </p>
            </div>
            <button className="gamePanelResult__btn" onClick={()=>handleClick()}>
                {nextRound ? texts.game.gamePanel.control.result.nextRound : texts.game.gamePanel.control.result.seeResult }
            </button>
        </div>
    )
}

export default GamePanelResult;