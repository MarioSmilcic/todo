import "./button.style.css";
import { motion } from "framer-motion";

const Button = ({ text, handleClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`button ${text === "Dismiss" && "button_dismiss"} ${
        text === "Confirm" && "button_confirm"
      }`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
