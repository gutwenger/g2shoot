import React from 'react'
import HomeBtn from './HomeBtn';

import { useLang } from "../../context/LangContext";

const Home = ({ changePage, setTopPage }) => {

    const { texts } = useLang();

    return (
        <div id="home" className="home">
            <HomeBtn
                key="homebtn-play"
                page="setup"
                icon="fas fa-chevron-right"
                title={texts && texts.home.homeBtns.playNow}
                changePage={changePage}
            />
            <HomeBtn
                key="homebtn-icon"
                page="howto"
                icon="fas fa-info"
                title={texts && texts.home.homeBtns.howToPlay}
                changePage={changePage}
                setTopPage={setTopPage}
            />
        </div>
    )
}

export default Home;