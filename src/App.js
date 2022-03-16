import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Player from "./components/Player";
import Board from "./components/Board";
import Alert from "./components/Alert";

const App = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [activatedPlayers, setActivatedPlayer] = useState(1);
  const [validationName, setValidationName] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [alert, setAlert] = useState(false);
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
 
  const [players, setPlayers] = useState([
    {
      name: "",
      symbol: "X",
    },
    {
      name: "",
      symbol: "O",
    },
  ]);

  const onConfirm = (name, e) => {
    e.preventDefault();
    const numberPlayer = selectedPlayer - 1;

    if (name.trim() === "") {
      setValidationName(true);
      return;
    }

    if (numberPlayer > -1) {
      const mainPlayers = [...players];
      const updatingPlayer = { ...mainPlayers[numberPlayer] };

      updatingPlayer.name = name;
      mainPlayers[numberPlayer] = updatingPlayer;
      setPlayers([...mainPlayers]);
    }
    setToggleForm(false);
    setValidationName(false);
  };

  const onEdit = (numberPlayer) => {
    setToggleForm(true);
    setSelectedPlayer(numberPlayer);
  };

  const onCancel = () => {
    setToggleForm(false);
    setValidationName(false);
  };

  const onStart = () =>{
    if ((players[0].name || players[1].name) === "") {
      setAlert(true);
      return;
    }

    setStartGame(true);
  }

  const onClose = () => {
    setAlert(false);
  }

  const onTick = (r, c, e) => {
    const col = +c;
    const row = +r;
    if (matrix[row][col] !== 0 || e.target.innerText !== "") {
      return;
    }
    const mainMatrix = [...matrix];
    const updatingRow = [...mainMatrix[row]];

    updatingRow[col] = activatedPlayers;
    mainMatrix[row] = updatingRow;

    setMatrix([...mainMatrix]);

    if (activatedPlayers === 1) {
      setActivatedPlayer(2);
    } else {
      setActivatedPlayer(1);
    }

    console.log(row, col)
  };

  return (
    <>
      <Header onCancel={onCancel} toggleForm={toggleForm} />
      <main>
        <Form
          toggleForm={toggleForm}
          onConfirm={onConfirm}
          onCancel={onCancel}
          validationName={validationName}
        />
        <Player players={players} onEdit={onEdit} onStart={onStart} />
        <Board startGame={startGame} activatedPlayers={activatedPlayers} players={players} onTick={onTick} matrix={matrix} />
        { alert && <Alert onClose={onClose} /> }
      </main>
    </>
  );
};

export default App;
