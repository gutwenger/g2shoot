export const SETUP_GAME_FORM = [
    {
        label: "NUMBER OF PLAYERS",
        name: "numberOfPlayers",
        min: 2,
        max: 15,
        defaultValue: 2,
    },
    {
        label: "NUMBER OF CARDSETS",
        name: "numberOfCardsets",
        min: 1,
        max: 100000,
        defaultValue: 1,
    },
    {
        label: "INITIAL BALACE",
        name: "initialBalance",
        min: 10,
        max: 1000000,
        defaultValue: 10,
    },
    {
        label: "INITIAL POOL",
        name: "initialPool",
        min: 1,
        max: 1000000,
        defaultValue: 1,
    }
]