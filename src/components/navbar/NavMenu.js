import React from 'react'
import NavMenuGrp from './NavMenuGrp';

import { useLang } from "../../context/LangContext";
import { useGame } from "../../context/GameContext";
import { useRound } from "../../context/RoundContext";

const NavMenu = ({ handleChangePage, handleShowResult, handleShowEndGame, handleTopPage }) => {

    const { texts, handleChangeLanguage } = useLang();
    const { game } = useGame();
    const { round } = useRound();

    let resume = game && (
        <NavMenuGrp
            key="navmenu-resume"
            title={ texts.navbar.resume }
            path="game"
            handleChangePage={handleChangePage}
        />
    )

    let endGame = game && (
        <li className="navMenu__ul__li" onClick={()=>handleTopPage("endgame")}>
            { texts.navbar.endGame }
        </li>
    )

    let play = !game && (
        <NavMenuGrp
            key="navmenu-setup"
            title={ texts.navbar.play }
            path="setup"
            handleChangePage={handleChangePage}
        />
    )

    let result = round && (
        <li className="navMenu__ul__li" onClick={()=>handleTopPage("result")}>
            { texts.navbar.result }
        </li>
    )

    let home = !game && (
        <NavMenuGrp
            key="navmenu-home"
            title={ texts.navbar.home }
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
                    { texts.navbar.howToPlay }
                </li>
                <li className="navMenu__ul__li" onClick={()=>handleChangeLanguage({ lang: texts.language })}>
                    { texts.navbar.language }
                </li>
            </ul>
        </div>
    )
}

export default NavMenu;