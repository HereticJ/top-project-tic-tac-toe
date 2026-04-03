// Creates game board as 3x3 grid of buttons.
function GameBoard() {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let p1Turn = prompt(`Player 1 choose your square: ${board}`);
    let p2Turn = prompt(`Player 2 choose your square: ${board}`);
    let p1Squares = [];
    let p2Squares = [];
    let p1Score = [];
    let p2Score = [];
    gameFlow(board);

        function gameFlow(board) {
            for (i = 0; i < board.length; i++) {
                p1Turn;
                p1Squares += p1Turn;
                
                if (p1Turn.includes(123 || 456 || 789 || 147 || 258 || 369 || 
                159 || 357)) {
                    console.log("Player 1 Wins!");
                    p1Score++;
                    return;
                } else if (p2Turn.includes(123 || 456 || 789 || 147 || 258 || 
                369 || 159 || 357)) {
                    console.log("Player 2 wins!");
                    p2Score++;
                    return;
                } else {

                console.log(`${p1Squares}`);
                board.splice(`${p1Turn}`, 1);
                console.log(board);
                let p2Turn = prompt(`Player 2 choose your square: ${board}`);
                p2Squares += p2Turn;
                console.log(`${p2Squares}`);
                board.splice(`${p2Turn}`, 1);
                console.log(board);
            }
        }
        };
};
GameBoard();
    /*
    const turn1 = prompt("Enter choice for player 1: 0-8");
        console.log(`Player 1 chose ${turn1}.`);
        board.splice(`${turn1}`, 1);
        console.log(board);
        console.log(player1Squares);

    const turn2 = prompt("Enter choice for player 2: 0-8");
        console.log(`Player 2 chose ${turn2}.`);
        let player2Squares = board.splice(`${turn2}`, 1);
        board.splice(`${turn2}`, 1);
        console.log(board);
        console.log(player1Squares);
    
    const turn3 = prompt("Enter choice for player 1: 0-8");
        console.log(`Player 1 chose ${turn3}.`);
        player1Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn1}`, 1);
        console.log(board);

    const turn4 = prompt("Enter choice for player 2: 0-8");
        console.log(`Player 2 chose ${turn4}.`);
        player2Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn2}`, 1);
        console.log(board);

    const turn5 = prompt("Enter choice for player 1: 0-8");
        console.log(`Player 1 chose ${turn5}.`);
        player1Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn1}`, 1);
        console.log(board);

    const turn6 = prompt("Enter choice for player 2: 0-8");
        console.log(`Player 2 chose ${turn6}.`);
        player2Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn2}`, 1);
        console.log(board);

    const turn7 = prompt("Enter choice for player 1: 0-8");
        console.log(`Player 1 chose ${turn7}.`);
        player1Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn1}`, 1);
        console.log(board);

    const turn8 = prompt("Enter choice for player 2: 0-8");
        console.log(`Player 2 chose ${turn8}.`);
        player2Squares += board.splice(`${turn1}`, 1);
        board.splice(`${turn2}`, 1);
        console.log(board);
};
*/


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
