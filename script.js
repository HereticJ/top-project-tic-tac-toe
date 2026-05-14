// Dictates game flow.
function gameFlow() {
    // Game board represents the nine squares available in Tic-Tac-Toe ordered
    // from bottom left to upper-right.
    const GameBoard = (() => {
        const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return { board };
    })();

    // Initializes two players and their chosen squares.
    let players = {
        one: "Player One",
        p1Squares: [],
        two: "Player Two",
        p2Squares: [],
    };

    // Initializes player variable for functions.
    let player;
    // Variables for players objects and board.
    const p1 = players.one;
    const p2 = players.two;
    // Variables for player squares.
    let p1S = players.p1Squares;
    let p2S = players.p2Squares;
    // Takes GameBoard object and copies/initializes it for new game.
    let board = GameBoard.board;
    // Variable that breaks game loop when a win condition is met.
    let winBreak = false;
    // Initializes first turn.
    let turn = 0;

    // Assigns turns to players. Even numbers for Player 1, odd for Player 2.
    function turnController(turn, player) {
        for (turn = 0; turn <= 9; turn++) {
            // Checks player squares against win conditions.
            winCheck(players);
            // Breaks loop if win condition is satisfied by either player.
            if (winBreak === true) {
                    break;
            // Assigns Player 1 turn when turn number is even.
            } else if (winBreak === false && turn == 0 || turn == 2 || 
                turn == 4 || turn == 6 || turn == 8) {
                player === p1;
                playerChoice(turn);
            // Assigns Player 2 turn when turn number is odd.
            } else if (winBreak === false && turn == 1 || turn == 3 || 
                turn == 5 || turn == 7 || turn == 9) {
                player === p2;
                playerChoice(turn);
            }
        }
    };

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
    }

    function gameUI(GameBoard, players, turnController) {
        const squares = document.querySelector("#squaresGrid");
        const turnPrint = document.querySelector("#playerTurn");
        const gameDisplay = document.querySelector("#gameUI");
        turnPrint.textContent  = `Player ${turn + 1}'s turn`;

            if (turn == 0 || turn == 2 || 
                turn == 4 || turn == 6 || turn == 8) {
            turnPrint.textContent = "Player 1's turn"
            } else {
                turnPrint.textContent = "Player 2's turn"
            };

            for (let i = 0; i <= 8; i++) {
            let square = document.createElement("button");
            square.textContent = i;
            squares.appendChild(square);

            square.addEventListener("click", chooseSquare)
            function chooseSquare() {
                if (turn == 0 || turn == 2 || 
                turn == 4 || turn == 6 || turn == 8) {
                    square.textContent = "X";
                    square.disabled;
                    return turn++;
                } else if (turn == 1 || turn == 3 || 
                turn == 5 || turn == 7 || turn == 9) {
                    square.textContent = "O"
                    square.disabled;
                    return turn++;
                }
            }
        }
    }
        // Calls turn function to start the game.
        turnController();
        gameUI();
};

// Calls gameFlow function to start the game.
gameFlow();




