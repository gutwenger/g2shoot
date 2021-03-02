import React, { useEffect, useState } from 'react'
import GameCard from './GameCard';

import { useLang } from "../../context/LangContext";
import { useRound, useRoundFunctions } from "../../context/RoundContext";


const GameWoodWorks = () => {

    const { texts } = useLang();
    const { round } = useRound();
    const { setRound, getWoodworks } = useRoundFunctions();
    const [clicked, setClicked] = useState(new Set);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setNewClicked();
    }, [round])

    function setNewClicked() {        
        if (round.woodworks.length === 0) {
            setClicked(new Set());
            setDisabled(false);
        }
    }

    function handleCardClick({ value }) {
        clicked.add(value);
        setClicked(clicked);

        if (clicked.size === 2 && !disabled) {
            setRound(prevState => ({
                ...prevState,
                stage: "bet"
            }))
            setDisabled(true);
        }
    }

    let display = round.woodworks.length > 0
        ? (
            <div className="gameWoodWorks__cards">
                <GameCard
                    key="woodwork-min"
                    card={round.woodworks[0]}
                    handleCardClick={handleCardClick}
                    value="min"
                />
                <GameCard
                    key="woodwork-max"
                    card={round.woodworks[1]}
                    handleCardClick={handleCardClick}
                    value="max"
                />
            </div>
        )
        : (
            <div className="gameWoodWorks__cards">
                <button className="gameWoodWorks__cards__btn" onClick={()=>getWoodworks()}>
                    <i className="gameWoodWorks__cards__btn__i fas fa-hand-point-up" />
                    <p className="gameWoodWorks__cards__btn__p">
                        { texts.game.gameWoodWorks.get }
                    </p>
                </button>
            </div>
        )

    return (
        <div id="gameWoodWorks" className="gameWoodWorks">
            <p className="gameWoodWorks__p">
                { texts.game.gameWoodWorks.title }
            </p>
            { display }
        </div>
    )
}

export default GameWoodWorks;