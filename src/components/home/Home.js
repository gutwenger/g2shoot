import React from 'react'
import HomeBtn from './HomeBtn'

const Home = ({ changePage, setTopPage }) => {
    return (
        <div id="home" className="home">
            <HomeBtn
                key="homebtn-play"
                page="setup"
                icon="fas fa-chevron-right"
                title="PLAY NOW"
                changePage={changePage}
            />
            <HomeBtn
                key="homebtn-icon"
                page="howto"
                icon="fas fa-info"
                title="HOW TO PLAY"
                changePage={changePage}
                setTopPage={setTopPage}
            />
        </div>
    )
}

export default Home;