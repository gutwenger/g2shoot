import React from 'react'

const ResultPlayerCard = ({ player }) => {
    return (
        <div className="resultPlayerCard">
            <p className="resultPlayerCard__player">
                { player.id }
            </p>
            <div className="resultPlayerCard__stats">
                <p className="resultPlayerCard__stats__p">
                    { player.win }
                </p>
                <p className="resultPlayerCard__stats__symbol">
                    :
                </p>
                <p className="resultPlayerCard__stats__p">
                    { player.loseSmall }
                </p>
                <p className="resultPlayerCard__stats__symbol">
                    :
                </p>
                <p className="resultPlayerCard__stats__p">
                    { player.loseBig }
                </p>
            </div>
            <p className="resultPlayerCard__balance">
                { player.balance }
            </p>
        </div>
    )
}

export default ResultPlayerCard;