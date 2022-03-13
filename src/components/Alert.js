const Alert = ({ onClose }) => {
  return (
    <div onClick={() => onClose()}>
      <div
        className="backdrop"
      ></div>
      <div className="alert">
        <h3>Please set custom name players for both players!</h3>
      </div>
    </div>
  );
};

export default Alert;
