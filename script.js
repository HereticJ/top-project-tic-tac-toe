// Game board represents the nine squares available in Tic-Tac-Toe ordered
// from bottom left to upper-right.
const GameBoard = (() => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [ele1, ele2, ele3, ele4, ele5, ele6, ele7, ele8, ele9] = board;

    return { board };
})()

let tempBoard = GameBoard.board;
console.log(tempBoard);

const allButtons = document.querySelector("#buttonWrapper");
const display = document.querySelector("#display");
const turnDisplay = document.createElement("h3");
turnDisplay.setAttribute("id", "turnDisplay");
turnDisplay.textContent = "Player 1 Choose a Square";
display.appendChild(turnDisplay);

let square;
let turn = 1;
let playerTurn = "Player 1";

function createPlayer(num) {
    const newPlayer = "player" + num;

    let squares = [];
    const getSquares = () => squares;
    const giveSquare = () => { squares.push(square); };

    return { num, newPlayer, getSquares, giveSquare };
};

const player1 = createPlayer(1);
const player2 = createPlayer(2);

player1.getSquares();

GameBoard;
console.log(GameBoard);

function turnController() {
    const turnCheck = (turn % 2 === 0);
    function getTurn(turn) {
        playerTurn = turnCheck ? "Player 2" : "Player 1";
        console.log(playerTurn);
        turnDisplay.textContent = `${playerTurn} Choose a Square`;
        display.appendChild(turnDisplay);
        return playerTurn;
    };

    return playerTurn, getTurn(turn);

};

buttonWrapper.addEventListener("click", choice);
function choice(button) {
    let clickedButton = button.target;
    let square = clickedButton.value;
        if (playerTurn === "Player 1") {
            player1.giveSquare(square);
            player1.getSquares();
        }
    clickedButton.classList.add(`disabled`);
    clickedButton.disabled = true;
};

buttonWrapper.addEventListener("click", turnChange)
    function turnChange() {
        turn++;
        console.log(`Turn: ${turn}`);
        turnController();
};



const displayController = (() => {
    const boardSquares = document.querySelector("#board");

        for (let i = 0; i < 9; i++) {
            let squareButton = document.createElement("button");
            let squaresDisplay = document.querySelectorAll("button");
            squareButton.value = i;
            squareButton.id = (i);
            allButtons.appendChild(squareButton);
            globalSquares = squaresDisplay;
        };
})();

turnController();



// git message: "Toggling between players one and two now displays properly,"


/*
// Dictates game flow.
function gameFlow() {

    // Variables for player squares.
    let p1S = p1.squares;
    let p2S = p2.squares;
    // Takes GameBoard object and copies/initializes it for new game.
    let board = GameBoard.board;
    // Variable that breaks game loop when a win condition is met.
    let winBreak = false;
    let turn;
    const squaresObject = document.querySelector("#squaresGrid");

    function turnController(turn) {
        for (turn = 0; turn < 8;) {
            // Assigns Player 1 turn when turn number is even.
            if (turn == 0 || turn == 2 || 
            turn == 4 || turn == 6 || turn == 8) {
                player = p1;
                console.log(turn);
                return turn;
                return player;
            // Assigns Player 2 turn when turn number is odd.
            } else if (turn == 1 || turn == 3 || 
            turn == 5 || turn == 7 || turn == 9) {
                player = p2;
                console.log(turn);
                return turn;
                return player;
            }
        }
    }

    // Creates buttons to represent game board.
    function makeBoard(GameBoard, players, turnController) {
        const squares = document.querySelectorAll("square");
            for (let i = 0; i < board.length; i++) {
                var square = document.createElement("button");
                squaresObject.appendChild(square);
                square.value = i;
            };
            // Associates clicked squares with board numbers and assigns them to
            // players.
            square.addEventListener("click", chooseSquare);
                function chooseSquare() {
                    if (players == p1 && turn < 9) {
                        p1S.push(parseInt(square.value));
                        console.log(`Player One Squares ${p1S}`);
                        square.textContent = "X";
                        square.disabled;
                        return turn++;
                    } else if (players == p2 && turn < 9) {
                        p2S.push(parseInt(`${square.textContent}`));
                        console.log(`Player Two Squares ${p2S}`);
                        square.textContent = "X";
                        square.disabled;
                        return turn++;
                    }
                }
    }

        // Assigns turns to players. Even numbers for Player 1, odd for Player 2.
    function displayController(player, makeBoard) {
        const turnDisplay = document.querySelector("#playerTurn");
            // Assigns Player 1 turn when turn number is even.
            if (turn == 0 || turn == 2 || 
            turn == 4 || turn == 6 || turn == 8) {
                turnDisplay.textContent = "Player 1's Turn"
                
            // Assigns Player 2 turn when turn number is odd.
            } else if (turn == 1 || turn == 3 || 
            turn == 5 || turn == 7 || turn == 9) {
                turnDisplay.textContent = "Player 1's Turn"
                
            }
    }

    makeBoard()
    displayController()
};

        
    
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
            
// Calls gameFlow function to start the game.
gameFlow();
/*
            // Breaks loop if win condition is satisfied by either player.
            if (winBreak === true) {

            }


    // Assigns Player choices to their respective chosen squares array.
    function playerChoice(turn, player, choice) {
        if (turn == 0) {
            choice = 1;
            p1S.push(choice);
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
            return turn;
        } else if (turn == 1) {
            choice = 4;
            p2S.push(choice);
            console.log(`Player 2 Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            return turn;
        } else if (turn == 2) {
            choice = 2;
            p1S.push(choice);
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
            return turn;
        } else if (turn == 3) {
            choice = 5;
            p2S.push(choice);
            console.log(`Player 2 Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            return turn;
        } else if (turn == 4 && winBreak == false) {
            choice = 7;
            p1S.push(choice);
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
            return turn;
        } else if (turn == 5 && winBreak == false) {
            choice = 6;
            p2S.push(choice);
            console.log(`Player 2 Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            return turn;
        } else if (turn == 6 && winBreak == false) {
            choice = 7;
            p1S.push(choice);
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
            return turn;
        } else if (turn == 7 && winBreak == false) {
            choice = 8;
            p2S.push(choice);
            console.log(`Player 2 Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            return turn;
        } else if (turn == 8 && winBreak == false) {
            choice = 9;
            p1S.push(choice);
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
            return turn;
        } else if (turn == 9 && winBreak == false) {
            return console.log("Game over! It's a tie...")
        }
    };
    */
