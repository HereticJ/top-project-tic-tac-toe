const buttonHeader = document.querySelector("#buttonHeader");
const startButton = document.querySelector("#start");
const restartButton = document.createElement("button");
restartButton.setAttribute("id", "restartButton");
restartButton.textContent = "Restart";

const p1NameEntry = document.querySelector("#p1NameEntry");
p1NameEntry.defaultValue = "Player 1";
console.log(p1NameEntry.defaultValue);

const p2NameEntry = document.querySelector("#p2NameEntry");
p2NameEntry.defaultValue = "Player 2";


let p1Name = "Player 1";
let p2Name = "Player 2";
const p1NameSubmit = document.querySelector("#p1NameSubmit");
const p2NameSubmit = document.querySelector("#p2NameSubmit");

p1NameSubmit.addEventListener("click", addName);
    function addName() {
        console.log(p1Name);

    };

p2NameSubmit.addEventListener("click", addName);
    function addName() {
        const p2Name = p2NameEntry.value;

        return { p2Name };
    };


startButton.addEventListener("click", startGame);
    function startGame() {
        buttonHeader.removeChild(startButton);
        buttonHeader.appendChild(restartButton);
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

        const gameButtons = document.querySelector("#buttonWrapper");
        let squareValues = [];

        for (let i = 0; i < 9; i++) {
            let square = document.createElement("button");
            square.classList.add("squareButtons");
            let squaresDisplay = document.querySelectorAll(".squareButtons");
            square.value = (i + 1);
            squareValues.push(square.value);
            gameButtons.appendChild(square);
        };
    })();

    const gameButtons = document.querySelector("#buttonWrapper");
    let winState = false;

    // Initializes first turn and square variable to represent player's choice.
    let turn = 1;
    let playerTurn;
    let square;

    // Creates player and assigns them an array to store their chosen squares.
    function createPlayer(num) {
        const newPlayer = "player" + num;
        let name;
        let squares = [];
        const getSquares = () => squares;
        const giveSquare = (square) => { squares.push(square); };

        if (num === 1) {
            let name = p1Name;
        } else if (num === 2) {
            let name = p2Name;
        }

        return { num, newPlayer, getSquares, giveSquare, name };
    };

    // Checks which player's turn it is and updates display.
    function turnController() {
        const turnCheck = (turn % 2 === 0);
        function getTurn(turn) {
            playerTurn = turnCheck ? "Player 2" : "Player 1";
            turnDisplay.textContent = `${playerTurn} Choose a Square`;
            display.appendChild(turnDisplay);
            return playerTurn;
            }
        return playerTurn, getTurn(turn);
    };

    // Checks player squares against possible win scenarios and declares a winner,
    // disabling buttons from being clicked. Written to accept winning choices in
    // any order (i.e. 123 or 231).
    function winCheck(gameButtons) {
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
                    turnDisplay.textContent = `${p1name} Wins!`;
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
                    turnDisplay.textContent = "Player 2 Wins!";
                    display.appendChild(turnDisplay);
                    return winState;
            } else if ((winState === false) && (turn >= 8)) {
                turnDisplay.textContent = "Game over! It's a tie...";
            }
    };

    // Adds chosen squares to player choice pool and disables clicked buttons and
    // runs winCheck function.
    buttonWrapper.addEventListener("click", choice);
        function choice(square) {
            let clickedButton = square.target;
            let squareChosen = clickedButton.value;
            const circleSymbol = document.createTextNode("O");
            const crossSymbol = document.createTextNode("X");
                if (playerTurn === "Player 1") {
                    clickedButton.append(circleSymbol);
                    player1.giveSquare(squareChosen);
                    player1.getSquares();
                    winCheck();
                } else if (playerTurn === "Player 2") {
                    clickedButton.append(crossSymbol);
                    player2.giveSquare(squareChosen);
                    player2.getSquares();
                    winCheck();
                };
            clickedButton.classList.add(`disabled`);
            clickedButton.disabled = true;
        };

    // Changes turns when a square is clicked.
    buttonWrapper.addEventListener("click", turnChange)
        function turnChange() {
            if (winState === false && turn >= 9) {
                for (button of gameButtons.childNodes) {
                    button.classList.add(`disabled`);
                    button.disabled = true;
                };
            } else if (winState === false) {
                turn++;
                turnController();
            } else if (winState === true) {
                for (button of gameButtons.childNodes) {
                    button.classList.add(`disabled`);
                    button.disabled = true;
                }
            }
        };

    // Creates players and initializes first turn.
    const player1 = createPlayer(1);
    const player2 = createPlayer(2);
    turnController();

};

// git message: "Fixed buttons appearing below CSS grid area, re-aligned player name entry boxes."