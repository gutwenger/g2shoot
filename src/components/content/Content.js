import React from 'react'

import Home from "../home/Home";
import Setup from "../setup/Setup";
import Game from "../game/Game";

const Content = ({ currentPage, changePage, setTopPage }) => {

    const PAGE = {
        home: (
            <Home 
                changePage={changePage}
                setTopPage={setTopPage}
            />
        ),
        setup: (
            <Setup 
                changePage={changePage}
            />
        ),
        game: (
            <Game 
                changePage={changePage}
                setTopPage={setTopPage}
            />
        )
    }

    return (
        <div id="content" className="content">
            { PAGE[currentPage] }
        </div>
    )
}

export default Content;