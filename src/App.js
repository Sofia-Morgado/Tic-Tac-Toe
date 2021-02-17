import React, {useState} from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers";

import "./styles/root.scss";

const App = () => {

  // Create an array with null values
  // setBoard is the function that will update the board
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true},
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove]; 

  const winner = calculateWinner(current.board);

  const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = indexClicked => {
      // Check if the board position is already filled, we exit
      if (current.board[indexClicked] || winner){
          return;
      }

      // Change board status
      setHistory(previousState => {
          const last = previousState[previousState.length - 1];

          const newBoard = last.board.map((square, index) => {
              if (index === indexClicked){
                  // sees acording to isXNext logic
                  return last.isXNext ? "X" : "O";
              }

              return square;
          });

          return previousState.concat( { board: newBoard, isXNext: !last.isXNext});
      });

      setCurrentMove(previousState =>  previousState + 1);
  };


  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      < Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};  

export default App;
