// Game board represents the nine squares available in Tic-Tac-Toe from bottom
// left to upper-right.
const GameBoard = (() => {
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return board;
})();

// Function to dictate game flow, determine which player is playing on which
// turn, define the win state, and assign points to the winner.
function gameFlow() {

    // Creates player object and assigns them as player 1 or player 2.
    function createPlayer(num) {
        let player = "Player " + num;
        // Declares points as a private variable along with private functions to 
        // assign and return points for a given player.
        let points = 0;
        const getPoints = () => points;
        const givePoints = () => { points++ };
        return { num, player, getPoints, givePoints };
    };

    // Creates players.
    const p1 = createPlayer(1);
    const p2 = createPlayer(2);

    // Tracks player's chosen squares.
    let p1Squares = [];
    let p2Squares = [];

    // Creates game board.
    let currentBoard = GameBoard;

    // Initializes turn variable.
    let turn;
    let next = turn++;

    // Determine's which player's turn it is and advances to the next turn.
    function turnCounter(player) {
        const playerTurn = (turn % 2 !== 0);
        console.log(currentBoard);
        if (playerTurn === true) {
            return { player = one };
        } else {
            return { player = two };
        }
    };

    function round(turn) {
        // Displays available squares to players.
        console.log(GameBoard);

        // Prompts player to choose a square.
        console.log(`${player}: Choose an available square.`);
        player.square = "1";
        console.log(`Player ${player} chose ${player.square}`);
        currentBoard.splice(`${player}`.square, 1);
        p1Squares += currentBoard.slice(`${player}`.square);
        next;
};

function winTracker() {
    if (turn === 9) {
        console.log("It's a tie.");
        currentBoard = GameBoard;
    }
};

gameFlow();

/*
        if (p1Squares.includes((123 || 456 || 789 || 147 || 258 || 369 || 
            159 || 357), 0)) {
            console.log("Player 1 Wins!");
            p1Score++;
            return;
        } else if (p2Squares.includes((123 || 456 || 789 || 147 || 258 || 
            369 || 159 || 357), 0)) {
            console.log("Player 2 wins!");
            p2Score++;
            return;

*/


