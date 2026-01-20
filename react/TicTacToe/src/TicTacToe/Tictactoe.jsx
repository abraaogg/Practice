import { useState } from "react";
import "./Tictactoe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

export const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [lock, setLock] = useState(false);

  const toggle = (index) => {
    if (board[index] !== "" || lock) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "x" : "o";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const renderBox = (index) => (
    <div className="boxes" onClick={() => toggle(index)}>
      {board[index] === "x" && <img src={cross_icon} alt="X" />}
      {board[index] === "o" && <img src={circle_icon} alt="O" />}
    </div>
  );

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>

      <div className="board">
        <div className="row1">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>

        <div className="row2">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>

        <div className="row3">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>

      <button className="reset">Reset</button>
    </div>
  );
};
