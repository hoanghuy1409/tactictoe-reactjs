import PlayerDetail from "./PlayerDetail";

const Player = ({ onEdit, players }) => {
 

  return (
    <section id="game-configuration">
      <ol>
        {players.map((player, index) => (
          <PlayerDetail key={index} player={player} onEdit={onEdit} numberPlayer={index + 1} />
        ))}
      </ol>
      <button class="btn">
        Start New Game
      </button>
    </section>
  );
};

export default Player;
