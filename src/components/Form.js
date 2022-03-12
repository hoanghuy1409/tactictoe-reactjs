import React, { useState, useEffect } from "react";

const Form = ({ toggleForm, onConfirm, onCancel, validationName }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (!toggleForm) {
      setName("");
    }
  }, [toggleForm]);

  return (
    <aside
      className="modal"
      id="config-overlay"
      style={{ display: toggleForm ? "block" : "none" }}
    >
      <h2>Choose your name</h2>
      <form autoComplete="off" onSubmit={(e) => onConfirm(name, e)}>
        <div className={ validationName && !name ? "form-control error" :"form-control"} >
          <label htmlFor="playername">Player name</label>
          <input
            type="text"
            name="playername"
            id="playername"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <p>{validationName ? "Please enter a valid name!" : ""}</p>
        <div>
          <button type="reset" className="btn btn-alt" onClick={() => onCancel()}>
            Cancel
          </button>
          <button type="submit" className="btn">
            Confirm
          </button>
        </div>
      </form>
    </aside>
  );
};

export default Form;
