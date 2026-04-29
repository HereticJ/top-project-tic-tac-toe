// Function to dictate game flow, determine which player is playing on which
// turn, define the win state, and assign points to the winner.
function gameFlow() {
    // Game board represents the nine squares available in Tic-Tac-Toe from bottom
    // left to upper-right.
    const GameBoard = (() => {
        const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        return { board };
    })();

    // Players object, initializes two players and their chosen squares
    const players = {
        one: "Player One",
        p1Squares: [],
        two: "Player Two",
        p2Squares: [],
    };

    const p1 = players.one;
    const p2 = players.two;

    let board = GameBoard.board;
        turnController();
        console.log(board);
        playerChoice(p1, 0);
        console.log(players.p1Squares);
        playerChoice(p2, 1);
        playerChoice(p1, 4);
        playerChoice(p2, 2);
        playerChoice(p1, 8);
        playerChoice(p2, 3);

    function turnController() {
        let player;
        for (let turn = 0; turn <= 8; turn++) {
            if ((turn == 0 || turn == 2 || turn == 4 || turn == 6 || 
            turn == 8)) {
                player = players.one;
                console.log(`${player}'s turn`);
                return { player };
            } else if ((turn == 1 || turn == 3 || turn == 5 || turn == 7 || 
            turn == 9)) {
                player = players.two;
                console.log(`${player}'s turn`);
                return { player };
            }
        }
    };

    function playerChoice(player, choice) {
        winCheck(players.p1Squares, players.p2Squares);
        console.log(`Squares Available: ${board}`)
        if (player === players.one) {
            players.p1Squares += board.slice(`${choice}`, 1)
            board.splice(`${choice}`)
            console.log(`${player} Chose ${choice}`)
        } else {
            players.p2Squares += board.slice(`${choice}`, 1)
            board.splice(`${choice}`)
            console.log(`${player} Chose ${choice}`)
        }
    };

    function winCheck(p1Squares, p2Squares) {
        if (p1Squares.includes("012" || "345" || "678" || "036" || "147" || 
            "258" || "048" || "246")) {
            console.log("Player 1 Wins!")
        } else if (p2Squares.includes("012" || "345" || "678" || "036" || "147"
             || "258" || "048" || "246")) {
            console.log("Player 2 Wins!");
        }
    };
};

gameFlow();


