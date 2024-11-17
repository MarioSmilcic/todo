import { motion } from "framer-motion";
import { appFeatures } from "../../../data/app-data";
import "../about.style.css";
import {
  containerVariants,
  itemVariants,
} from "../../../utils/animations/variants";

const Features = () => {
  return (
    <motion.div
      className="features-section"
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
        Key Features
      </motion.h2>
      <motion.ul
        className="features-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {appFeatures.map((feature) => (
          <motion.li
            key={feature.id}
            variants={itemVariants}
            whileHover={{ x: 15, transition: { duration: 0.2 } }}
          >
            {feature.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Features;
