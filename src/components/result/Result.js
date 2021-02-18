import React from 'react'
import ResultPlayers from './ResultPlayers'
import ResultGame from './ResultGame'
import ResultButton from './ResultButton'

const Result = ({ changePage, setTopPage, setNavIsOpen }) => {
    return (
        <div id="result" className="result">
            <ResultGame />
            <ResultPlayers />
            <ResultButton 
                changePage={changePage}
                setTopPage={setTopPage}
                setNavIsOpen={setNavIsOpen}
            />
        </div>
    )
}

export default Result;