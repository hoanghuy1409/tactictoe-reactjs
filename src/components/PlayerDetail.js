const PlayerDetail = ({ onEdit, player, numberPlayer}) => {  

  return (
    <li>
      <article id="player-1-data">
        <h2>Player {numberPlayer}</h2>
        <h3>{player.name ? player.name : "PLAYER NAME"}</h3>
        <p className="player-symbol">{player.symbol}</p>
        <button
          className="btn btn-alt"     
          onClick={() => onEdit(numberPlayer)}
        >
          Edit
        </button>
      </article>
    </li>
  );
};

PlayerDetail.defaultProps = {
  playerName: "PLAYER NAME"
}

export default PlayerDetail;
