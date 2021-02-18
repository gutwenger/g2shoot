import React, { useContext, useState } from "react";

const GameContext = React.createContext();
const GameFunctionsContext = React.createContext();

export function useGame() {
    return useContext(GameContext);
}

export function useGameFunctions() {
    return useContext(GameFunctionsContext);
}

export const GameProvider = ({ children }) => {

    const GAME = {
        numberOfPlayers: 0,
        numberOfCardsets: 0,
        initialPool: 0,
        pool: 0,
        cardReserve: [],
        usedCards: [],
        players: [],
        gameHistory: [],
        currentPlayerID: 0
    }

    const [game, setGame] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    // Generate Player
    function generatePlayer({ numberOfPlayers, initialBalance }) {
        // Take { numberOfPlayers } as argument, generate and return numberOfPlayers of players.

        const PLAYERS = [];

        for (let i = 0; i < numberOfPlayers; i++) {
            PLAYERS.push({
                id: i,
                balance: Number(initialBalance),
                isActive: true,
                win: 0,
                loseSmall: 0,
                loseBig: 0
            })
        }

        return PLAYERS
    }

    // Generate Cards
    function generateCards({ numberOfCardsets }) {
        // Take { numberOfCardsets } as argument, generate and return numberOfCardsets of card sets.

        const CARD_SCHEME = {
            spade: "♠",
            heart: "♥",
            club: "♣",
            diamond: "♦",
        }

        const CARD_NUMBER = {
            1: "A",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "J",
            12: "Q",
            13: "K",
        }

        const CARDS = [];

        let id = 0;

        for (let i = 0; i < numberOfCardsets; i++) {
            for (const SCHEME in CARD_SCHEME) {
                for (let j = 1; j < 14; j++) {
                    CARDS.push({
                        id,
                        number: CARD_NUMBER[j],
                        scheme: SCHEME,
                        symbol: CARD_SCHEME[SCHEME],
                        value: j
                    })
                    id++;
                }
            }
        }
        return CARDS;
    }

    // setupGame
    function setupGame({ numberOfPlayers, initialBalance, numberOfCardsets, initialPool }) {
        /*
        Generate players and cards
        Calculate initial pool
        Randomly pick starting player
        return default state
        */

        // Generate players
        let players = generatePlayer({ numberOfPlayers, initialBalance });

        // Generate cards
        let cardReserve = generateCards({ numberOfCardsets });

        // Calculate initial pool
        let pool = initialPool * numberOfPlayers;

        // Randomly pick starting player
        let currentPlayerID = Math.floor(Math.random() * numberOfPlayers);


        let newGame = {
            numberOfPlayers,
            numberOfCardsets,
            initialPool,
            players,
            cardReserve,
            pool,
            currentPlayerID,
            usedCards: [],
            gameHistory: [],
        }

        // Return initial state
        setGame(newGame);

        return newGame;
    }

    // Check Reserve
    function checkReserve() {
        /*
        Check total cards in the cardReserve
        return false if less than 3
        Check total money left on the pool
        return true if more than $0
        return false if 0 or less than 0
        */
       
        //Check total cards in the cardReserve, return false if less than 3
        let totalCardsRemaining = game.cardReserve.length;
        if (totalCardsRemaining < 3) return false;
        return true;
    }

    // Check Valid Players
    function checkValidPlayers() {
        return game.players.some(player => player.isActive);
    }

    // Check Valid Round
    function checkValidGame() {
        if (checkReserve() && checkValidPlayers()) return true;
        return false;
    }

    // Add cardsets to reserve
    function addCardsets({ numberOfCardsets }) {
        /*
        Generate cardsets: cardGenerator
        Add them to cardReserve
        */

        setGame(prevState => ({
            ...prevState,
            cardReserve: generateCards({ numberOfCardsets })
        }))
    }

    // Get woodwork cards
    function getCard() {
        /*
        Randomly pick 1 card from card reserves
        Call removeFromReserve()
        return 1 card
        */
        let remainingNumberOfCards = game.cardReserve.length;
        let randomIndex = Math.floor(Math.random() * remainingNumberOfCards);
        let card = game.cardReserve.splice(randomIndex, 1)[0];
        
        setGame(prevState => ({
            ...prevState,
            usedCards: [...prevState.usedCards, card]
        }))

        return card;
    }

    // Get 2 cards
    function get2Cards() {
        /*
        Randomly pick 2 cards from card reserves
        Call removeFromReserve()
        sort cards
        return 2 sorted cards in Array format
        */
        let cardReserve = game.cardReserve;
        let remainingNumberOfCards = cardReserve.length;
        let card1 = cardReserve.splice(Math.floor(Math.random() * remainingNumberOfCards), 1)[0];
        let card2 = cardReserve.splice(Math.floor(Math.random() * remainingNumberOfCards - 1), 1)[0];

        setGame(prevState => ({
            ...prevState,
            usedCards: [...prevState.usedCards, card1, card2]
        }))

        return [card1, card2].sort((a, b) => a.value - b.value);
    }

    // Update player
    function updatePlayer({ player }) {
        /*
        Update player
        */

        let playerIndex = game.players.findIndex(item => item.id === player.id);
        let newPlayers = game.players.slice();
        newPlayers[playerIndex] = player;
        setGame(prevState => ({
            ...prevState,
            players: newPlayers,
        }))
    }

    // Update pool
    function updatePool({ pool }) {
        /*
        Update player
        */

        setGame(prevState => ({
            ...prevState,
            pool
        }))
    }

    // Update state
    function updateGame({ round }) {
        /*
        Add round to game history
        Update State
        */
        setGame(prevState => ({
            ...prevState,
            gameHistory: [...prevState.gameHistory, round],
        }))
    }
    
    // Game Over
    function gameOver() {
        setGame(null)
        setIsGameOver(false);
    }

    return(
        <GameContext.Provider value={{ game, isGameOver }}>
            <GameFunctionsContext.Provider value={{
                setupGame, setGame, getCard, get2Cards, gameOver, updatePlayer, updatePool, updateGame, checkValidGame
            }}>
                { children }
            </GameFunctionsContext.Provider>
        </GameContext.Provider>
    )
}