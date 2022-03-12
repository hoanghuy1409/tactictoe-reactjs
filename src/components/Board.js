const Board = () => {
  return (
    <section id="active-game">
      <article class="game-over">
        <h2>
          You won, <span id="winner-name">PLAYER NAME</span>!
        </h2>
        <p>Press "Start New Game" above to create a new game.</p>
      </article>
      <p>
        It's your turn <span id="active-player-name">PLAYER NAME</span>!
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
    </section>
  );
};
export default Board;
