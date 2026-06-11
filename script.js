// Game board represents the nine squares available in Tic-Tac-Toe ordered
// from top left to bottom right.
const GameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return { board };
})();

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

let turn = 1;
let playerTurn;
let square;

function createPlayer(num) {
    const newPlayer = "player" + num;

    let squares = [];
    const getSquares = () => squares;
    const giveSquare = (square) => { squares.push(square); };

    return { num, newPlayer, getSquares, giveSquare };
};

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

buttonWrapper.addEventListener("click", choice);
    function choice(button, squares) {
        let clickedButton = button.target;
        console.log(clickedButton.value);
        let square = clickedButton.value;
            if (playerTurn === "Player 1") {
                player1.giveSquare(square);
                player1.getSquares();
                console.log(player1.getSquares());
            } else {
                player2.giveSquare(square);
                player2.getSquares();
                console.log(player2.getSquares());
            }
        clickedButton.classList.add(`disabled`);
        clickedButton.disabled = true;
    };

buttonWrapper.addEventListener("click", turnChange)
    function turnChange() {
        turn++;
        turnController();
};

const player1 = createPlayer(1);
const player2 = createPlayer(2);
turnController();


// git message: ""


/*
        
    
    // Checks if player squares match a win state.
    function winCheck(players) {
        if ((p1S.includes(1) && p1S.includes(2) && p1S.includes(3)) || 
        (p1S.includes(4) && p1S.includes(5) && p1S.includes(6)) || 
        (p1S.includes(7) && p1S.includes(8) && p1S.includes(9)) || 
        (p1S.includes(1) && p1S.includes(4) && p1S.includes(7)) ||
        (p1S.includes(2) && p1S.includes(5) && p1S.includes(8)) ||
        (p1S.includes(3) && p1S.includes(6) && p1S.includes(9)) ||
        (p1S.includes(1) && p1S.includes(5) && p1S.includes(9)) ||
        (p1S.includes(3) && p1S.includes(5) && p1S.includes(7))) {
            winBreak = true;
            console.log("Game Over! Player One Wins!");
        } else if ((p2S.includes(1) && p2S.includes(2) && p2S.includes(3)) || 
        (p2S.includes(4) && p2S.includes(5) && p2S.includes(6)) || 
        (p2S.includes(7) && p2S.includes(8) && p2S.includes(9)) || 
        (p2S.includes(1) && p2S.includes(4) && p2S.includes(7)) ||
        (p2S.includes(2) && p2S.includes(5) && p2S.includes(8)) ||
        (p2S.includes(3) && p2S.includes(6) && p2S.includes(9)) ||
        (p2S.includes(1) && p2S.includes(5) && p2S.includes(9)) ||
        (p2S.includes(3) && p2S.includes(5) && p2S.includes(7))) {
            winBreak = true;
            console.log("Game Over! Player Two Wins!");

        // If neither player's choices array match a win condition, ends game in a tie.
        } else if ((turn >= 9) && (winBreak === false)) {
            console.log("Game over! It's a tie...")
        }

*/
