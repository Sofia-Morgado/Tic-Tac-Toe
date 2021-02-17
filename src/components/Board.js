import React, {useState} from 'react'
import Square from "./Square";


const Board = () => {

    // Create an array with null values
    // setBoard is the function that will update the board
    const [board, setBoard] = useState(Array(9).fill(null));
    
    const [isXNext, setIsXNext] = useState(false);

    const handleSquareClick = indexClicked => {

        // Check if the board position is already filled, we exit
        if (board[indexClicked]){
            return;
        }

        // Change board status
        setBoard(previousState => {
            return previousState.map((square, index) => {
            
                if (index === indexClicked){
                    // sees acording to isXNext logic
                    return isXNext ? "X" : "O";
                }

                return square;
            });
        });

        //Change isXnextstate
        setIsXNext(prev => !prev);
    };


    const renderSquare = index => {
        return(
            <Square 
                value = {board[index]}
                onClick = {() => handleSquareClick(index)}
            />
        );
    }

    // Node {render} inside {} because is javascript
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            
        </div>
    )
}

export default Board
