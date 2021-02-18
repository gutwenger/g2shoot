import React from 'react';

const ResultGameCard = ({ title, data }) => {

    let moneySymbol = title === "TOTAL POOL" && "$";

    return (
        <div className="resultGameCard">
            <p className="resultGameCard__title">
                { title }
            </p>
            <p className="resultGameCard__data">
                { moneySymbol }{ data }
            </p>
        </div>
    )
}

export default ResultGameCard;