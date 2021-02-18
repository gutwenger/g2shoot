import React from 'react';
import { useRoundFunctions } from '../../context/RoundContext';

const EndGame = ({ changePage, setTopPage, setNavIsOpen }) => {

    const { endGame } = useRoundFunctions();

    function handleResumeGame() {
        setTopPage("default");
        setNavIsOpen(false);
    }

    function handleEndGame() {
        changePage("home");
        setTopPage("default");
        setNavIsOpen(false);
        endGame();
    }

    return (
        <div id="endGame" className="endGame">
            <h1 className="endGame__h1">
                END GAME?
            </h1>
            <div className="endGameButtons">
                <button className="endGameButtons__btn" onClick={()=>handleResumeGame()}>
                    <i className="endGameButtons__btn__i fas fa-undo-alt" />
                    <p className="endGameButtons__btn__p">
                        RESUME
                    </p>
                </button>
                <button className="endGameButtons__btn" onClick={()=>handleEndGame()}>
                    <i className="endGameButtons__btn__i bi bi-box-arrow-right" />
                    <p className="endGameButtons__btn__p">
                        END GAME
                    </p>
                </button>
            </div>
        </div>
    )
}

export default EndGame;
