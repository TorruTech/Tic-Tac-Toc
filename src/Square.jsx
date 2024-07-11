export const Square = ({ value, onSquareClick, currentPlayer }) => {
    let className = "square";
  
    if (value === 'X' || value === 'O') {
      className += " " + value;
    } else if (currentPlayer === 'X') {
      className += " X";
    } else {
      className += " O";
    }
  
    return (
      <button className={className} onClick={onSquareClick}>
        {value}
      </button>
    );
  };
  