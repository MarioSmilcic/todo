import Task from "./components/Task";
import { useTasksStore } from "../../store/tasks/tasks.store";
import { motion } from "framer-motion";
import { taskListVariants } from "../../utils/animations/variants";
import "./taskList.style.css";

const TaskList = () => {
  const { tasks } = useTasksStore();
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <motion.div
      className="task_list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="tasks_outer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="task_about">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Finished tasks!
          </motion.h2>
          {completedTasks > 0 && (
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Keep going!
            </motion.h3>
          )}
        </div>
        <motion.div
          className="tasks_number"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {completedTasks}/{tasks.length}
        </motion.div>
      </motion.div>

      <motion.div
        className="tasks_container"
        variants={taskListVariants}
        initial="hidden"
        animate="visible"
      >
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task.task}
            id={task.id}
            isCompleted={task.isCompleted}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TaskList;
