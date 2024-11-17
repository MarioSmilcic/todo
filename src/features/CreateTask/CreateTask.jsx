import Button from "../../components/Button/Button";
import "./createTask.style.css";
import { motion } from "framer-motion";
import { textVariants } from "../../utils/animations/variants";
import { useCreateTask } from "./hooks/useCreateTask";

const CreateTask = () => {
  const { enteredTask, handleEnteredTask, taskSubmitHandler } = useCreateTask();

  return (
    <motion.div
      className="create_task"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        custom="left"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        What is your next task?
      </motion.h2>

      <motion.form
        onSubmit={taskSubmitHandler}
        className="form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.input
            type="text"
            className="input"
            placeholder="Enter your task..."
            value={enteredTask}
            onChange={handleEnteredTask}
            id={Math.random()}
            autoFocus
            maxLength={30}
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 8px rgba(126, 217, 87, 0.5)",
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button text="Save" />
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default CreateTask;
// import Button from "../../components/Button/Button";
// import "./createTask.style.css";
// import { motion } from "framer-motion";
// import { textVariants } from "../../utils/animations/variants";
// import { useCreateTask } from "./hooks/useCreateTask";

// const CreateTask = () => {
//   const { enteredTask, handleEnteredTask, taskSubmitHandler } = useCreateTask();

//   return (
//     <div className="create_task">
//       <motion.h2
//         custom="left"
//         variants={textVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         What is your next task?
//       </motion.h2>
//       <form onSubmit={taskSubmitHandler} className="form">
//         <div>
//           <input
//             type="text"
//             className="input"
//             placeholder="Enter your task..."
//             value={enteredTask}
//             onChange={handleEnteredTask}
//             id={Math.random()}
//             autoFocus
//             maxLength={30}
//           />
//         </div>
//         <Button text="Save" />
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
