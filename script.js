// Function to dictate game flow, determine which player is playing on which
// turn, define the win state, and assign points to the winner.
function gameFlow() {
    // Game board represents the nine squares available in Tic-Tac-Toe from bottom
    // left to upper-right.
    const GameBoard = (() => {
        const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    let p1S = players.p1Squares;
    let p2S = players.p2Squares;

    let board = GameBoard.board;
        turnController();
        console.log(board);
        playerChoice(p1, 1);
        playerChoice(p2, 2);
        playerChoice(p1, 5);
        playerChoice(p2, 3);
        playerChoice(p1, 9);
        playerChoice(p2, 4);

    function turnController() {
        let player;
        for (let turn = 0; turn <= 8; turn++) {
            if ((turn == 0 || turn == 2 || turn == 4 || turn == 6 || 
            turn == 8)) {
                winCheck(players.p1S, players.p2S);
                player = players.one;
                console.log(`${player}'s turn`);
                return { player };
            } else if ((turn == 1 || turn == 3 || turn == 5 || turn == 7 || 
            turn == 9)) {
                winCheck(players.p1S, players.p2S);
                player = players.two;
                console.log(`${player}'s turn`);
                return { player };
            }
        }
    };

    function playerChoice(player, choice) {
        if (player === players.one) {
            p1S += choice
            console.log(`${player} Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
        } else {
            p2S += choice
            console.log(`${player} Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            }
    };

    function winCheck(p1S, p2S) {
        if (p1S == "123" || p1S == "213" || p1S ==  "321" || p1S == "231" || 
            p1S == "312" || p1S == "132" || p1S == "456" || p1S == "465" || 
            p1S == "654" || p1S == "645" || p1S == "564" || p1S == "546" || 
            p1S == "789" || p1S == "798" || p1S == "879" || p1S == "897" || 
            p1S == "987" || p1S == "978" || p1S == "147" || p1S == "174" || 
            p1S == "417" || p1S == "471" || p1S == "714" || p1S == "741" || 
            p1S == "285" || p1S == "258" || p1S == "369" || p1S == "396" || 
            p1S == "639" || p1S == "693" || p1S == "963" || p1S == "936" || 
            p1S == "159" || p1S == "519" || p1S == "591" || p1S == "951" || 
            p1S == "915" || p1S == "357" || p1S == "375" || p1S == "537" || 
            p1S == "573" || p1S == "753" || p1S == "735") {
            console.log("Player 1 Wins!")
            } else if (p2S == "123" || p2S == "213" || p2S == "321" || p2S == 
            "231" || p2S == "312" || p2S == "132" || p2S == "456" || p2S == 
            "465" || p2S == "654" || p2S == "645" || p2S == "564" || p2S == 
            "546" || p2S == "789" || p2S == "798" || p2S == "879" || p2S == 
            "897" || p2S == "987" || p2S == "978" || p2S == "147" || p2S == 
            "174" || p2S == "417" || p2S == "471" || p2S == "714" || p2S == 
            "741" || p2S == "285" || p2S == "258" || p2S == "369" || p2S == 
            "396" || p2S == "639" || p2S == "693" || p2S == "963" || p2S == 
            "936" || p2S == "159" || p2S == "519" || p2S == "591" || p2S == 
            "951" || p2S == "915" || p2S == "357" || p2S == "375" || p2S == 
            "537" || p2S == "573" || p2S == "753" || p2S == "735") {
            console.log("Player 2 Wins!");
        }
    }
};

gameFlow();


