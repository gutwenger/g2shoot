import React, { useRef } from 'react'

import { SETUP_GAME_FORM } from "../../data/setupData";
import SetupGrp from './SetupGrp';

import { useLang } from "../../context/LangContext";
import { useRoundFunctions } from "../../context/RoundContext";

export const SetupForm = ({ createGame, changePage }) => {

    const { setupRound } = useRoundFunctions();
    const { texts } = useLang();

    let formRef = useRef();

    let formItems = SETUP_GAME_FORM.map((item, i) => (
        <SetupGrp
            key={`setupgrp-${i}`}
            label={ texts.setup[item.name] }
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
                { texts.setup.gameSetup }
            </h1>
            { formItems }
            <button className="setupForm__btn">
                { texts.setup.startGame }
            </button>
        </form>
    )
}

export default SetupForm;