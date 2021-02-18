import React, {useState } from 'react'

export const GameCard = ({ card, handleCardClick, value }) => {
    
    const [cardClicked, setCardClicked] = useState(false);

    const CARD_SCHEME = {
        spade: "bi bi-suit-spade-fill",
        heart: "bi bi-suit-heart-fill",
        club: "bi bi-suit-club-fill",
        diamond: "bi bi-suit-diamond-fill"
    }

    let gameCardDivClass = (card && (card.scheme === "heart" || card.scheme === "diamond")) && "gameCard__div--pink";

    let display = cardClicked
        ? (
            <div className={`gameCard__div ${gameCardDivClass}`}>
                <div className="gameCard__div__div">
                    <p className="gameCard__div__div__p">{ card.number }</p>
                </div>
                <i className={`gameCard__div__i ${CARD_SCHEME[card.scheme]}`}></i>
            </div>
        )
        : (
            <i className="gameCard__i fas fa-question"></i>
        )

    function handleClick({ value }) {
        handleCardClick({ value });
        setCardClicked(true);
    }

    return (
        <div 
            className="gameCard"
            onClick={()=>handleClick({ value })}
        >
            { display }
        </div>
    )
}

export default GameCard;
