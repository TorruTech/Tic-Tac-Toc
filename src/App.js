import { useState } from 'react';
import { Reset } from './Reset.jsx'
import { Counter } from './Counter.jsx'
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Board } from './Board.jsx';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XWins, setXWins] = useState(0);
  const [OWins, setOWins] = useState(0);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(nextSquares);
    if (winner && xIsNext) {
      setXWins(XWins + 1); // Incrementa el contador de victorias
    } else if (winner && !xIsNext) {
      setOWins(OWins + 1);
    }
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const currentPlayer = xIsNext ? 'X' : 'O';

  const clearBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  
  return (
    <div className='Game'>
      <Header />
      <div className="status">{status}</div>
      <div className="board">
        <Board squares={squares} currentPlayer={currentPlayer} handleClick={handleClick} />
        <Reset className="reset-button" clearBoard={clearBoard} buttonName={"Reset game"}/>
        <Counter wins={XWins} currentPlayer={"X"}/>
        <Counter wins={OWins} currentPlayer={"O"}/>
        <Footer />
      </div>
    </div>
  );
}

