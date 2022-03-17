import { Fragment } from "react";
import Square from "./Square";

const Board = ({ startGame, activatedPlayers, players, onTick, matrix, playerWin, countTick }) => {
  const ilElements = [];
  let k = 0;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      k += 1;
      ilElements.push(
        <Square
          key={k}
          row={i}
          col={j}
          players={players}
          matrix={matrix}
          onTick={onTick}
        />
      );
    }
  }
 

  return (
    <section id="active-game">
      <article className="game-over" style={{ display: playerWin ? "block" : "none" }}>
        <h2>
          { playerWin === -1 ? <>It's draw!</> : <>You won, <span id="winner-name">{playerWin && players[playerWin - 1].name}</span>!</>}
        </h2>
        <p>Press "Start New Game" above to create a new game.</p>
      </article>
      <div style={{ display: startGame ? "block" : "none" }}>{/*startGame*/}
        {!playerWin && <p>
          It's your turn 
          <span id="active-player-name"> {players[activatedPlayers - 1].name}</span>!
        </p>}
        <ol id="game-board">
          {ilElements.map((value, index) => (
            <Fragment key={index}>
              {value}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
};
export default Board;
