import React, { useEffect, useState } from 'react'
import GameCard from './GameCard';

import { useRound, useRoundFunctions } from "../../context/RoundContext";

const GameBall = ({ stage }) => {

    const { round } = useRound();
    const { getBall, getResult } = useRoundFunctions();
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (!round.ball) setClicked(false);
    })

    function handleCardClick() {
        if (!clicked) getResult();
        setClicked(true);
    }

    let readyToGetCard = round.ball
        ? (
            <div className="gameBall__card">
                <GameCard
                    key="gameball"
                    card={round.ball}
                    handleCardClick={handleCardClick}
                    value="ball"
                />
            </div>
        )
        : (
            <div className="gameBall__card">
                <button className="gameBall__card__btn" onClick={()=>getBall()}>
                    <i className="gameBall__card__btn__i fas fa-hand-point-up" />
                    <p className="gameBall__card__btn__p">
                        GET
                    </p>
                </button>
            </div>
        )

    let display = {
        woodworks: (
            <div className="gameBall__card">
                <p className="gameBall__card__p">
                    You can get ball after placing bet.
                </p>
            </div>
        ),
        bet: (
            <div className="gameBall__card">
                <p className="gameBall__card__p">
                    You can get ball after placing bet.
                </p>
            </div>
        ),
        ball: readyToGetCard,
        result: (
            <div className="gameBall__card">
                <GameCard
                    key="gameball"
                    card={round.ball}
                    handleCardClick={handleCardClick}
                    value="ball"
                />
            </div>
        )
    }
    
    return (
        <div id="gameBall" className="gameBall">
            <p className="gameBall__p">
                BALL
            </p>
            { display[stage] }
        </div>
    )
}

export default GameBall;