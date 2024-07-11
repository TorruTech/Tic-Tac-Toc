
export const Counter = ({ wins, currentPlayer }) => {
  return (
    <h2 className="counter">Total wins {currentPlayer}: {wins}</h2>
  );
}