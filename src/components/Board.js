const Board = ({ startGame, activatedPlayers, players }) => {
  return (
    <section id="active-game">
      <article class="game-over" style={{display: "none"}}>
        <h2>
          You won, <span id="winner-name">PLAYER NAME</span>!
        </h2>
        <p>Press "Start New Game" above to create a new game.</p>
      </article>
      <div style={{display: true ? "block" : "none" }}> {/*startGame*/}
        <p>
          It's your turn <span id="active-player-name">{players[activatedPlayers].name}</span>!
        </p>
        <ol id="game-board">
          <li data-col="1" data-row="1"></li>
          <li data-col="2" data-row="1"></li>
          <li data-col="3" data-row="1"></li>

          <li data-col="1" data-row="2"></li>
          <li data-col="2" data-row="2"></li>
          <li data-col="3" data-row="2"></li>

          <li data-col="1" data-row="3"></li>
          <li data-col="2" data-row="3"></li>
          <li data-col="3" data-row="3"></li>
        </ol>
      </div>
    </section>
  );
};
export default Board;
