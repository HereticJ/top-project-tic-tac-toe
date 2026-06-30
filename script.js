const buttonHeader = document.querySelector("#buttonHeader");
const startButton = document.querySelector("#start");
const namePrompt = document.querySelector("#namePrompt");
buttonHeader.removeChild(startButton);
let name1Submitted = false;
let name2Submitted = false;

function startEnable() {
    if ((name1Submitted == true) && (name2Submitted == true)) {
        buttonHeader.appendChild(startButton);
        namePrompt.textContent = "Ready?";
    } else {
        return;
    }
};

const restartButton = document.createElement("button");
restartButton.setAttribute("id", "restartButton");
restartButton.textContent = "Restart";

const p1NameBox = document.querySelector("#p1NameBox");
const p1NameEntry = document.querySelector("#p1NameEntry");
const p1NameSubmit = document.querySelector("#p1NameSubmit");
const p1NameDisplay = document.querySelector("#p1NameDisplay");

const p2NameBox = document.querySelector("#p2NameBox");
const p2NameEntry = document.querySelector("#p2NameEntry");
const p2NameSubmit = document.querySelector("#p2NameSubmit");
const p2NameDisplay = document.querySelector("#p2NameDisplay");

p1NameSubmit.addEventListener("click", addP1Name);
    function addP1Name() {
        p1NameDisplay.textContent = `${p1NameEntry.value}`;
        name1Submitted = true;
        startEnable();
        p1NameBox.removeChild(p1NameEntry);
        p1NameBox.removeChild(p1NameSubmit);
    };

p2NameSubmit.addEventListener("click", addP2Name);
    function addP2Name() {
        p2NameDisplay.textContent = `${p2NameEntry.value}`;
        name2Submitted = true;
        startEnable();
        p2NameBox.removeChild(p2NameEntry);
        p2NameBox.removeChild(p2NameSubmit);
    };

startButton.addEventListener("click", startGame);
    function startGame() {
        display.removeChild(namePrompt);
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
        turnDisplay.textContent = `${p1NameEntry.value} Choose a Square`;
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

    restartButton.addEventListener("click", restart);
        function restart() {
            location.reload();
        };

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

        return { num, newPlayer, getSquares, giveSquare };
    };

    // Checks which player's turn it is and updates display.
    function turnController() {
        const turnCheck = (turn % 2 === 0);
        function getTurn(turn) {
            playerTurn = turnCheck ? `${p2NameDisplay.textContent}` : 
            `${p1NameDisplay.textContent}`;
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
                    turnDisplay.textContent = `${p1NameDisplay.textContent} Wins!`;
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
                    turnDisplay.textContent = `${p2NameDisplay.textContent} Wins!`;
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
                if (playerTurn === `${p1NameDisplay.textContent}`) {
                    clickedButton.append(circleSymbol);
                    player1.giveSquare(squareChosen);
                    player1.getSquares();
                    winCheck();
                } else if (playerTurn === `${p2NameDisplay.textContent}`) {
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

// git message: "Alignment fixed, everything appears to be working!"