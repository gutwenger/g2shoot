import React from 'react'
import NavMenuGrp from './NavMenuGrp';

import { useGame } from "../../context/GameContext";
import { useRound } from "../../context/RoundContext";

const NavMenu = ({ handleChangePage, handleShowResult, handleShowEndGame, handleTopPage }) => {

    const { game } = useGame();
    const { round } = useRound();

    let resume = game && (
        <NavMenuGrp
            key="navmenu-resume"
            title="RESUME"
            path="game"
            handleChangePage={handleChangePage}
        />
    )

    let endGame = game && (
        <li className="navMenu__ul__li" onClick={()=>handleTopPage("endgame")}>
            END GAME
        </li>
    )

    let play = !game && (
        <NavMenuGrp
            key="navmenu-setup"
            title="PLAY"
            path="setup"
            handleChangePage={handleChangePage}
        />
    )

    let result = round && (
        <li className="navMenu__ul__li" onClick={()=>handleTopPage("result")}>
            RESULT
        </li>
    )

    let home = !game && (
        <NavMenuGrp
            key="navmenu-home"
            title="HOME"
            path="home"
            handleChangePage={handleChangePage}
        />
    )

    return (
        <div className="navMenu">
            <ul className="navMenu__ul">
                { resume }
                { endGame }
                { play }
                { result }
                { home }
                <li className="navMenu__ul__li" onClick={()=>handleTopPage("howto")}>
                    HOW TO PLAY
                </li>
                <li className="navMenu__ul__li" onClick={()=>handleTopPage("contact")}>
                    CONTACT
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;