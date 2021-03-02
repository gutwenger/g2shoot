import React from 'react';

import { useLang } from "../../context/LangContext";
import { useRound, useRoundFunctions } from "../../context/RoundContext";

const ResultButton = ({ changePage, setTopPage, setNavIsOpen }) => {

    const { texts } = useLang();
    const { nextRound } = useRound();
    const { endGame } = useRoundFunctions();

    let returnToGame = nextRound && (
        <button className="resultButton__btn" onClick={()=>handleResumeGame()}>
            <i className="resultButton__btn__i fas fa-undo-alt" />
            <p className="resultButton__btn__p">
                { texts.endGame.resume }
            </p>
        </button>
    )

    function handleResumeGame() {
        setTopPage("default");
        setNavIsOpen(false);
    }

    function handleEndGame() {
        // If the game is still active, redirect to EndGame to ask player again
        if (nextRound) {
            setTopPage("endgame");
            setNavIsOpen(false);
        // If game over
        } else {
            changePage("home");
            setTopPage("default");
            setNavIsOpen(false);
            endGame();
        }
    }

    return (
        <div id="resultButton" className="resultButton">
            { returnToGame }
            <button className="resultButton__btn" onClick={()=>handleEndGame()}>
                <i className="resultButton__btn__i fas fa-times" />
                <p className="resultButton__btn__p">
                    { texts.endGame.endGame }
                </p>
            </button>
        </div>
    )
}

export default ResultButton;