import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Player from "./components/Player";
import Board from "./components/Board";

const App = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [validationName, setValidationName] = useState(false);
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
        <Player players={players} onEdit={onEdit} />
        <Board />
      </main>
    </>
  );
};

export default App;
