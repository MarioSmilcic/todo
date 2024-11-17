import { motion } from "framer-motion";
import Tech from "./Tech";
import { appTechnologies } from "../../../data/app-data";

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technologies Used
      </motion.h2>
      <div className="tech-grid">
        {appTechnologies.map((tech, index) => (
          <Tech
            key={tech.id}
            name={tech.name}
            description={tech.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;
