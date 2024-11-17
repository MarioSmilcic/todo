import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.style.css";
import { textVariants } from "../../utils/animations/variants";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/createTask");
  };

  return (
    <div className="home">
      <div className="home_text">
        <motion.h2
          custom="left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          What are you planning today?
        </motion.h2>
        <motion.h2
          custom="right"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Create your new task!
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button text="Create" handleClick={handleNavigate} />
      </motion.div>
    </div>
  );
};

export default Home;
