// Creates game board as 3x3 grid of buttons.
const createBoard = (() => {
    const board = document.querySelector("board");
    const boardObject = {
        boardArray: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
});


// Winning number combinations.
// Forwards.
// 012, 345, 678, 036, 147, 258, 246, 048
// Backwards.
// 210, 543, 876, 630, 741, 852, 642, 840

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