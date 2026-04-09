// Creates game board as 3x3 grid of buttons.
function GameBoard = (() => {
    let board;

    const boardSquares = (1, 2, 3, 4, 5, 6, 7, 8, 9) => {
        board = [boardSquares];
        return board;
    };


};
/*
function createPlayer(num) {
    const playerOne = "Player" + " num";
    return { Player, num };

};
    
    function gameFlow() {
        let p1Squares = [];
        let p2Squares = [];
        let p1Wins = [];
        let p2Wins = [];
        let ties = [];
        
            for (i = 1; i < 9; i++) {
                let turnCount = `${i}`;
                    if (isOdd(turnCount) !== 0) {
                        GameBoard.squares.splice(4, 1);
                        GameBoard.p1Squares += 5;
                        GameBoard.board += 5;
                        console.log("Player 1 chooses 5.")
                        console.log(GameBoard.squares);
                    } else if (isOdd(turnCount) == 0) {
                        GameBoard.squares.splice(0, 1);
                        GameBoard.p2Squares += 1;
                        GameBoard.board += 1;
                        console.log("Player 2 chooses 1.")
                        console.log(GameBoard.squares);
};



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
        } else {
            p1Turn1;
            p1Squares += (`${p1Turn}` + ", ");
            board.splice(`${p1Turn}`, 1);
            console.log(`${p1Squares}`);
            p2Turn1;
            p2Squares += p2Turn1;
            board.splice(`${p2Turn}`, 1);
            console.log(`${p2Squares}`);
            console.log(board);


        };
    };
};
gameFlow();
*/
GameBoard();
