// Dictates game flow.
function gameFlow() {
    let turn = 0;
    // Game board represents the nine squares available in Tic-Tac-Toe ordered
    // from bottom left to upper-right.
    const GameBoard = (() => {
        const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return { board };
    })();

    // Initializes two players and their chosen squares.
    const players = {
        one: "Player One",
        p1Squares: [],
        two: "Player Two",
        p2Squares: [],
    };

    // Variables for players objects and board.
    const p1 = players.one;
    const p2 = players.two;
    let p1S = players.p1Squares;
    let p2S = players.p2Squares;
    let board = GameBoard.board;
    let winBreak = false;
    console.log(winBreak);
    
    // Loop to assign turns to players based on whether the turn is even or 
    // odd.
    function turnController(winBreak) {
        let player;
        // Checks to make sure turns don't exceed 9 turns.
        for (turn = 0; turn <= 8; turn++) {
            // Checks for win state in players' chosen squares array.
            winCheck(players);
            console.log(p1S);
            // Breaks if a player successfully chooses three squares in a row.
            if (winBreak === true) {
                console.log(winBreak);
                break;
            } else {
                // Assigns Player 1's turn as long as turn counter is an even 
                // number.
                if (turn == 0 || turn == 2 || turn == 4 || turn == 6 || 
                    turn == 8) {
                    player = players.one;
                    return { player };
                // Assigns Player 2's turn if turn counter is odd.
                } else if (turn == 1 || turn == 3 || turn == 5 || turn == 7 || 
                    turn == 9) {
                    player = players.two;
                    return { player };
                } else if ((turn >= 9) && (winBreak === false)) {
                    console.log("Oh no! It's a tie!");
                    console.log(winBreak);
                    break;
                }
            }
        }
    };

    // Assigns Player choices to their player object squares array.
    function playerChoice(players, choice) {
        if (winBreak === true) {
        } else {
            if (players === p1) {
                p1S.push(choice);
                console.log(`Player 1 Chose ${choice}`)
                console.log(`Player 1 Squares: ${p1S}`)
                turn++;
                turnController();
            } else {
                p2S.push(choice);
                console.log(`Player 2 Chose ${choice}`)
                console.log(`Player 2 Squares: ${p2S}`)
                turn++;
                turnController();
            }
        }
    };

    function winCheckwww(playerSquares, requiredValues) {
        return requiredValues.every(value => playerSquares.includes(value));
    }


    // Checks if player squares match a win state.
    function winCheck(players) {
        let p1Sort = p1S.sort();
        let p2Sort = p2S.sort();
        console.log(p1Sort.includes);
        console.log(p2Sort);

        if ((p1Sort.includes([1, 2, 3])) || (p1Sort.includes([4, 5, 6])) || 
        (p1Sort.includes([7, 8, 9])) || (p1Sort.includes([1, 4, 7])) || 
        (p1Sort.includes([2, 5, 8])) || (p1Sort.includes([3, 6, 9])) || 
        (p1Sort.includes([1, 5, 7])) || (p1Sort.includes([3, 5, 7]))) {
            winBreak = true;
            console.log(winBreak);
            console.log(p1S);
            console.log("Game Over! Player 1 Wins!");
        } else if ((p2Sort.includes([1 && 2 && 3])) || (p2Sort.includes([4 && 5 && 6])) || 
        (p2Sort.includes([7 && 8 && 9])) || (p2Sort.includes([1 && 4 && 7])) || 
        (p2Sort.includes([2 && 5 && 8])) || (p2Sort.includes([3 && 6 && 9])) || 
        (p2Sort.includes([1 && 5 && 7])) || (p2Sort.includes([3 && 5 && 7]))) {
            winBreak = true;
            console.log(winBreak);
            console.log(p2S);
            console.log("Game Over! Player 2 Wins!");
        } else if ((turn >= 9) && (winBreak === false)) {
            console.log("Game over! It's a tie...")
        }
    };

    turnController(winBreak);
    playerChoice(p1, 2);
    playerChoice(p2, 4);
    playerChoice(p1, 3);
    playerChoice(p2, 8);
    playerChoice(p1, 5);
    playerChoice(p2, 7);
    playerChoice(p1, 8);
    playerChoice(p2, 9);
    playerChoice(p1, 1);
};
gameFlow();


