import { motion } from "framer-motion";
import "../about.style.css";

const Tech = ({ name, description, index }) => {
  return (
    <motion.div
      className="tech-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default Tech;
