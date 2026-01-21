import { useState, useEffect } from "react";
import "./Tictactoe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

export const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  const toggle = (index) => {
    if (board[index] !== "" || lock) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "x" : "o";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const checkWin = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of wins) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        setLock(true);
        return;
      }
    }
    if (!board.includes("")) {
      setTie(true);
      setLock(true);
    }
  };

  useEffect(() => {
    checkWin();
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setLock(false);
    setWinner(null);
    setTie(false);
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
        {winner ? (
          <>
            Congratulations: <span>{winner.toUpperCase()}</span> wins
          </>
        ) : tie ? (
          <>
            It&apos;s a <span>tie</span> 🤝
          </>
        ) : (
          <>
            Tic Tac Toe Game In <span>React</span>
          </>
        )}
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

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};
