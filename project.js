// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winning
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLM = 3;

// Global variables
const SYMBOL_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

const SYMBOL_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}


// 1. Despot some money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter deposit amount : ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};


// 2. Determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter teh number of lines to bet on (1-3) : ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
}


// 3. Collect a bet amount
const getBet = (balance, line) => {
    while (true) {
        const bet = prompt("Enter the bet per line : ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / line) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
}


// 4. Spin the slot machine
const spin = () => {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
}

spin();

let balance = deposit();
const numberOfLinesPlay = getNumberOfLines();
const bet = getBet(balance, numberOfLinesPlay);
