import "./button.style.css";

const Button = ({ text, onNavigate }) => {
  return (
    // <div className="button">
    // <button>{text}</button>
    <button onClick={onNavigate} className="button">
      {text}
    </button>
    // </div>
  );
};

export default Button;
