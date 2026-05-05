// Dictates game flow.
function gameFlow() {
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
    
    // Loop to assign turns to players based on whether the turn is even or 
    // odd.
    function turnController(winBreak) {
        let player;
        // Checks to make sure turns don't exceed 9 turns.
        for (let turn = 0; turn <= 8; turn++) {
            // Checks for win state in players' chosen squares array.
            winCheck(players);
            // Breaks if a player successfully chooses three squares in a row.
            if (winBreak === true) {
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
                }
            }
        }
    };
    // Assigns Player choices to their player object squares array.
    function playerChoice(players, choice) {
        if (players === p1) {
            p1S += choice;
            console.log(`Player 1 Chose ${choice}`)
            console.log(`Player 1 Squares: ${p1S}`)
        } else {
            p2S += choice;
            console.log(`Player 2 Chose ${choice}`)
            console.log(`Player 2 Squares: ${p2S}`)
            }
    };
    // Checks if player squares match a win state.
    function winCheck(players) {
        if (p1S == "123" || p1S == "213" || p1S == "321" || p1S == "231" || 
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
                winBreak = true;
                return console.log("Player 1 Wins!");
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
                winBreak = true;
                return console.log("Player 2 Wins!");
        }
    };

    turnController();
    playerChoice(p1, 1);
    turnController();
    playerChoice(p2, 2);
    turnController();
    playerChoice(p1, 5);
    turnController();
    playerChoice(p2, 3);
    turnController();
    playerChoice(p1, 9);
    turnController();
};
gameFlow();


