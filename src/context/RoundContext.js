import React, { useContext, useState } from "react";

import { useGame, useGameFunctions } from "./GameContext";

const RoundContext = React.createContext();
const RoundFunctionsContext = React.createContext();

export function useRound() {
    return useContext(RoundContext);
}

export function useRoundFunctions() {
    return useContext(RoundFunctionsContext);
}

export const RoundProvider = ({ children }) => {

    const { game } = useGame();
    const { setGame, setupGame, getCard, get2Cards, gameOver, updatePlayer, updatePool, checkValidGame } = useGameFunctions();
    const [round, setRound] = useState(()=>setupRound());
    const [nextRound, setNextRound] = useState(false);

    // Initial Round
    function setupInitialRound({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool }) {

        let newGame = setupGame({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool })

        // Check whose turn it is
        let player = checkTurn({ newGame });

        // Return an empty round object
        setRound({
            stage: "woodworks",
            player: player,
            woodworks: [],
            bet: 0,
            ball: null,
            result: "",
        })

        setNextRound(true);
    }

    // Setup Round
    function setupRound() {

        // If game hasn't start, set round to null
        if (!game) return null;
        
        // Check whose turn it is
        let player = checkTurn({});

        // Return an empty round object
        setRound({
            stage: "woodworks",
            player: player,
            woodworks: [],
            bet: 0,
            ball: null,
            result: "",
        })

        setNextRound(true);
    }

    // Check turn
    function checkTurn({ newGame }) {
        /*
        Return which player is playing the game
        */

        let source = !newGame ? game : newGame;

        let players = source.players;
        let nextPlayerID = source.currentPlayerID;
        let nextPlayerFound = false;
        let counter = 0;
        
        while (!nextPlayerFound) {
            nextPlayerID += 1;
            counter += 1;
            
            if (nextPlayerID === players.length) nextPlayerID -= players.length;
            
            if (players[nextPlayerID].isActive) nextPlayerFound = true;
            if (counter === players.length + 1) return false;
        }
        
        // Update game's currentPlayerID
        setGame(prevState => ({
            ...prevState,
            currentPlayerID: nextPlayerID
        }))

        return players[nextPlayerID];
    }

    // Get woodworks
    function getWoodworks() {
        /*
        Get woodworks cards to kick start the round
        */

        // Get 2 cards from reserve
        let woodworks = get2Cards();

        // Store cards to round's woodworks and update round stage to let player place bet
        setRound(prevRound => ({
            ...prevRound,
            woodworks
        }))
    }

    // Place bet
    function placeBet({ bet }) {
        /*
        After player placed bet, set round stage to ball to let player get ball
        */

        setRound(prevRound => ({
            ...prevRound,
            stage: "ball",
            bet
        }))
    }

    // Get ball
    function getBall() {
        /*
        User to get the ball
        */

        // Get card from reserve
        let ball = getCard();
        // Store cards to round's woodworks and update round stage to let player place bet
        setRound(prevRound => ({
            ...prevRound,
            ball
        }))
    }

    // Get result
    function getResult() {
        /*
        Get the result of the round
        */

        let player = round.player;
        let minVal = round.woodworks[0].value;
        let maxVal = round.woodworks[1].value;
        let CardVal = round.ball.value;
        let pool = Number(game.pool);
        let playerBalance = Number(player.balance);
        let bet = Number(round.bet);
        let prize = 0;

        let result = CardVal > minVal && CardVal < maxVal
                        ? "win"
                        : CardVal === minVal || CardVal === maxVal
                            ? "loseBig"
                            : "loseSmall"

        /*
        Check the value of the ball
        return "win", "loseSmall" or "loseBig"
        */

        // Adjust player's balance
        switch (result) {
            case "win":
                playerBalance += bet;
                pool -= bet;
                prize = bet;
                break;
            case "loseSmall":
                playerBalance -= bet;
                pool += bet;
                prize -= bet;
                break;
            case "loseBig":
                playerBalance -= (bet * 2);
                pool += (bet * 2);
                prize -= (bet * 2);
                break;
            default:
                break;
        }

        
        // Update player's balance
        player.balance = playerBalance;

        // Check if player is still active
        player.isActive = playerBalance > 0;

        // Update player's stat
        player[result]++;

        // Update player
        updatePlayer({ player });

        // Update pool
        updatePool({ pool })
        
        // Check pool
        let hasNextRound = checkValidGame() && pool > 0;
        
        let roundResult = {
            result, prize
        };

        setRound(prevState => ({
            ...prevState,
            stage: "result",
            result: roundResult
        }))

        // Push previous round to game history
        setGame(prevGame => ({
            ...prevGame,
            history: [...prevGame.gameHistory, roundResult]
        }))

        setNextRound(hasNextRound);

        return roundResult;

    }

    function endRound() {
        /*
        reset round
        */

        // reset round
        setupRound();
    }

    function endGame() {
        /*
        see final result
        */

        // reset round
        setRound(null);
        setNextRound(false);

        // set game over
        gameOver();
    }


    return(
        <RoundContext.Provider value={{ round, nextRound }}>
            <RoundFunctionsContext.Provider value={{
                setRound, setupRound, setupInitialRound,
                getWoodworks, placeBet, getBall, getResult, endRound, endGame
            }}>
                { children }
            </RoundFunctionsContext.Provider>
        </RoundContext.Provider>
    )
}