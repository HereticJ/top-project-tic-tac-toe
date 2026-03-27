
/*
1) Your main goal here is to have as little global code as possible. 
Try tucking as much as you can inside factories. 
If you only need a single instance of something (e.g. the gameboard, 
the displayController etc.) then wrap the factory inside an IIFE 
(module pattern) so it cannot be reused to create additional instances.

2) In this project, think carefully about where each bit of logic should reside. 
Each little piece of functionality should be able to fit in the game, 
player or gameboard objects. Take care to put them in “logical” places. 
Spending a little time brainstorming here can make your life much easier later!

*/

// Creates game board as 3x3 grid of buttons.
const createBoard = (() => {
    const board = document.querySelector("gameBoard");
    const tile = document.createElement("button");
    const boardObject = {
        boardArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    console.log(boardObject.boardArray);
    const makeBoard = ((board) => {
        for (i = 0; i <= boardObject.boardArray.length; i++) {
            board.appendChild(tile);
        };
        return makeBoard
    })
    
})();

// Stores player 1 data.
const player1 = {
    name: "",
    score: 0
};

// Stores player 2 data.
const player2 = {
    name: "",
    score: 0
};

// Controls game flow.
const gameFlow = {
    player1Score: 0,
    player2Score: 0,
    
};