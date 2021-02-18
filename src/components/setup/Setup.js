import React from 'react'
import SetupForm from './SetupForm'

import { useGame, useGameFunctions } from "../../context/GameContext";
import { useRoundFunctions } from "../../context/RoundContext";

const Setup = ({ changePage }) => {

    const { setupGame } = useGameFunctions();
    const { setupInitialRound } = useRoundFunctions();

    function createGame({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool }) {
        setupInitialRound({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool });
    }

    return (
        <div id="setup" className="setup">
            <SetupForm
                key="setupform"
                createGame={createGame}
                changePage={changePage}
            />
        </div>
    )
}

export default Setup;