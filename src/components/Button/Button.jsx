import "./button.style.css";

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`button ${text === "Dismiss" && "button_dismiss"}`}
    >
      {text}
    </button>
  );
};

export default Button;
