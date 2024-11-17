import { motion } from "framer-motion";
import "./modals.style.css";

const Backdrop = ({ children, onCancel }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCancel();
        }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
