import { Square } from "./Square";

export const Board = ({squares, currentPlayer, handleClick}) => {
    return (
        <>
            <div className="board-row">
            <Square value={squares[0]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} currentPlayer={currentPlayer} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}