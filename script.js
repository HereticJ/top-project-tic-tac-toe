// Game board represents the nine squares available in Tic-Tac-Toe ordered
// from top left to bottom right, from 1-9.
const GameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return { board };
})();


// Creates 9 squares and displays who's turn it is (Player 1 or 2).
const displayController = (() => {
    const display = document.querySelector("#display");
    const turnDisplay = document.createElement("h3");
    turnDisplay.setAttribute("id", "turnDisplay");
    turnDisplay.textContent = "Player 1 Choose a Square";
    display.appendChild(turnDisplay);

    const allButtons = document.querySelector("#buttonWrapper");
    let squares = [];

    for (let i = 0; i < 9; i++) {
        let square = document.createElement("button");
        let squaresDisplay = document.querySelectorAll("button");
        square.value = (i + 1);
        squares.push(square.value);
        allButtons.appendChild(square);
    };
})();

let buttons = document.querySelectorAll('button');
let winState = false;

function disableGame() {
    if (winState === true) {
        buttons.classList.add(`disabled`);
    }
};

// Initializes first turn and square variable to represent player's choice.
let turn = 1;
let playerTurn;
let square;

// Creates player and assigns them an array to store their chosen squares.
function createPlayer(num) {
    const newPlayer = "player" + num;

    let squares = [];
    const getSquares = () => squares;
    const giveSquare = (square) => { squares.push(square); };

    return { num, newPlayer, getSquares, giveSquare };
};

// Checks which player's turn it is and updates display.
function turnController() {
    const turnCheck = (turn % 2 === 0);
    function getTurn(turn) {
        playerTurn = turnCheck ? "Player 2" : "Player 1";
        turnDisplay.textContent = `${playerTurn} Choose a Square`;
        display.appendChild(turnDisplay);
        return playerTurn;
    };

    return playerTurn, getTurn(turn);
};


// Checks player squares against possible win scenarios and declares a winner,
// disabling buttons from being clicked. Written to accept winning choices in
// any order (i.e. 123 or 231) (NOT YET WORKING).
function winCheck(allButtons) {
    const p1S = player1.getSquares();
    const p2S = player2.getSquares();

        if ((p1S.includes(`1`) && p1S.includes(`2`) && p1S.includes(`3`)) || 
            (p1S.includes(`4`) && p1S.includes(`5`) && p1S.includes(`6`)) || 
            (p1S.includes(`7`) && p1S.includes(`8`) && p1S.includes(`9`)) || 
            (p1S.includes(`1`) && p1S.includes(`4`) && p1S.includes(`7`)) ||
            (p1S.includes(`2`) && p1S.includes(`5`) && p1S.includes(`8`)) ||
            (p1S.includes(`3`) && p1S.includes(`6`) && p1S.includes(`9`)) ||
            (p1S.includes(`1`) && p1S.includes(`5`) && p1S.includes(`9`)) ||
            (p1S.includes(`3`) && p1S.includes(`5`) && p1S.includes(`7`))) {
                winState = true;
                disableGame()
                turnDisplay.textContent = "Player 1 Wins!";
                display.appendChild(turnDisplay);
                return winState;
        } else if ((p2S.includes(`1`) && p2S.includes(`2`) && p2S.includes(`3`)) || 
            (p2S.includes(`4`) && p2S.includes(`5`) && p2S.includes(`6`)) || 
            (p2S.includes(`7`) && p2S.includes(`8`) && p2S.includes(`9`)) || 
            (p2S.includes(`1`) && p2S.includes(`4`) && p2S.includes(`7`)) ||
            (p2S.includes(`2`) && p2S.includes(`5`) && p2S.includes(`8`)) ||
            (p2S.includes(`3`) && p2S.includes(`6`) && p2S.includes(`9`)) ||
            (p2S.includes(`1`) && p2S.includes(`5`) && p2S.includes(`9`)) ||
            (p2S.includes(`3`) && p2S.includes(`5`) && p2S.includes(`7`))) {
                winState = true;
                disableGame()
                turnDisplay.textContent = "Player 2 Wins!";
                display.appendChild(turnDisplay);
                return winState;
        } else if (turn >= 9) {
            turnDisplay.textContent = "Game over! It's a tie..."
        };
};


// Adds chosen squares to player choice pool and disables clicked buttons and
// runs winCheck function (winCheck FUNCTION NOT WORKING).
buttonWrapper.addEventListener("click", choice);
    function choice(button, squares) {
        let clickedButton = button.target;
        let square = clickedButton.value;
            if (winState === true) {

            } else {
                if (playerTurn === "Player 1") {
                    player1.giveSquare(square);
                    player1.getSquares();
                    winCheck();
                } else if (playerTurn === "Player 2") {
                    player2.giveSquare(square);
                    player2.getSquares();
                    winCheck();
                }
            };
        clickedButton.classList.add(`disabled`);
        clickedButton.disabled = true;
    };

// Changes turns when a square is clicked.
buttonWrapper.addEventListener("click", turnChange)
    function turnChange() {
        if (winState === false) {
        turn++;
        turnController();
    } else {
        
        return;
    }
};

// Creates players and initializes first turn.
const player1 = createPlayer(1);
const player2 = createPlayer(2);
turnController();

// git message: "Display properly writes which player wins when win state is 
// reached, added function to disable buttons when win state is reached, but
//  isn't working yet."