import React, {useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
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

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};  

export default App;
