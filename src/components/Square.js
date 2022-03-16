const Square = ({ row, col, players, matrix, onTick }) => {
  const tickedValue = matrix[row][col];
  const displaySymbol = () => {
    if (tickedValue) {
      return players[tickedValue - 1].symbol;
    }
    return ""
  }

  return (
    <li className={tickedValue ? "disable" : ""} onClick={(e) => onTick(row, col, e)}>
      {displaySymbol()}
    </li>
  );
};

export default Square;
