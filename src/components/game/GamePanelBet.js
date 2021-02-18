import React, { useRef } from 'react';

import { useGame } from "../../context/GameContext";
import { useRound } from "../../context/RoundContext";
import { useRoundFunctions } from "../../context/RoundContext";

const GamePanelBet = () => {

    const { game } = useGame();
    const { round } = useRound();
    const { placeBet } = useRoundFunctions();

    let betRef = useRef();

    const MAX_BET = round.player.balance > game.pool ? game.pool : round.player.balance;

    function handleSubmit(event) {
        event.preventDefault();
        let bet = betRef.current.value;
        placeBet({ bet });
    }

    return (
        <form id="gamePanelBet" className="gamePanelBet" onSubmit={(event)=>handleSubmit(event)}>
            <input 
                id="gamePanelBet__input"
                className="gamePanelBet__input" 
                name="bet"
                type="number"
                min={1}
                max={MAX_BET}
                defaultValue={1}
                required
                ref={betRef}
            />
            <button type="submit" className="gamePanelBet__btn">BET</button>
        </form>
    )
}

export default GamePanelBet;