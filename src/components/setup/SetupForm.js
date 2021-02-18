import React, { useRef } from 'react'

import { SETUP_GAME_FORM } from "../../data/setupData";
import SetupGrp from './SetupGrp';

import { useRoundFunctions } from "../../context/RoundContext";

export const SetupForm = ({ createGame, changePage }) => {

    const { setupRound } = useRoundFunctions();

    let formRef = useRef();

    let formItems = SETUP_GAME_FORM.map((item, i) => (
        <SetupGrp
            key={`setupgrp-${i}`}
            item={item}
        />
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const FORM = formRef.current;
        //createGame({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool });

        let data = {};
        SETUP_GAME_FORM.forEach(item => {
            data[item.name] = FORM[item.name].value;
        })
        
        createGame(data);
        changePage("game");
    }

    return (
        <form className="setupForm" ref={formRef} onSubmit={(event)=>handleSubmit(event)}>
            <h1 className="setupForm__h1">
                GAME SETUP
            </h1>
            { formItems }
            <button className="setupForm__btn">
                START GAME
            </button>
        </form>
    )
}

export default SetupForm;