const Header = ({ onCancel, toggleForm }) => {
  return (
    <>
      <div
        className="backdrop"
        style={{ display: toggleForm ? "block" : "none" }}
        onClick={() => onCancel()}
      ></div>
      <header id="main-header">
        <h1>Play Tac, Tic, Toe</h1>
        <p>Built with HTML, CSS, JavaScript</p>
      </header>
    </>
  );
};

export default Header;
