import { motion } from "framer-motion";
import "./hamburger.style.css";

const Hamburger = ({ onModal }) => {
  const linePath1 = "M 5 10 L 45 10";
  const linePath2 = "M 5 25 L 45 25";
  const linePath3 = "M 5 40 L 45 40";

  const lineProps = {
    stroke: "#2c3d50",
    strokeWidth: "4",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke",
  };

  const pathTransitions = {
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      className="hamburger"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="32"
        height="32"
        onClick={onModal}
      >
        <motion.path
          d={linePath1}
          {...lineProps}
          whileHover={{ y: -1 }}
          {...pathTransitions}
        />
        <motion.path
          d={linePath2}
          {...lineProps}
          whileHover={{ x: 2 }}
          {...pathTransitions}
        />
        <motion.path
          d={linePath3}
          {...lineProps}
          whileHover={{ y: 1 }}
          {...pathTransitions}
        />
      </svg>
    </motion.div>
  );
};

export default Hamburger;
