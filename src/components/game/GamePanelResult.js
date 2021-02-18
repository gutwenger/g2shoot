import React from 'react';

import { useRound, useRoundFunctions } from "../../context/RoundContext"; 

const GamePanelResult = ({ setTopPage }) => {

    const { round, nextRound } = useRound();
    const { endRound } = useRoundFunctions();

    let result = round.result.result === "win"
        ? "WIN"
        : round.result.result === "loseSmall"
            ? "LOSE"
            : "LOSE (DOUBLE)";

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
                {nextRound ? "Next round" : "See result"}
            </button>
        </div>
    )
}

export default GamePanelResult;