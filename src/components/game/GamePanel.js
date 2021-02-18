import React from 'react'
import GamePanelControl from './GamePanelControl'
import GamePanelInfo from './GamePanelInfo'

const GamePanel = ({ changePage, setTopPage }) => {
    return (
        <div id="gamePanel" className="gamePanel">
            <GamePanelInfo
                key="gamepanelinfo"
            />
            <GamePanelControl
                key="gamepanelControl"
                changePage={changePage}
                setTopPage={setTopPage}
            />
        </div>
    )
}

export default GamePanel;