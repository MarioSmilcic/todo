import { motion } from "framer-motion";
import "./about.style.css";
import Features from "./components/Features";
import Technologies from "./components/Technologies";

const About = () => {
  return (
    <div className="about">
      <motion.section
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About This Project
        </motion.h1>
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          This is a demo todo application showcasing modern web development
          practices and React ecosystem capabilities. The project demonstrates
          CRUD operations, state management, routing, and responsive design
          principles while maintaining a clean and intuitive user interface.
        </motion.p>
      </motion.section>
      <Features />
      <Technologies />
    </div>
  );
};

export default About;
